const dots = document.querySelectorAll('.dot');
const cards = document.querySelectorAll('.services-card .card');
const sliderControl = document.querySelector('.slider-control');

let currentIndex = 0;

function showSlide(index) {
    cards.forEach(card => card.style.display = 'none');
    for (let i = index; i < index + 3; i++) {
        if (cards[i]) {
            cards[i].style.display = 'flex';
        }
    }

    dots.forEach(dot => dot.classList.remove('active'));
    dots[Math.floor(index / 3)].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % cards.length;
    showSlide(currentIndex);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index * 3;
        showSlide(currentIndex);
    });
});

sliderControl.addEventListener('click', nextSlide);

// Auto advance slides every 5 seconds
setInterval(nextSlide, 5000);

// Initial slide display
showSlide(currentIndex);


//menu javascript
