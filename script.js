document.addEventListener('DOMContentLoaded', function() {
    let daily = document.getElementById('daily');
    let weekly = document.getElementById('weekly');

    // Define the clicked function
    function clicked() {
        console.log('Clicked');
    }

    // Attach the event listener to the daily link
    daily.addEventListener("click", clicked);

    // Set the color of the weekly link to white
    weekly.style.color = "white";
});