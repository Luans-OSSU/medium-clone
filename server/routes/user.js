const usercontroller = require('./../controllers/user.ctrl');


module.exports = (router) => {

    // Get User
    router.route('/user/:id').get(usercontroller.getUser);

    // Get user profile
    router.route('/user/profile/:id').get(usercontroller.getUserProfile);

    // Add user
    router.route('/user').post(usercontroller.addUser);

    // Follow user
    router.route('/user/follow').post(usercontroller.followUser);
}