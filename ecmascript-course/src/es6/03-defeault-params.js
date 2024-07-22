function newUser(name, age, country) {
  var name = name || "No name";
  var age = age || 0;
  var country = country || "No country";
  console.log(name, age, country);
}

newUser();
newUser("Jorge", 23, "Mexico");

function newAdmin(name = "No name", age = 0, country = "No country") {
  console.log(name, age, country);
}

newAdmin();
newAdmin("Pablo", 31, "Uruguay");