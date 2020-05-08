// loading page
var myVar,
    myVar2;

function myFunction() {
myVar = setTimeout(showPage, 1000)
myVar2 =setTimeout(showLoading, 1500)
}

function showPage() {
document.getElementById("loader").style.display = "none";
document.getElementById("myDiv").style.display = "block";
document.getElementById('body').style.backgroundImage='url(photos/6.jpg) '
}
function showLoading(){
    document.getElementById('loaderText').style.display='block'
}
// Displaying buttons
function displayUnBlock(){
    var background=document.getElementById('background')
    var clicked=document.getElementById('notClicked')
    background.classList.toggle('background')
    clicked.classList.toggle('clicked')	
}
function displayUnBlock2(){
    var background=document.getElementById('background2')
    background.classList.toggle('background2')	
    var clicked=document.getElementById('notClicked2')
    clicked.classList.toggle('clicked')	
}
function displayUnBlock3(){
    var background=document.getElementById('background3')
    background.classList.toggle('background3')
    var clicked=document.getElementById('notClicked3')
    clicked.classList.toggle('clicked')		
}

// Button to go on top of page
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
    mybutton.style.filter='opacity(1)'
  } else {
    // mybutton.style.display = "none";
    mybutton.style.filter='opacity(0)'
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// show contact container
const contact=document.getElementById('contact-container')
function showContact(){
  contact.classList.toggle('contact-container')
  
}
// cookies

function sureNot(){
  alert('you must click on "of course"')
}
function closeThat(){
  document.getElementById('cookies').style.display='none'
  
}
