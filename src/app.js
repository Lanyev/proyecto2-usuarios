const express = require("express");
const app = express();
app.use(express.json());
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
        firstName: userObj.firstName,
        lastName: userObj.lastName,
        email: userObj.email,
        password: userObj.password,
        age: userObj.age,
    };

    await usersDB.push(newUser);

    return newUser;
};

//? Routes
//* Como nosotros podemos recibir info o data del cliente
app.get("/", (req, res) => {
    res.json({
        message: "My server is running in http://localhost:9000",
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

//? TODO Crear una ruta que elimine un user dependiendo de su id
app.delete("/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const data = usersDB.find((item) => id === item.id);
    if (data) {
        const index = usersDB.indexOf(data);
        usersDB.splice(index, 1);
        res.json({
            message: "User deleted",
        });
    } else {
        res.status(404).json({
            message: "Invalid id",
        });
    }
});

app.listen(9000, () => {
    console.log("Server is running on port 9000");
});

module.exports = app;
