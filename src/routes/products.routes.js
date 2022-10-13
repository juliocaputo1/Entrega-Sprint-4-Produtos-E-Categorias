import { Router } from "express";

import createProductsController from "../controllers/productsControllers/createProducts.controller"
import deleteProductsController from "../controllers/productsControllers/deleteProducts.controller"
import listProductsController from "../controllers/productsControllers/listProducts.controller"
import listOneProductController from "../controllers/productsControllers/listOneProduct.controller"
import updateProductsController from "../controllers/productsControllers/updateProducts.controller"
import listProductsCategoryController from "../controllers/productsControllers/listProductsCategorie.controller"

import verifyIfProductsHaveNullValues from "../middlewares/verifyIfProductsHaveNullValues.middleware";

const router = Router()

router.post("", verifyIfProductsHaveNullValues, createProductsController)

router.get("", listProductsController)

router.get("/:id", listOneProductController)

router.patch("/:id", updateProductsController)

router.delete("/:id", deleteProductsController)

router.get("/category/:category_id", listProductsCategoryController)

export default router