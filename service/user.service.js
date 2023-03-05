const UserService = {
    register : async (req, res) => {
        req.session.user=req.body;
        res.send("User created successfully")
    },
    info : async (req, res) => {
        console.log(req.session)
        res.send(req.session)
    }
}

module.exports = UserService;
