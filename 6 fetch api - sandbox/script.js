document.getElementById('getText').addEventListener('click', getText)
document.getElementById('getUsers').addEventListener('click', getUsers)

// function getText() {
//   fetch('sample.txt')
//   .then(function(res) {
//     return res.text()
//   })
//   .then(function(data) {
//       console.log(data)
//   })
// }

//cleaned up with arrow functions

function getText() {
  fetch('sample.txt')
  .then((res) => res.text())
  .then((data) => {
    document.getElementById('output').innerHTML = data
  })
  .catch((err) => console.log(err))
}

function getUsers() {
  fetch('users.json')
  .then((res) => res.json())
  .then((data) => {
    let output = '<h2>Users</h2>'
    data.forEach(function(user) {
      output += `
        <ul>
          <li>ID: ${user.id}</li>
          <li>ID: ${user.name}</li>
          <li>ID: ${user.email}</li>
        </ul>
      `;
    })
    document.getElementById('output').innerHTML = output
  })
}
