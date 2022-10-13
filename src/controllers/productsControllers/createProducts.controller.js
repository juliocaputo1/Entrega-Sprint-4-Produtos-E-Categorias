import createProductsService from "../../services/productsServices/createProducts.services"
import { v4 as uuidv4 } from "uuid"

const createProductsController = async (request, response) => {

    const { name, price, category_id } = request.body

    const id = uuidv4()

    try {
        const product = await createProductsService(id, name, price, category_id)

        return response.status(201).json({ message: "product created", product })
    }
    catch (err) {
        return response.status(400).json(err.message)
    }
}

export default createProductsController