const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        const imgElement = question.querySelector(".down");

        if (answer.style.display === "block") {
            answer.style.display = "none";
            imgElement.src="images/down.png";
        } else {
            answer.style.display = "block";
            imgElement.src = "images/up.png";
        }
    });
});

const cards = document.querySelectorAll('.card');

    let currentBatchIndex = 0;

    document.getElementById('prev').style.display = 'none';

    document.getElementById('next').addEventListener('click', () => {
        if (currentBatchIndex < cards.length - 3) {
            for (let i = currentBatchIndex; i < currentBatchIndex + 3; i++) {
                cards[i].classList.remove('active');
            }
            currentBatchIndex += 3;
            for (let i = currentBatchIndex; i < currentBatchIndex + 3; i++) {
                cards[i].classList.add('active');
            }
            document.getElementById('prev').style.display = 'block';
        }

        if (currentBatchIndex >= cards.length - 3) {
            document.getElementById('next').style.display = 'none';
        }
    });

    document.getElementById('prev').addEventListener('click', () => {
        if (currentBatchIndex >= 3) {
            for (let i = currentBatchIndex; i < currentBatchIndex + 3; i++) {
                cards[i].classList.remove('active');
            }
            currentBatchIndex -= 3;
            for (let i = currentBatchIndex; i < currentBatchIndex + 3; i++) {
                cards[i].classList.add('active');
            }
            document.getElementById('next').style.display = 'block';
        }

        if (currentBatchIndex < 3) {
            document.getElementById('prev').style.display = 'none';
        }
    });