const accountID = 144543;
let accountEmail = "test@gmail.com";
var accountPassword = "12345566";
accountCity = "Jaipur";

// accountID = 2; // not allowed

accountEmail = "my@gmail.com";
accountPassword = "345890";
accountCity = "Bengaluru";

console.log(accountID);

/**
 * Prefer not use var
 * because of issue in block scope and functional scope
 */

console.table([accountID, accountEmail, accountPassword, accountCity]);
