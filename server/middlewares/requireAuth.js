async function requireAuth(req, res, next) {
    console.log(req.user);
    if(req.user == undefined) {
        res.status(401).send("Unauthorized");
        return;
    }
    next();
}

module.exports = requireAuth;
