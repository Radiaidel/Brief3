const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("close");
});

const header = document.querySelector("header");

window.addEventListener("scroll", ()=> {
    if (window.scrollY > 0) {
        header.style.backgroundColor = 'white';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const galcarr = document.querySelector('.galcarr');
    const images = galcarr.querySelectorAll('img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((image, i) => {
            if (i === index) {
                image.style.display = 'block';
            } else {
                image.style.display = 'none';
            }
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    nextButton.addEventListener('click', nextImage);
    prevButton.addEventListener('click', prevImage);

    showImage(currentIndex); 
});



const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        const imgElement = question.querySelector(".down");

        if (answer.style.display === "block") {
            answer.style.display = "none";
            imgElement.src = "images/down.png";
        } else {
            answer.style.display = "block";
            imgElement.src = "images/up.png";
        }
    });
});













function validateForm() {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const cin = document.getElementById("cin").value;
    const telephone = document.getElementById("telephone").value;
    const email = document.getElementById("email").value;
    const plan = document.getElementById("plans").value;

    const nameRegex = /^[a-zA-Z]{3,}$/;
    const cinRegex = /^[a-zA-Z]{0,2}[0-9]{5,8}$/;
    const telephoneRegex = /^\+212[0-9]{9}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!nameRegex.test(firstName)) {
        alert("Le prénom doit avoir au moins 3 caractères et ne contenir que des lettres.");
    } else if (!nameRegex.test(lastName)) {
        alert("Le nom doit avoir au moins 3 caractères et ne contenir que des lettres.");
    } else if (!cinRegex.test(cin)) {
        alert("Le numéro de CIN doit contenir au maximum 2 caractères alphabétiques suivis de 5 à 8 chiffres.");
    } else if (!telephoneRegex.test(telephone)) {
        alert("Le numéro de téléphone doit commencer par +212 suivi de 9 chiffres.");
    } else if (!emailRegex.test(email)) {
        alert("L'adresse e-mail n'est pas valide.");
    } else if (plan === "none") {
        alert("Veuillez sélectionner un abonnement.");
    } else {
        alert("Formulaire valide. Vous êtes inscrit avec succès !");
    }
}