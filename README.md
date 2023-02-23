# Jesse-Salazar-Portfolio

## Thank you for visiting my personal portfolio page!

### Description

This one-page site is built using mainly stack **HTML,TailwindCSS and Javascript** and contains various sections including introduction, resume, portfolio and a contact form.

![](./img/quickview.png)

**The site is a work-in-progress** but it is published so you can test its functionality. The public address is [here](https://jesse-salazar.github.io/Jesse-Salazar-Portfolio/).




👇Here's a tiny piece of code for recruiters👇

```
//Collapsing Resume 
let coll = document.getElementsByClassName("collapsible");
let i;

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
```
