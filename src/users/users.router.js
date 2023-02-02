const router = require("express").Router();
const usersServices = require("./users.services");
router.get("/", usersServices.getAllUsers);
router.post("/", usersServices.postUser);
router.get("/:id", usersServices.getUserById);
router.put("/:id", usersServices.putUser);
router.patch("/:id", usersServices.patchUser);
router.delete("/:id", usersServices.deleteUser);
module.exports = router;
