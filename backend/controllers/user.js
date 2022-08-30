const bcrypt = require('bcrypt');
const User = require('../models/Users')
const jwt = require("jsonwebtoken")
require('dotenv').config();

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.Password, 10).then(
        (hash) => {
            const user = new User({
                FirstName: req.body.FirstName,
                LastName: req.body.LastName,
                EmailAddress: req.body.EmailAddress,
                ImageURL: req.body.ImageURL,
                Password: hash
            });
            user.save().then(
                () => {
                    res.status(201).json({
                        message: 'User added successfully!'
                    });
                }
            ).catch(
                (error) => {
                    res.status(500).json(error);
                }
            );
        }
    );
};


exports.login = (req, res, next) => {
    User.findOne({ where: { EmailAddress: req.body.EmailAddress } }).then(

        (user) => {
            if (!user) {
                return res.status(401).json({
                    error: new Error('User not found!')
                });
            }
            bcrypt.compare(req.body.Password, user.Password).then(
                (valid) => {
                    if (!valid) {
                        return res.status(402).json({
                            error: new Error('Incorrect password!')
                        });
                    }
                    const token = jwt.sign({ userId: user._id },
                        process.env.RS, { expiresIn: '24h' });
                    res.status(200).json({
                        userId: user._id,
                        token: token
                    });
                }
            ).catch(
                (error) => {
                    console.log(error);
                    res.status(500).json(error);
                }
            );
        }
    ).catch((error) => {
        res.status(500).json(error);
    });
}