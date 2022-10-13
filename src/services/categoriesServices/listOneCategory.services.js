import database from "../../database"

const listOneCategoryService = async (id) => {

    try {
        const res = await database.query(
            'SELECT * FROM categories WHERE id = $1',
            [id]
        )
        if (res.rows.length === 0) {
            throw new Error('category not found')
        }
        return res.rows[0]
    }
    catch (err) {
        throw new Error(err)
    }

}

export default listOneCategoryService