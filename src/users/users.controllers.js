let usersDB = [
    {
        id: 1,
        firstName: "Sophia",
        lastName: "Johnson",
        email: "sophia.johnson@gmail.com",
        password: "a1b2c3d4",
        age: 29,
    },
];
let baseId = 1;

//? GET
const getAllUsers = async () => await usersDB;
//? GET BY ID
const getUserById = async (id) => {
    const filteredUser = usersDB.find((user) => user.id === id);
    return await filteredUser;
};

//? POST
const createNewUser = async (userObject) => {
    let newUser = {
        id: ++baseId,
        firstName: userObject.firstName,
        lastName: userObject.lastName,
        email: userObject.email,
        password: userObject.password,
        age: userObject.age,
    };
    usersDB.push(newUser);
    return await newUser;
};
//? PUT
const updateUser = async (idData, newUserData) => {
    let index;
    usersDB.some((user, i) => {
        index = i;
        return user.id === idData;
    });
    usersDB[index] = { ...usersDB[index], ...newUserData };
    return await usersDB[index];
};
//? PATCH
const patchUser = async (idData, newUserData) => {
    let index;
    usersDB.some((user, i) => {
        index = i;
        return user.id === idData;
    });
    usersDB[index] = { ...usersDB[index], ...newUserData };
    return await usersDB[index];
};
//? DELETE
const deleteUser = async (idDelete) => {
    const userDeleted = getUserById(idDelete);
    if (!userDeleted) return null;
    usersDB = usersDB.filter((user) => user.id !== idDelete);
    return await userDeleted;
};
module.exports = {
    getAllUsers,
    getUserById,
    createNewUser,
    updateUser,
    patchUser,
    deleteUser,
};
