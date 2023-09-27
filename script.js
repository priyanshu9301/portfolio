
const expand_btn = document.querySelector(".expand-btn");

let activeIndex;

expand_btn.addEventListener("click", () => {
    document.body.classList.toggle("collapsed");
});

const current = window.location.href;

const allLinks = document.querySelectorAll(".sidebar-links a")

allLinks.forEach((elem) => {
    elem.addEventListener('click', function () {
        const hrefLinkClick = elem.href;
        allLinks.forEach((link) => {
            if (link.href == hrefLinkClick) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    })
});
const clickableImage = document.querySelector('.clickable-image');
const imageOverlay = document.querySelector('.image-overlay');
const openedImage = document.querySelector('.opened-image');
const contdiv = document.querySelector('.contdiv');

clickableImage.addEventListener('click', () => {
    imageOverlay.style.display = 'flex';
    imageOverlay.style.position = 'fixed';
    imageOverlay.style.visibility = 'visible';
    imageOverlay.style.zindex = '10';
    contdiv.style.zindex = '11';
});


imageOverlay.addEventListener('click', () => {
    imageOverlay.style.display = 'none';
    imageOverlay.style.position = 'static';


});
// contdiv.addEventListener('click', () => {
//     contdiv.style.zindex = "10"
// });

// openedImage.addEventListener('click', (event) => {
//     event.stopPropagation(); // Prevent the overlay from closing when clicking on the opened image itself.
// });