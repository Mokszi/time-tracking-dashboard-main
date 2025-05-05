document.addEventListener('DOMContentLoaded', function() {
    let daily = document.getElementById('daily');
    let weekly = document.getElementById('weekly');
    let monthly = document.getElementById('monthly');

    // Define the clicked function
    function daily_click() {
        daily.style.color = "white";
        weekly.style.color = "hsl(236, 100%, 87%)";
        monthly.style.color = "hsl(236, 100%, 87%)";
    }

    daily.addEventListener("click", daily_click);

    function weekly_click() {
        daily.style.color = "hsl(236, 100%, 87%)";
        weekly.style.color = "white";
        monthly.style.color = "hsl(236, 100%, 87%)";
    }

    weekly.addEventListener("click", weekly_click);

    function monthly_click() {
        daily.style.color = "hsl(236, 100%, 87%)";
        weekly.style.color = "hsl(236, 100%, 87%)";
        monthly.style.color = "white";
    }

    monthly.addEventListener("click", monthly_click);

    weekly.style.color = "white";

    fetch('data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            if (item.title === "Play") {
                console.log("lpaa");
            }
        });
    })
    .catch(error => console.error('Error:', error));
});