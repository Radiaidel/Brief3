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

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card-plan");
    let currentIndex = 0;

    function showCard(index) {
        cards.forEach((card, i) => {
            card.classList.remove("active");
            if (i === index) {
                card.classList.add("active");
            }
        });
    }

    const prevButton = document.querySelector(".prevbtn");
    const nextButton = document.querySelector(".nextbtn");

    function updateButtonStates() {
        if (currentIndex === 0) {
            prevButton.style.opacity = 0;
        } else {
            prevButton.style.opacity = 1;
        }

        if (currentIndex === cards.length - 1) {
            nextButton.style.opacity = 0;
        } else {
            nextButton.style.opacity = 1;
        }
    }

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        showCard(currentIndex);
        updateButtonStates();
    });

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
        updateButtonStates();
    });

    updateButtonStates();
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

const cards = document.querySelectorAll('.card-review');
const batchLength = 3; // Nombre de cartes à afficher à la fois
let currentBatchIndex = 0;

function showBatch(startIndex) {
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = 'none';
    }
    for (let i = startIndex; i < startIndex + batchLength; i++) {
        if (cards[i]) {
            cards[i].style.display = 'block';
        }
    }
}

function updateButtonsVisibility() {
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    
    if (currentBatchIndex === 0) {
        prevButton.style.opacity = 0;
    } else {
        prevButton.style.opacity = 1;
    }
    
    if (currentBatchIndex + batchLength >= cards.length) {
        nextButton.style.opacity = 0;
    } else {
        nextButton.style.opacity = 1;
    }
}

updateButtonsVisibility();
showBatch(currentBatchIndex);

document.getElementById('next').addEventListener('click', () => {
    if (currentBatchIndex + batchLength < cards.length) {
        currentBatchIndex += batchLength;
        showBatch(currentBatchIndex);
        updateButtonsVisibility();
    }
});

document.getElementById('prev').addEventListener('click', () => {
    if (currentBatchIndex - batchLength >= 0) {
        currentBatchIndex -= batchLength;
        showBatch(currentBatchIndex);
        updateButtonsVisibility();
    }
});





// document.addEventListener("DOMContentLoaded", function () {
//     const cards = document.querySelectorAll(".card-plan");
//     let currentIndex = 0;

//     function showCard(index) {
//         cards.forEach((card, i) => {
//             card.classList.remove("active");
//             if (i === index) {
//                 card.classList.add("active");
//             }
//         });
//     }

//     const prevButton = document.querySelector(".prevbtn");
//     const nextButton = document.querySelector(".nextbtn");

//     function updateButtonStates() {
//         if (currentIndex === 0) {
//             prevButton.style.opacity = 0;
//         } else {
//             prevButton.style.opacity = 1;
//         }

//         if (currentIndex === cards.length - 1) {
//             nextButton.style.opacity = 0;
//         } else {
//             nextButton.style.opacity = 1;
//         }
//     }

//     prevButton.addEventListener("click", function () {
//         currentIndex = (currentIndex - 1 + cards.length) % cards.length;
//         showCard(currentIndex);
//         updateButtonStates();
//     });

//     nextButton.addEventListener("click", function () {
//         currentIndex = (currentIndex + 1) % cards.length;
//         showCard(currentIndex);
//         updateButtonStates();
//     });

//     // Appel initial pour désactiver le bouton "Précédent" au début
//     updateButtonStates();
// });


