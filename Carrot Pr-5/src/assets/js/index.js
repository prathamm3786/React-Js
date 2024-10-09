const carouselElement = document.querySelector('#carouselExample');
if (carouselElement) {
    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 3000, // Auto slide every 3 seconds
        touch: true // Enable touch/swipe
    });

    // Cleanup
    return () => {
        if (carousel) {
            carousel.dispose();
        }
    };
}