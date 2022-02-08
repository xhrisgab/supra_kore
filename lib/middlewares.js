//import libraries
const express = import('express');

//functions for use on routes as middleware

function isSuperUser(req, res, next){
    const usuario = req.user.isUser;

    if(!usuario){
        res.status(401).json({ alert: "You have not permission" });
        res.end();
        return false;
    }
    next();
}

function isAdminUser(req, res, next){
    const usuario = req.user.isAdmin;

    if(!usuario) {
        res.status(401).json({alert: "you have not permission" });
        res.end();
        return false;
    }
    next();
}
function isVerifiedUser(req, res, next){
    const verified = req.user.verification.isVerified;
    if(!verified){
        res.status(403).json({ alert: {isVerified: verified} });
        res.end();
        return false;     
    }
    next();
}

module.exports = {
    isSuperUser,
    isAdminUser,
    isVerifiedUser,
};