// calling APIs in javascript

// chat gpt version

document.addEventListener("DOMContentLoaded", function () {
    // Function to fetch a random dad joke from the API
    function fetchDadJoke() {
        fetch("https://icanhazdadjoke.com/", {
            headers: {
                "Accept": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            // Display the joke in the #joke paragraph
            document.getElementById("joke").innerText = data.joke;
        })
        .catch(error => {
            console.log("Error fetching dad joke:", error);
        });
    }

    // Preload a dad joke when the page loads
    fetchDadJoke();

    // Event listener for the "Get Another Joke" button
    document.getElementById("get-joke-btn").addEventListener("click", function () {
        fetchDadJoke();
    });
 
});