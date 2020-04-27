async function requireAuth(req, res, next) {
    if(req.user == undefined) {
        res.status(401).send("Unauthorized");
        return;
    }
    next();
}

module.exports = requireAuth;
