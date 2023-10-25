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

    showImage(currentIndex); // Show the initial image
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

//     updateButtonStates();
// });


const cards = document.querySelectorAll('.card-review');

let batchLength;
  
window.addEventListener('resize',()=>{
    if (window.innerWidth <= 500) {
        batchLength = 1;
    } else {
        batchLength = 3;
    }
});


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

// function validateForm() {
//     // Regex patterns for validation
//     const namePattern = /^[A-Za-z\s]{3,}$/;
//     const cinPattern = /^[0-9]{12}$/;
//     const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
//     const phonePattern = /^\+212[0-9]{9}$/;

//     // Get input values
//     const fullName = document.getElementById("full-name").value;
//     const age = document.getElementById("age").value;
//     const cin = document.getElementById("cin").value;
//     const telephone = document.getElementById("telephone").value;
//     const email = document.getElementById("email").value;

//     // Validate input using regex
//     const isFullNameValid = namePattern.test(fullName);
//     const isCINValid = cinPattern.test(cin);
//     const isEmailValid = emailPattern.test(email);
//     const isPhoneValid = phonePattern.test(telephone);

//     // Check if all fields are valid
//     if (isFullNameValid && isCINValid && isEmailValid && isPhoneValid) {
//         // All inputs are valid, you can submit the form or take further action
//         alert("Form submitted successfully!");
//     } else {
//         // Display an error message or highlight invalid fields
//         alert("Please fill out the form correctly.");
//     }
// }




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


