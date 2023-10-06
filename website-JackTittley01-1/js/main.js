// We want to see some non-trivial Javascript code
// At a minimum, you should demonstrate a few simple uses of event-driven JavaScript for DOM manipulation
// You should use ES6 syntax throughout: e.g. don't use "var", use the modern tools (template literals, arrow functions).
// There should be no JavaScript errors in the browser console

// For more marks, we like to see a bit more complex use of JavaScript, perhaps some looping and/or more complex DOM manipulation.
// Accessing APIs is a great option if it fits with your project, or you can work with your own, local data.
// Your code should be DRY, if you have repeated code, consider refactoring as a function with arguments for example.
// We like to see what you can do. Be creative.
menuToggler.addEventListener('click', ev => {
    
    navbar.classList.toggle('open');
    navbar.classList.toggle('closed');
})


   

  ;
document.addEventListener("DOMContentLoaded", writeName )
document.addEventListener("DOMContentLoaded", getTime )
let i = 0;
let text = "i, I'm Jack.";
const speed = 100;

function writeName() {
    
    
    if (i < text.length) {
        document.getElementById("write").innerHTML += text.charAt(i);
        i++;
        setTimeout(writeName, speed);
    }
 }


 homeButton.addEventListener('click', function(){
    scrollTo('home')})
projectsButton.addEventListener('click', function(){
    scrollTo('projects')})
experienceButton.addEventListener('click', function(){
    scrollTo('experience')})
contactButton.addEventListener('click', function(){
    scrollTo('contact')})

    

function scrollTo(clicked){
    const element = document.getElementById(clicked)
    navbar.classList = ('closed')
    element.scrollIntoView({behavior: "smooth"})
    
    
}


async function getTime(){
   
    const el = document.createElement("h1")
    const date = fetch("http://worldtimeapi.org/api/timezone/Europe/London").then(response => response.json().then(data => data.utc_datetime.slice(0, 10)).then((data) => {
        makeDate(data)
    }))
}

    
    
    
function makeDate(date){
    const dateValue = document.createTextNode(date)
    const el = document.createElement("h1")
    el.setAttribute("id", "date")
    
    el.appendChild(dateValue)
    const dateContainer = document.getElementById("dateContainer")
    dateContainer.appendChild(el)
}
    
  
   





 

  






 

  





