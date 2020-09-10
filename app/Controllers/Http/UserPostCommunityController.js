'use strict'
const Database = use('Database')
const Validator = use('Validator')
function numberTypeParamValidator(number) {
    if(Number.isNaN(parseInt(number))) 
        return { error:  `param: ${number} is not support, Pleasr use number type param instead. ` }
    return {}
}
class UserPostCommunityController {
    async index(){
        const data = await Database.table('enrollments')
        return { status : 200 , error : undefined, data : data}
    }
    async show({request}){
        const { id } = request.params
        const validatedValue = numberTypeParamValidator(id)
        if(validatedValue.error) return {status: 500, error : validatedValue.error, data : undefined}
        const user_post_communitys = await Database
        .select('*')
        .from('user_post_communitys')
        .where("user_post_community_id",id)
        .first()
        return{ status: 200, error : undefined, data : user_post_communitys ||{} }
    }
    // async showStuent({request}){
    //     const{ id } =request.params
    //     const student = await Database
    //     .table('enrollments')
    //     .where("enrollmentt_id",id)
    //     .innerJoin('students','enrollments.student_id','students.student_id')
    //     .first()
    //     return{ status: 200, error : undefined, data : student ||{} }
    // }
    // async showSubject({request}){
    //     const{ id } =request.params
    //     const Subject = await Database
    //     .table('enrollments')
    //     .where("enrollmentt_id",id)
    //     .innerJoin('Subjects','enrollments.Subject_id','Subjects.Subject_id')
    //     .first()
    //     return{ status: 200, error : undefined, data : Subject ||{} }
    // }
    async store ({request}){
        const {user_id,community_id} = request.body
        
        const user_post_community = await Database
        .table('user_post_communitys')
        .insert({enrollment_id,mark,mark_date,update_at})
        return {status : 200,error : undefined , data : {user_post_community} }
    }
    async update({request}){
        const {body,params}=request
        const {id}=params
        const {user_id,community_id} = body 

        const user_post_communityId = await Database
        .table('user_post_communitys')
        .where({user_post_community_id:id})
        .update({user_id,community_id})

        const user_post_community = await Database 
        .table('user_post_communitys')
        .where({user_id,community_id})
        .first()

        return{status : 200,error : undefined , data : { user_post_community } }
    }

    async destroy({request}){
        const{id}=request.params

        await Database
        .table('user_post_communitys')
        .where({user_id,community_id:id})
        .delete()

        return {status : 200,error : undefined , data : {massage : 'success'} }
    }
}

module.exports = UserPostCommunityController
