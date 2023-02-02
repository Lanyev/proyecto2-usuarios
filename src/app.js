const express = require("express");
const usersRouter = require("./users/users.router");
const app = express();
const PORT = 9000;
app.use(express.json());
app.use("/users", usersRouter);
app.listen(PORT, () =>
    console.log(`El server esta funcionando en http://localhost: ${PORT}`)
);
module.exports = app;
