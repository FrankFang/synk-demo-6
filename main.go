package main

import (
	"os"
	"os/exec"
	"os/signal"

	"github.com/frankfang/synk/config"
	"github.com/frankfang/synk/server"
)

func main() {
	go server.Run()
	cmd := startBrowser()
	chSignal := listenToInterrupt()
	select {
	case <-chSignal:
		cmd.Process.Kill()
	}
}

func startBrowser() *exec.Cmd {
	// 先写死路径，后面再照着 lorca 改
	chromePath := "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
	cmd := exec.Command(chromePath, "--app=http://127.0.0.1:"+config.GetPort()+"/static/index.html")
	cmd.Start()
	return cmd
}

func listenToInterrupt() chan os.Signal {
	chSignal := make(chan os.Signal, 1)
	signal.Notify(chSignal, os.Interrupt)
	return chSignal
}
