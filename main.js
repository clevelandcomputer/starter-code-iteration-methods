// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')


// Kata 1: Use the .filter() method
// Filter the users array to show only the users with an isActive property of true.
let para1 = document.createElement('h1')
para1.append('Kata 1')
main.append(para1)
const userIsActive = users.filter(user => user.isActive === true)
main.append(JSON.stringify(userIsActive))



// Kata 2: Use the .map() method
// Map over the users array to show only the email addresses of the users.
let para2 = document.createElement('h1')
para2.append('Kata 2')
main.append(para2)
const emailAddresses = users.map(user => user.email)
main.append(emailAddresses)


// Kata 3: Use the .some() method
// Check whether at least one user in the users array has a company property of /////"OVATION".
let para3 = document.createElement('h1')
para3.append('Kata 3')
main.append(para3)
const company = users.some(user => user.company === 'OVATION')
main.append(company)

// Kata 4: Use the .find() method
// Find the first user in the array over the age of 38.
let para4 = document.createElement('h1')
para4.append('Kata 4')
main.append(para4)
const oldFart = users.find(user => user.age > 38)
main.append(JSON.stringify(oldFart))

// Kata 5: Use the .filter() and .find() methods
// Find the first user in the array over the age of 38 who is active.
let para5 = document.createElement('h1')
para5.append('Kata 5')
main.append(para5)
const oldFartOnline = users
    .filter(user => user.isActive)
    .find(user => user.age > 38)

main.append(JSON.stringify(oldFartOnline))

// Kata 6: Use the .filter() and .map() methods
// Show the balance of every user in the array from the "ZENCO" company.
let para6 = document.createElement('h1')
para6.append('Kata 6')
main.append(para6)
const zencoCO = users
    .filter(user => user.company === 'ZENCO')
    .map(user => user.balance)
main.append(JSON.stringify(zencoCO))

// Kata 7: Use the .filter() method with .includes()
// Show the age of every user with the "fugiat" tag.
let para7 = document.createElement('h1')
para7.append('Kata 7')
main.append(para7)
const fugiatVar = users.filter(user => user.tags.includes('fugiat'))
main.append(JSON.stringify(fugiatVar.map(user => user.age)))

