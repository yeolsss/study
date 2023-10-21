const headerNavContainer = document.querySelector('.header-nav');
const headerNavItem = document.querySelectorAll('.header-nav__contents');

// class 담는 const
const CLASS_HOVER = 'hover-nav';
const CLASS_CURRENT_NAV = 'current-nav';
const CLASS_CURRENT_TEXT = 'current-text';

headerNavItem.forEach((item) => {
  item.addEventListener('mouseover', (event) => {
    if (!item.classList.contains(CLASS_CURRENT_NAV))
      item.classList.add(CLASS_HOVER);
  });
  item.addEventListener('mouseleave', (event) => {
    item.classList.remove(CLASS_HOVER);
  });
});
