
    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const dots = document.querySelectorAll('.dot');

    let currentIndex = 0;

    function updateCarousel(index) {
        slides.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    prev.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? slide.length - 1 : currentIndex - 1;
        updateCarousel(currentIndex);
    });

    next.addEventListener('click', () => {
        currentIndex = (currentIndex === slide.length - 1) ? 0 : currentIndex + 1;
        updateCarousel(currentIndex);
    });

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            currentIndex = i;
            updateCarousel(currentIndex);
        });
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slide.length;
        updateCarousel(currentIndex);
    }, 3000);

