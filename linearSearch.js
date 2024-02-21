// linear searching

const users = [
  { username: "milad", email: "syedmilad@gmail.com" },
  { username: "milad1", email: "syedmilad1@gmail.com" },
  { username: "milad2", email: "syedmilad2@gmail.com" },
];

const isUserExist = (array, val) => {
  for (const item of array) {
    if (item["username"] === val) {
      return true;
    }
  }

  return false;
};

const result = isUserExist(users, "mila");
console.log(result);
