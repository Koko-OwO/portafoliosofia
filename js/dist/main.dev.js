// const carouselContainer = document.querySelector('.carousel-container');
// const carouselSlide = document.querySelector('.carousel-slide');
// const carouselItems = document.querySelectorAll('.carousel-item');
// const itemWidth = carouselItems[0].clientWidth;
// const itemsPerPage = 3;
// let currentIndex = 0;
// function nextSlide() {
//     if (currentIndex < carouselItems.length - itemsPerPage) {
//         currentIndex++;
//         carouselSlide.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
//     } else {
//         // Si llegamos al final, volvemos al principio
//         currentIndex = 0;
//         carouselSlide.style.transform = `translateX(0)`;
//     }
// }
// function prevSlide() {
//     if (currentIndex > 0) {
//         currentIndex--;
//         carouselSlide.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
//     } else {
//         // Si estamos en el primer conjunto de elementos, vamos al último
//         currentIndex = carouselItems.length - itemsPerPage;
//         carouselSlide.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
//     }
// }
// // Auto scroll the carousel
// setInterval(() => {
//     nextSlide();
// }, 3000); // Cambia cada 3 segundos (ajusta el valor según lo desees)
"use strict";