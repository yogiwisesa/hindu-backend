'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.get('/', ({ request }) => {
  return { greeting: 'Hindu API' }
})

Route.post('/register', 'AuthController.postRegister')
Route.post('/login', 'AuthController.postLogin')
Route.post('/logout', 'AuthController.postLogout').middleware(['auth'])
Route.get('/profile', 'AuthController.getProfileJwt').middleware(['auth'])


Route.post('/mantra', 'MantraController.postMantra').middleware(['auth'])
Route.get('/mantra', 'MantraController.getAcceptedMantras')
Route.get('/allmantras', 'MantraController.getMantras')

Route.post('/kidung', 'KidungController.postKidung').middleware(['auth'])
Route.get('/kidung', 'KidungController.getAcceptedKidungs')
Route.get('/allkidungs', 'KidungController.getKidungs')

