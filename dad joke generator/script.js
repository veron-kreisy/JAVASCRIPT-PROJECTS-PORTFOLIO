// calling APIs in javascript


// Define the API URL
const apiUrl = 'https://icanhazdadjoke.com/';
const outputElement = document.getElementById('output');

// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    outputElement.textContent = JSON.stringify(data, null, 2);
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

// stackoverflow

async function dummy() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "text/plain");
  
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({}),
      redirect: "follow",
    };
  
    return fetch("some.api.com", requestOptions);
  }
  
  document.getElementById("button1").onclick = async function () {
    var res = await dummy();
    return res.ok;
  };
//   example 2
function dummy() {

    return new Promise((resolve, reject) => {
      var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

        var requestOptions = {
          method: "GET",
          headers: myHeaders,
          body: JSON.stringify({}),
        };
        
        
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        });
    })
}
const main = async()=>{
console.log(await dummy());
console.log("foo bar")
} 

main();
