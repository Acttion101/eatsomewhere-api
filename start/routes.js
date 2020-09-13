'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
    return { greeting: 'Hello world in JSON' }
})

Route.group(() => {
    Route.resource('/users', 'UserController')
    Route.resource('/communitys', 'CommunityController')
    Route.resource('/communitys/:id/User', 'CommunityController.showUser')
    Route.resource('/admins', 'AdminController')
    Route.resource('/admin_update_news', 'AdminUpdateNewController')
    Route.resource('/news', 'NewsController')
    Route.resource('/stores', 'StoreController')
}).prefix('api/v2')