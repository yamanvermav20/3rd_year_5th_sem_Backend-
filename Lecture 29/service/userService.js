const{PrismaClient} = require("./generated/prisma");
let prisma = new PrismaClient();

class User{
    static async addUser(email, name){
    const newUser = await prisma.user.create({
        data:{
            email: email,
            name: name
        }
    })
        return "User added"
    }
    static async getUsers(email){
    let user = await prisma.user.findUnique({
        where :{
            email:email
        }  
    });
       return user
    }
    static async deleteUserByEmail(email) {
    try {
        const deletedUser = await prisma.user.delete({
            where: {
                email: email
            }
        });
        console.log("Deleted user:", deletedUser);
    } catch (err) {
        console.error("Error deleting user:", err);
    }
    }
}

module.exports = User