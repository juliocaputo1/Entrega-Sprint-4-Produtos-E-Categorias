import deleteProductsService from "../../services/productsServices/deleteProducts.services"

const deleteProductsController = async (request, response) => {

    const { id } = request.params

    try {
        const deletedProduct = await deleteProductsService(id)

        return response.status(204).json(deletedProduct)
    }
    catch (err) {
        return response.status(400).json({ message: err.message })
    }
}

export default deleteProductsController