
var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname){

    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openMenu(){
    sidemenu.style.right = "0";
}
function closeMenu(){
    sidemenu.style.right = "-200px";
}


const scriptURL = 'https://script.google.com/macros/s/AKfycby_vYZtQiK81eoWYoSDFwju66PBqZEdXiYlBXt0xP2j6s0UExvImoJURdAbUG6uzEsR/exec'
const form = document.forms['submit-to-google-sheet']
const message = document.getElementById("success-message");

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        message.innerHTML = "Message sent successfully.";
        setTimeout(function(){
            message.innerHTML = ""
        },5000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})















