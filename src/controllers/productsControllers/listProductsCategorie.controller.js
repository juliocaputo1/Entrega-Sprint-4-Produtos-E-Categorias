import listProductsCategoryService from "../../services/productsServices/listProductsCategory.services"

const listProductsCategoryController = async (request, response) => {

    const { category_id } = request.params

    try {
        const products = await listProductsCategoryService(category_id)

        return response.status(200).json(products)
    }
    catch (err) {
        return response.status(400).json(err.message)
    }
}

export default listProductsCategoryController