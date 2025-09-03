//toggle mobile menu
const menutoggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menutoggle.addEventListener("click", ()=> {
    navLinks.classList.toggle("show");
});

//simple contact form validation
const contactform = document.getElementById("contact-form");
const fromstatus = document.getElementById("from-status");
contactform.addEventListener("submit",(e)=>{
    e.preventDefault();

    const name = document.getElementById("name").Value.trim();
    const email = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message){
        fromstatus.textContent =" message sent successfully!";
        fromstatus.style.color ="green";
        contactform.reset () ;
    }else{
        fromstatus.textContent=" please fill in all fields.";
        fromstatus.style.color="red";
    }
})