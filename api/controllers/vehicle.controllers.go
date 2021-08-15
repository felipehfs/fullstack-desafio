package controllers

import (
	"github.com/felipehfs/tex-api/models"
	"github.com/felipehfs/tex-api/repositories"
	"github.com/gofiber/fiber/v2"
)

type VehicleController struct {
	Repository repositories.VehicleRepository
}

func (v VehicleController) ReadAll(ctx *fiber.Ctx) error {
	vehicles := v.Repository.ReadAll()
	return ctx.JSON(vehicles)
}

func (v VehicleController) Create(ctx *fiber.Ctx) error {
	var vehicle models.Vehicle
	if err := ctx.BodyParser(&vehicle); err != nil {
		return ctx.Status(400).JSON(fiber.Map{
			"errors": []string{
				err.Error(),
			},
		})
	}

	err := v.Repository.Create(&vehicle)
	if err != nil {
		return ctx.Status(400).JSON(fiber.Map{
			"errors": []string{
				err.Error(),
			},
		})
	}

	return ctx.Status(201).JSON(vehicle)
}

func (v VehicleController) Update(ctx *fiber.Ctx) error {
	var vehicle models.Vehicle
	if err := ctx.BodyParser(&vehicle); err != nil {
		return ctx.Status(400).JSON(fiber.Map{
			"errors": []string{
				err.Error(),
			},
		})
	}

	err := v.Repository.Update(&vehicle)
	if err != nil {
		return ctx.Status(400).JSON(fiber.Map{
			"errors": []string{
				err.Error(),
			},
		})
	}

	return ctx.Status(201).JSON(vehicle)
}
