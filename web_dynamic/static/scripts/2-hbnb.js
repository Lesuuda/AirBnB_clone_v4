const url = 'http://0.0.0.0:5001/api/v1/status/';

// Function to update the API status
function updateApiStatus() {
    // Make a GET request to the API status URL
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const apiStatusDiv = document.querySelector('#api_status');

            // Check if the status is "OK"
            if (data.status === 'OK') {
                // Add the class "available" to the div#api_status
                apiStatusDiv.classList.add('available');
            } else {
                // Remove the class "available" from the div#api_status
                apiStatusDiv.classList.remove('available');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Call the updateApiStatus function to update the API status initially
updateApiStatus();