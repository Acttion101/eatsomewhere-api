'use strict'

class AdminController {

    async update({ request }) {

        const { body, params } = request
        const { id } = params
        const { first_name, last_name, age, admin_name, status } = body


        const adminId = await Database
            .table('admins')
            .where({ admin_id: id })
            .update({ first_name, last_name, age, admin_name, status })

        const admin = await Database
            .table('admins')
            .where({ admin_id: adminId })
            .first()

        return { status: 200, error: undefined, data: admin }
    }
    async destroy({ request }) {
        const { id } = request.params

        await Database
            .table('admins')
            .where({ admin_id: id })
            .delete()

        return { status: 200, error: undefined, data: { maessage: 'success' } }
    }
}

module.exports = AdminController