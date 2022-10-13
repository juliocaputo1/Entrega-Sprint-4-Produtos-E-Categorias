import updateCategoriesService from "../../services/categoriesServices/updateCategories.services"

const updateCategoriesController = async (request, response) => {

    const { name } = request.body

    const { id } = request.params

    try {
        const updatedCategory = await updateCategoriesService(id, name)

        return response.status(200).json({ message: "Atualizada", category: updatedCategory })
    }
    catch (err) {
        return response.status(400).json({ message: err.message })
    }
}

export default updateCategoriesController