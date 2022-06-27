
exports.userObj = (user) =>{
    let users = [];
    user.forEach(ele => {
        users.push({
            name: ele.name,
            email: ele.email,
            userId: ele.userId,
            userTypes: ele.userTypes
        })
    });
    return users;
}

