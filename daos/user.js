const User = require('../models/user');

module.exports = {};

module.exports.createUser = async (userObj) => {
    return await User.create(userObj);
};

module.exports.getUser = async (email) => {
    return await User.findOne({ email }).lean();
};

module.exports.updateUserPassword = async (userId, password) => {
    return await User.updateOne({ _id: userId }, { $set: { password } });
};
