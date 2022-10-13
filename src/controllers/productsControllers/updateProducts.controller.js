import updateProductsService from "../../services/productsServices/updateProducts.services"

const updateProductsController = async (request, response) => {

    const { name } = request.body

    const { id } = request.params

    try {
        const updatedProduct = await updateProductsService(id, name)

        return response.status(200).json({ message: "Atualizado", product: updatedProduct })
    }
    catch (err) {
        return response.status(400).json({ message: err.message })
    }
}

export default updateProductsController