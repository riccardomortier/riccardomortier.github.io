const form = document.querySelector('form');
const fullName = document.getElementById('form_name');
const email = document.getElementById('form_email');
const phone = document.getElementById('form_phoneNumber');
const subject = document.getElementById('form_subject');
const mess = document.getElementById('form_message');

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            });
        }
    });
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value ? phone.value : '?'}<br> Message: ${mess.value}`

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "riccardo.mortier1@gmail.com",
        Password : "C26FE9B0FD3622137218127607331960DE6D",
        To : 'riccardo.mortier1@gmail.com',
        From: 'riccardo.mortier1@gmail.com',
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    alert('The contact form is still being developed to properly work!')

    // sendEmail();
});
