// cookies
function hideCookies(){
    document.getElementById('cookies').style.display='none'
}
function alertOnCookies(){
    alert('You must click on "Of course"')
    console.log('sd')
}
// clicking on hamburger
function hamburger(){
  const line1=document.getElementById('line1'),
        line2=document.getElementById('line2'),
        line3=document.getElementById('line3')
  line1.classList.toggle('line1clicked')
  line2.classList.toggle('line2clicked')
  line3.classList.toggle('line3clicked')
}
// navbarRight
function toggleNavbarRight(){
    document.getElementById('navbarRight').classList.toggle('navbarRightOn')
    document.getElementById('contact-container').classList.remove('contact-containerClicked')
    document.getElementById('adventures-container').classList.remove('adventures-containerClicked')

    hamburger()
}
// unlocking containers
function aboutUsShow(){
  document.getElementById('aboutUs-container').classList.toggle('aboutUs-containerOn')
  document.getElementById('gallery-container').classList.remove('gallery-containerOn')
  document.getElementById('trilj-container').classList.remove('trilj-containerOn')

  console.log('showing about')
}
function galleryShow(){
  document.getElementById('gallery-container').classList.toggle('gallery-containerOn')
  document.getElementById('aboutUs-container').classList.remove('aboutUs-containerOn')
  document.getElementById('trilj-container').classList.remove('trilj-containerOn')
  console.log('showing gallery')

}
function triljShow(){
  document.getElementById('trilj-container').classList.toggle('trilj-containerOn')
  document.getElementById('gallery-container').classList.remove('gallery-containerOn')
  document.getElementById('aboutUs-container').classList.remove('aboutUs-containerOn')
  console.log('showing trilj')
}
function hideContainers(){
  document.getElementById('trilj-container').classList.remove('trilj-containerOn')
  document.getElementById('gallery-container').classList.remove('gallery-containerOn')
  document.getElementById('aboutUs-container').classList.remove('aboutUs-containerOn')
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
// contact container showing up
function showContact(){
  document.getElementById('contact-container').classList.toggle('contact-containerClicked')
}
// adventures container showing up
function showAdventures(){
  document.getElementById('adventures-container').classList.toggle('adventures-containerClicked')
}
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
document.querySelector('body').style.backgroundImage='url(/photos/6.jpg) '
}
function showLoading(){
    document.getElementById('loaderText').style.display='block'
}



