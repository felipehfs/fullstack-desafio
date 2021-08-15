package config

import (
	"github.com/felipehfs/tex-api/controllers"
	"github.com/felipehfs/tex-api/repositories"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"gorm.io/gorm"
)

type Server struct {
	Session *gorm.DB
	App     *fiber.App
}

func NewServer(session *gorm.DB) Server {
	return Server{
		Session: session,
		App:     fiber.New(),
	}
}

func (s Server) Run(address string) {

	s.App.Use(cors.New())

	vehicleRepository := repositories.NewVehicleRepository(s.Session)
	vehicleController := controllers.VehicleController{
		Repository: vehicleRepository,
	}

	s.App.Get("/vehicles", vehicleController.ReadAll)
	s.App.Post("/vehicles", vehicleController.Create)
	s.App.Put("/vehicles/:id", vehicleController.Update)
	s.App.Listen(address)
}
