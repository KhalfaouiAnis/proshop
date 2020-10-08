import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@exemple.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "johnn@exemple.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Anis Khalfaoui",
    email: "anisn@exemple.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;