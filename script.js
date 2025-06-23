document.addEventListener('DOMContentLoaded', function() {
    let daily = document.getElementById('daily');
    let weekly = document.getElementById('weekly');
    let monthly = document.getElementById('monthly');

    const links = document.querySelectorAll('.options a');
    
    // Set default active
    document.getElementById('weekly').classList.add('active');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent navigation

            // Remove active class from all
            links.forEach(l => l.classList.remove('active'));

            // Add active class to clicked one
            this.classList.add('active');
        });
    });

    daily.addEventListener('click', () => {
        document.getElementById("hrs_work").innerHTML = "5hrs";
        document.getElementById("last_week_work").innerHTML = "Last Week - 7hrs";
        document.getElementById("hrs_play").innerHTML = "1hrs";
        document.getElementById("last_week_play").innerHTML = "Last Week - 2hrs";
        document.getElementById("hrs_study").innerHTML = "0hrs";
        document.getElementById("last_week_study").innerHTML = "Last Week - 1hrs";
        document.getElementById("hrs_exercise").innerHTML = "1hrs";
        document.getElementById("last_week_exercise").innerHTML = "Last Week - 1hrs";
        document.getElementById("hrs_social").innerHTML = "1hrs";
        document.getElementById("last_week_social").innerHTML = "Last Week - 3hrs";
        document.getElementById("hrs_self-care").innerHTML = "0hrs";
        document.getElementById("last_week_self-care").innerHTML = "Last Week - 1hrs";
    });
    
    weekly.addEventListener('click', () => {
        document.getElementById("hrs_work").innerHTML = "32hrs";
        document.getElementById("last_week_work").innerHTML = "Last Week - 36hrs";
        document.getElementById("hrs_play").innerHTML = "10hrs";
        document.getElementById("last_week_play").innerHTML = "Last Week - 8hrs";
        document.getElementById("hrs_study").innerHTML = "4hrs";
        document.getElementById("last_week_study").innerHTML = "Last Week - 7hrs";
        document.getElementById("hrs_exercise").innerHTML = "4hrs";
        document.getElementById("last_week_exercise").innerHTML = "Last Week - 5hrs";
        document.getElementById("hrs_social").innerHTML = "5hrs";
        document.getElementById("last_week_social").innerHTML = "Last Week - 10hrs";
        document.getElementById("hrs_self-care").innerHTML = "2hrs";
        document.getElementById("last_week_self-care").innerHTML = "Last Week - 2hrs";
    });

    monthly.addEventListener('click', () => {
        document.getElementById("hrs_work").innerHTML = "103hrs";
        document.getElementById("last_week_work").innerHTML = "Last Week - 128hrs";
        document.getElementById("hrs_play").innerHTML = "23hrs";
        document.getElementById("last_week_play").innerHTML = "Last Week - 29hrs";
        document.getElementById("hrs_study").innerHTML = "13hrs";
        document.getElementById("last_week_study").innerHTML = "Last Week - 19hrs";
        document.getElementById("hrs_exercise").innerHTML = "11hrs";
        document.getElementById("last_week_exercise").innerHTML = "Last Week - 18hrs";
        document.getElementById("hrs_social").innerHTML = "21hrs";
        document.getElementById("last_week_social").innerHTML = "Last Week - 23hrs";
        document.getElementById("hrs_self-care").innerHTML = "7hrs";
        document.getElementById("last_week_self-care").innerHTML = "Last Week - 11hrs";
    });


    // Your fetch remains unchanged
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
