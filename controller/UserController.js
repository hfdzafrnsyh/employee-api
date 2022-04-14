const User = require('../models/UsersModels');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.register = async (req, res) => {

    let Users = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        photo: req.body.photo
    });


    await User.findOne({ where: req.body.email })
        .then(user => {
            if (!user) {
                Users.save()
                    .then(users => {
                        res.status(201).json({
                            success: true,
                            users: users
                        })
                    })
                    .catch(err => {
                        res.status(400).json({
                            success: false,
                            error: err,
                            message: "Failed Register Bad Request"
                        })
                    })
            } else {
                res.status(400).json({
                    success: false,
                    message: "User Alreday Exist"
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                succes: false,
                error: err,
                message: "500 Internal Server Error"
            })
        })

}

module.exports.login = async (req, res) => {

    await User.findOne({ where: req.body.email })
        .then(user => {
            if (!user) {
                res.status(404).json({
                    success: false,
                    message: "User Not Found"
                })
            } else if (user && bcrypt.compareSync(req.body.password, user.password)) {

                const token = jwt.sign({
                    userId: user.id
                },
                    'secret',
                    {
                        expiresIn: '1d'
                    }
                )

                const users = ({ email: user.email, token: token });

                res.status(200).json({
                    success: true,
                    message: "Login Successfully",
                    users: users
                })

            } else {
                res.status(400).json({
                    succes: false,
                    mesage: "Pasword Wrong!"
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                message: "Internal Server Error",
                error: err
            })
        })


}

module.exports.dataListUser = async (req, res) => {

    await User.find()
        .then(user => {
            res.status(200).json({
                success: true,
                message: 'success',
                users: user
            })
        })
        .catch(err => {
            res.status(500).json({
                success: false,
                message: "Internal Server Error",
                error: err
            })
        })

}