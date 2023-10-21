const circleBtn = document.querySelector('.main-contents__circle');
const hiddenCircle = document.querySelector('.main-contents__circle-hidden');
circleBtn.addEventListener('mouseover', () => {
  hiddenCircle.classList.add('visible');
});

circleBtn.addEventListener('mouseleave', () => {
  hiddenCircle.classList.remove('visible');
});
