
const scrolly = document.querySelectorAll('a[href^="#"]');

scrolly.forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
});

//Collapsing Resume 
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
      document.getElementById("resBtn").innerHTML="Open";
    } else {
      content.style.display = "block";
      document.getElementById("resBtn").innerHTML="Close";
    }
  });
}

//Message after submit is pressed

// Get the form element
// const form = document.getElementById("form");

// // Get the message element where you want to display the success message
// const message = document.getElementById("formOutputBox");

// // Listen for the form's submit event
// form.addEventListener("submit", event => {
//     // Prevent the default form behavior (navigating away from the page)
//     event.preventDefault();

//     // Create a new FormData object
//     const formData = new FormData(form);

//     // Send the form data to the server using the fetch API
//     fetch("https://docs.google.com/forms/u/0/d/e/1FAIpQLScxPp6p-LOvhPC6FxvA9D6VEJitcTvkrAMu5wMOkoEZnhSWfw/formResponse", {
//         mode: 'no-cors',
//         method: "POST",
//         body: formData
//     })
//     .then(response => {
//         if (response.ok) {
//             // If the form was sent successfully, display a success message
//             message.innerHTML = "Form sent successfully";
//             message.style.color = "green";
//         } else {
//             // If the form was not sent successfully, display an error message
//             message.innerHTML = "Error sending form";
//             message.style.color = "red";
//         }
//     })
//     .catch(error => {
//         console.error("Error sending form:", error);
//         message.innerHTML = "Error sending form";
//         message.style.color = "red";
//     });
// });
