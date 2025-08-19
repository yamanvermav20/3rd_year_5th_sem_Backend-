module.exports.postAddUser = async(req, res) => {
    let names = req.body.names;
    let email = req.body.email;
    let user = {
        names: names,
        email: email,
        date: Date.now(),
        blogs: [] // initialize empty blogs array

    }
    let newUser = new User(user)
    await newUser.save()
    res.json({
        success: true,
        message: "User added successfully",
        data : newUser
    })
}

module.exports.getAllUser = async(req, res) => {
    let allUsers = await User.find()
    res.json({
        success: true,
        message: "all data fetched succesfully",
        data : allUsers
    })
}


module.exports.getOneUser = async (req, res) => {
    let id = req.params.id;
    let user = await User.findById(id);
    res.json({
        success: true, 
        message: "user fetched successfully",
        data : user
    })

}




