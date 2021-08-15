package models

import (
	"gorm.io/gorm"
)

type Vehicle struct {
	ID          int    `json:"id,omitempty" gorm:"primaryKey"`
	Description string `json:"description"`
	Year        int    `json:"year"`
	Brand       string `json:"brand"`
	Modelo      string `json:"model"`
	Sold        bool   `json:"sold"`
	gorm.Model  `json:"-"`
}
