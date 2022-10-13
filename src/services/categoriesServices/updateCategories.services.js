import database from "../../database"

const updateCategoriesService = async (id, name) => {

    try {
        const res = await database.query(
            'UPDATE categories SET name = $2 WHERE id = $1 RETURNING *',
            [id, name]
        )

        if (res.rows.length === 0) {
            throw "Category not found"
        }

        return res.rows[0]
    }
    catch (err) {
        throw new Error(err)
    }
}

export default updateCategoriesService