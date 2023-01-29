//?Dependencies
const express = require("express");
//? Initial configs
const app = express();
//? JSON Middleware
app.use(express.json());
//? DB
const usersDB = [{}];

let baseId = 1;

const getAllUsers = async () => {
    return await usersDB;
};

const findUserById = async (id) => {
    const filteredUser = await usersDB.filter((user) => user.id === id);
    return filteredUser;
};

const createNewUser = async (userObj) => {
    const newUser = {
        id: baseId++,
        title: userObj.title,
        synopsis: userObj.synopsis,
        director: userObj.director,
        year: userObj.year,
    };

    await usersDB.push(newUser);

    return newUser;
};

//? Routes
//* Como nosotros podemos recibir info o data del cliente
app.get("/", (req, res) => {
    res.json({
        message: "My server is running",
    });
});
//? TODO Crear una ruta que muestre todos los users
app.get("/users", (req, res) => {
    res.json(usersDB);
});
//? TODO Crear una ruta que muestre un user dependiendo de su id
app.get("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const data = usersDB.find((item) => id === item.id);
    if (data) {
        res.json(data);
    } else {
        res.status(404).json({
            message: "Invalid id",
        });
    }
});
//? TODO Crear una ruta que agregue un user nuevo
app.post("/users", (req, res) => {
    const userObj = req.body;
    const newUser = {
        id: baseId++,
        firstName: userObj.firstName,
        lastName: userObj.lastName,
        email: userObj.email,
        password: userObj.password,
        age: userObj.age,
    };
    usersDB.push(newUser);
    res.status(201).json(newUser);
});

module.exports = app;
