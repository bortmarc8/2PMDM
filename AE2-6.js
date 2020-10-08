let users = ["Mark", "Carlos", "Juan", "Pedro"];
let blackListed = ["Carlos", "Juan"];
console.log(users.filter(value => blackListed.every(bannedUser => value != bannedUser)));