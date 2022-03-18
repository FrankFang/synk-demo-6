package main

import (
	"fmt"
	"io/ioutil"
	"os"
	"os/exec"
	"os/signal"

	"github.com/frankfang/synk/config"
	"github.com/frankfang/synk/server"
)

func main() {
	chChromeDie := make(chan struct{})
	chBackendDie := make(chan struct{})
	chSignal := listenToInterrupt()
	go server.Run()
	//创建一个临时目录来缓存新开的浏览器配置文件
	var tmpDir string
	name, _ := ioutil.TempDir("", "lorca") //这里的lorca字符串是用来标记存储路径，可以自定义
	tmpDir = name
	go startBrowser(chChromeDie, chBackendDie, tmpDir)
	for {
		select {
		case <-chSignal:
			chBackendDie <- struct{}{}
		case <-chChromeDie:
			os.Exit(0)
		}
	}
	//浏览器关闭后一定要删除缓存文件，不然会增加磁盘负担
	os.RemoveAll(tmpDir)
}

func startBrowser(chChromeDie chan struct{}, chBackendDie chan struct{}, tmpDir string) {
	// 先写死路径，后面再照着 lorca 改
	chromePath := "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
	//添加"--user-data-dir="选项将新开浏览器的配置文件保存至对应目录
	cmd := exec.Command(chromePath, "--app=http://127.0.0.1:"+config.GetPort()+"/static/index.html",
		fmt.Sprintf("--user-data-dir=%s", tmpDir), "--no-first-run")
	cmd.Start()
	go func() {
		<-chBackendDie
		cmd.Process.Kill()
	}()
	go func() {
		cmd.Wait()
		chChromeDie <- struct{}{}
	}()
}

func listenToInterrupt() chan os.Signal {
	chSignal := make(chan os.Signal, 1)
	signal.Notify(chSignal, os.Interrupt)
	return chSignal
}
