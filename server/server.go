package server

import (
	"embed"
	"io/fs"
	"log"
	"net/http"
	"strings"

	"github.com/frankfang/synk/config"
	c "github.com/frankfang/synk/server/controller"
	"github.com/frankfang/synk/server/ws"
	"github.com/gin-gonic/gin"
)

//go:embed frontend/dist/*
var FS embed.FS

func Run() {
	hub := ws.NewHub()
	go hub.Run()

	gin.SetMode(gin.DebugMode)
	router := gin.Default()
	staticFiles, _ := fs.Sub(FS, "frontend/dist")
	router.POST("/api/v1/files", c.FilesController)
	router.GET("/api/v1/qrcodes", c.QrcodesController)
	router.GET("/uploads/:path", c.UploadsController)
	router.GET("/api/v1/addresses", c.AddressesController)
	router.POST("/api/v1/texts", c.TextsController)
	router.GET("/ws", func(c *gin.Context) {
		ws.HttpController(c, hub)
	})
	router.StaticFS("/static", http.FS(staticFiles))
	router.NoRoute(func(c *gin.Context) {
		path := c.Request.URL.Path
		if strings.HasPrefix(path, "/static/") {
			reader, err := staticFiles.Open("index.html")
			if err != nil {
				log.Fatal(err)
			}
			defer reader.Close()
			stat, err := reader.Stat()
			if err != nil {
				log.Fatal(err)
			}
			c.DataFromReader(http.StatusOK, stat.Size(), "text/html;charset=utf-8", reader, nil)
		} else {
			c.Status(http.StatusNotFound)
		}
	})
	router.Run(":" + config.GetPort())
}
