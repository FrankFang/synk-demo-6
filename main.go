package main

import (
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
	go startBrowser(chChromeDie, chBackendDie)
	for {
		select {
		case <-chSignal:
			chBackendDie <- struct{}{}
		case <-chChromeDie:
			os.Exit(0)
		}
	}
}

func startBrowser(chChromeDie chan struct{}, chBackendDie chan struct{}) {
	// 先写死路径，后面再照着 lorca 改
	chromePath := "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
	cmd := exec.Command(chromePath, "--app=http://127.0.0.1:"+config.GetPort()+"/static/index.html")
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
