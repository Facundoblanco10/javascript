// enhaced object literals

function newUser(user, age, country, uId) {
  return {
    user,
    age,
    country,
    id: uId
  };
}

console.log(newUser('Pepe', 24, 'Uruguay', 1));