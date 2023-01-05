
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


function formSubmit(){
    
    let output = document.getElementById('formOutputBox');
    output.innerHTML='Form Sent Successful'
};
