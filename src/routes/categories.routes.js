import { Router } from "express";

import createCategoriesController from "../controllers/categoriesControllers/createCategories.controller"
import deleteCategoriesController from "../controllers/categoriesControllers/deleteCategories.controller"
import listCategoriesController from "../controllers/categoriesControllers/listCategories.controller"
import listOneCategoryController from "../controllers/categoriesControllers/listOneCategory.controller"
import updateCategoriesController from "../controllers/categoriesControllers/updateCategories.controller"

const router = Router()

router.post("", createCategoriesController)

router.get("", listCategoriesController)

router.get("/:id", listOneCategoryController)

router.patch("/:id", updateCategoriesController)

router.delete("/:id", deleteCategoriesController)

export default router