package main

import (
	"github.com/felipehfs/tex-api/config"
	"github.com/felipehfs/tex-api/models"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func main() {
	db, err := gorm.Open(sqlite.Open("test.db"), &gorm.Config{})
	if err != nil {
		panic("Failed to connect database")
	}

	db.AutoMigrate(&models.Vehicle{})
	server := config.NewServer(db)
	server.Run(":8300")
}
