const jwt = require('jsonwebtoken');
const UserModel = require('./userModel');

const authenticate = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, 'your_jwt_secret');
        const user = await UserModel.findOne({ _id: decoded._id, 'tokens.token': token });

        if (!user) {
            throw new Error();
        }

        req.token = token;
        req.user = user;
        next();
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' });
    }
};

const authorizeAdmin = (req, res, next) => {
    if (req.user && req.user.userIsAdmin) {
        next();
    } else {
        res.status(403).send('Access denied.');
    }
};

module.exports = { authenticate, authorizeAdmin };
