class User {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  hasAccess() {
    return this.name === "Bob";
  }
}

class NullUser {
  constructor() {
    this.id = -1;
    this.name = "Guest";
  }

  hasAccess() {
    return false;
  }
}

const users = [new User(1, "Bob"), new User(2, "John")];

function getUser(id) {
  const user = users.find((user) => user.id === id);
  if (user == null) {
    return new NullUser();
  }
  return user;
}

function printUser(id) {
  const user = getUser(id);

  //   Now we didnt need this line
  //   let name = "guest";
  //   if (user != null && user.name != null) name = user.name;
  console.log("Hello " + user.name);

  if (
    // we didnt necessary to check
    // user != null &&
    // user.hasAccess != null &&
    user.hasAccess()
  ) {
    console.log("You have access");
  } else {
    console.log("You are not allowed here");
  }
}

// printUser(1); // You have access
// printUser(2); // You are not allowed here
printUser(3);
