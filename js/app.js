// Navigation is built dynamically as an unordered list:

const unorderList = document.getElementById("link");
const navbar = ["Section1", "Section2" , "Section3", "Section4", "section5"];
const sections = document.querySelectorAll("section");

for (const i in navbar) {
    var listItemes = document.createElement("li");
    var link = document.createElement("a");
    var title = document.createTextNode(navbar[i]);
    link.appendChild(title);
    link.href = "#" + navbar[i].toLocaleLowerCase();
    listItemes.appendChild(link);
    unorderList.appendChild(listItemes);    
}

// scroll behavior

let anchorLinks = document.querySelectorAll("a");

for (let item of anchorLinks) {
    item.addEventListener('click', (e) => {
    let part = item.getAttribute("href");
    let target = document.querySelector(part);
    target.scrollIntoView({
        behavior: 'smooth'
    })
    e.preventDefault();
    })
}

// section active

const secLink = document.querySelectorAll("a");

secLink.forEach(a => {
    a.addEventListener("click", function (){
        secLink.forEach(btn => btn.classList.remove("act"));
        this.classList.add("act")
    })
})

function sectionInView (e) {
    const bound = e.getBoundingClientRect();
    return (
        bound.top >= 0 &&
        bound.left >= 0 &&
        bound.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bound.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener('scroll', ActiveSection);

function ActiveSection(){
    for (let i=0; i < sections.length; i++){
        if (sectionInView(sections[i])){
            sections[i].classList.add("active");
        }else{
            sections[i].classList.remove("active");
        }
    }
}

// collapsible

var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
    });
}

// button to the top
//Get the button:
mybutton = document.getElementById("myBtn");

//scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } else {
    mybutton.style.display = "none";
    }
}

// click on the button, scroll to the top of the document

mybutton.addEventListener("click", function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// hide nav bar when not scrolling

const nav = document.getElementById("nav-bar");

var timer = null;
window.addEventListener('scroll', function() {
    if(timer !== null) {
        clearTimeout(timer);
        nav.style.display = "block";
    }
    timer = setTimeout(function() {
        nav.style.display = "none";
    }, 5000);
}, false);