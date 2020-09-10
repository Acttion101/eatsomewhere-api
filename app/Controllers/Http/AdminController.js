'use strict'

class AdminController {
    async store({ request }) {
        const { first_name, last_name, admin_name, password, status } = request.body

        const validatedData = await NewValidator(request.body)

        if (validatedData.error)
            return { status: 422, error: validatedData.error, data: undefined }


        const news = new New();
        news.first_name = first_name;
        news.last_name = last_name;
        news.admin_name = admin_name;
        news.password = password;
        news.status = status;
        await new.save()

        return { status: 200, error: undefined, data: news }

    }
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