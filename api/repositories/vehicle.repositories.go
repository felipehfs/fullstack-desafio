package repositories

import (
	"github.com/felipehfs/tex-api/models"
	"gorm.io/gorm"
)

type VehicleRepository struct {
	Session *gorm.DB
}

func NewVehicleRepository(session *gorm.DB) VehicleRepository {
	return VehicleRepository{
		Session: session,
	}
}

func (v *VehicleRepository) ReadAll() []models.Vehicle {
	var vehicles []models.Vehicle
	v.Session.Find(&vehicles).Order("CreatedAt")
	return vehicles
}

func (v *VehicleRepository) Create(vehicle *models.Vehicle) error {
	tx := v.Session.Create(vehicle)
	return tx.Error
}

func (v *VehicleRepository) Update(vehicle *models.Vehicle) error {
	tx := v.Session.Save(vehicle)
	return tx.Error
}
