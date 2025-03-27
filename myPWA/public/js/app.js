document.addEventListener("DOMContentLoaded", function () {
    const sidenav = document.getElementById("mySidenav");
    const menuBtn = document.querySelector(".menu-btn");
    const closeBtn = document.querySelector(".closebtn");

    menuBtn.addEventListener("click", function () {
        sidenav.classList.toggle("open"); // Toggle sidebar visibility
    });

    closeBtn.addEventListener("click", function () {
        sidenav.classList.toggle("open"); // Toggle sidebar visibility
    });
    });

let result = "";
fetch("http://localhost:5000/api/Events")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data);
    })
    .catch(function (err) {
        console.log("error: " + err);
    });

function appendData(data) {
    data.forEach(({ eventID, name, hyperlink, about, image, event_date, time } = rows) => {
        result += `
        <div class="card">
        <h1 class="card-name">${name}</h1>
        <p class="card-date">${event_date}</p>
        <p class="card-time">${time}</p>
        <a class="card-link" href="${"/event/" + eventID}"><button class="btn">Read More</button></a>
        </div>
        `;
    });
    document.querySelector(".container").innerHTML = result;
}

if ("serviceworker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceworker
            .register("js/serviceworker.js")
            .then((res) => console.log("service worker registered"))
            .catch((err) => console.log("service worker not registered", err));
    });
}