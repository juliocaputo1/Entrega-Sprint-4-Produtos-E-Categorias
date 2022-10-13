import database from "../../database"

const deleteCategoriesService = async (id) => {
    try {
        const res = await database.query(
            'DELETE FROM categories WHERE id = $1 RETURNING *',
            [id]
        )

        if (res.rows.length === 0) {
            throw "user not found"
        }
        return 'user deleted'

    }
    catch (err) {
        throw new Error(err)
    }
}

export default deleteCategoriesService