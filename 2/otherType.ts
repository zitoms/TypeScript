enum Role {
  ADMIN,
  READ_OLNY,
  AUTHOR,
}
const person = {
  role: 0,
};

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
