const{PrismaClient} = require("./generated/prisma");
let prisma = new PrismaClient();

async function addUser(email, name){
    const newUser = await prisma.user.create({
        data:{
            email: email,
            name: name
        }
    })
    return "User added"

}
// addUser("test@example.com", "John Doe")
//     .then(result => console.log(result))
//     .catch(err => console.error(err));

async function getUsers(email){
    let user = await prisma.user.findUnique({
        where :{
            email:email
        }  
    });
       return user
}
// getUsers("test@example.com")
// .then((data)=> console.log(data))
// console.log("hi")


async function updateUserName(email, newName) {
    const updatedUser = await prisma.user.update({
        where: {
            email: email
        },
        data: {
            name: newName
        }
    });
    return updatedUser;
}

// async function main() {
//     const user = await updateUserName("test@example.com", "Yaman Verma");
//     console.log(user);
// }

// main();


async function deleteUserByEmail(email) {
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

// async function main() {
//     await deleteUserByEmail("test@example.com");
// }
// main();


async function addTweet(userId, body){
    try{
        const newTweet = await prisma.tweet.create({
            data:{
                userId:Number(userId),
                body:body
            }
        })
        return newTweet;

        } catch(err){
            console.error("Error adding tweet:", err);  
        }
}

// addTweet(2, "My first tweet Hello World")
// .then((data) => console.log(data))
// .catch((err) => console.error(err));

async function updateTweet(id, userId, updatedBody){
    let tweet = await prisma.tweet.findFirst({
        where:{
            id:Number(id),
            userId:Number(userId)
        }
    });
    if(!tweet){
        return "something went wrong"
    }
    await prisma.tweet.update({
        where:{
            id: Number(id)
        },
        data:{
            body: updatedBody
        }
    });
    return "tweet updated"
    console.log(tweet);
}

// updateTweet("1", "2", "Updated my tweet")
// .then((data) => console.log(data))
// .catch((err) => console.error(err));

async function deleteUser(id) {
    await prisma.user.delete({
        where: {
            id: Number(id)
        }
    });
    return "User deleted"

}


// deleteUser("2")
// .then((data) => console.log(data))       //if we delete user with id 2, tweet with userId 2 will also be deleted
// .catch((err) => console.error(err));     //because of onDelete: Cascade in schema.prisma