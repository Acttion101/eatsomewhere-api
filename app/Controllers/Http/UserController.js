'use strict'
const Database = use('Database')
const Validator = use('Validator')
function numberTypeParamValidator(number) {
    if(Number.isNaN(parseInt(number))) 
        return { error:  `param: ${number} is not support, Pleasr use number type param instead. ` }
    return {}
}
class UserController {
    async index(){
        const data = await Database.table('groups')
        return { status : 200 , error : undefined, data : group}
    }
    async show({request}){
        const { id } = request.params
        const validatedValue = numberTypeParamValidator(id)
        if(validatedValue.error) return {status: 500, error : validatedValue.error, data : undefined}
        const user= await Database
        .select('*')
        .from('users')
        .where("user_id",id)
        .first()
        return{ status: 200, error : undefined, data : user ||{} }
    }
    async store ({request}){
        const {first_name,last_name,age,user_name,password,status} = request.body
        const rules ={
                first_name:'required',
                last_name:'required',
                age:'required',
                user_name:'required',
                password:'required|min:8'
         }
        const validattion = await Validator.validateAll(request.body,rules)
        if(validattion.fails())
        return { status: 422 ,error:validattion.messages(),data:undefined}

        const hashedPassword = await Hash.make(password)
        const user = await Database
        .table('users')
        .insert({first_name,last_name,age,user_name,password,status})
        return {status : 200,error : undefined , data : {user} }
    }
    async update({request}){
        const {body,params}=request
        const {id}=params
        const {first_name,last_name,age,user_name,password,status} = body 

        const userId = await Database
        .table('users')
        .where({user_id:id})
        .update({first_name,last_name,age,user_name,password,status})

        const user = await Database 
        .table('users')
        .where({user_id:studentId})
        .first()
        return{status : 200,error : undefined , data : { user } }
    }
}

module.exports = UserController
