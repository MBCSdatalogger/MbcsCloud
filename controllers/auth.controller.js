/**
 * Create a log in or sign up Controller.
 */

const { response, request } = require("express")


const authSchema = (req, res) =>{
    const schema = Joi.Object({
        userid: Joi.string().required(),
        passwor: Joi.string().required()
    });
     validateReq(req, next, schema);
}

const authenticate = (req, res, next)=> {
    userService.authenticate(req.body)
    .then(user => req.userid)
    .catch(err)
}

const authRegister = (req, res, next) => {
    const schema = Joi.Object({
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        username: Joi.string().required(),
        password: Joi.string().min(6).required(),
        email: Joi.string().required(),
        landmark: Joi.string()
    });
    validateReq(req, next, schema);
}
 const register = (req, res, next) => {
    userService.create(req.body)
    .then(user => req.create)  
 }

const validate = (req, res, next) =>{
    userService.validate(res.body)
    .then(user => res.create)
}

module.export = {authSchema, authenticate, authRegister, register };