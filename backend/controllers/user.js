const bcrypt = require("bcrypt");
const User = require("../models/Users");
const jwt = require("jsonwebtoken");
const fs = require("fs");
require("dotenv").config();

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then((hash) => {
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            emailAddress: req.body.emailAddress,
            password: hash,
        });
        user
            .save()
            .then(() => {
                res.status(201).json({
                    message: "User added successfully!",
                });
            })
            .catch((error) => {
                res.status(500).json(error);
            });
    });
};

exports.login = (req, res, next) => {
    User.findOne({ where: { emailAddress: req.body.emailAddress } })
        .then((user) => {
            if (!user) {
                return res.status(401).json({
                    error: new Error("User not found!"),
                });
            }
            bcrypt
                .compare(req.body.password, user.password)
                .then((valid) => {
                    if (!valid) {
                        return res.status(402).json({
                            error: new Error("Incorrect password!"),
                        });
                    }
                    console.log(user);
                    const token = jwt.sign({ userId: user.userId }, process.env.RS, {
                        expiresIn: "24h",
                    });
                    res.status(200).json({
                        userId: user.userId,
                        token: token,
                    });
                })
                .catch((error) => {
                    console.log(error);
                    res.status(500).json(error);
                });
        })
        .catch((error) => {
            res.status(500).json(error);
        });
};

exports.modifyUser = async(req, res, next) => {
    try {
        const user = await User.findOne({ where: { userId: req.params.id } });

        const userData = req.body;

        if (userData.password) {
            userData.password = await bcrypt.password(userData.password, 10);
        }

        user.set(userData);

        user
            .save()

        .then(() => {
                res.status(201).json({
                    message: "User Account was updated successfully!",
                });
            })
            .catch((error) => {
                res.status(400).json(error);
            });
    } catch (error) {
        console.log(error);
    }
};



exports.deleteUser = (req, res, next) => {
    try {
        User.findOne({ where: { userId: req.params.id } }).then((user) => {
            user
                .destroy()
                .then(() => {
                    res.status(200).json({
                        message: "Deleted!",
                    });
                })
                .catch((error) => {
                    res.status(400).json(error);
                });
        });
    } catch (error) {
        console.log(error);
    }
};