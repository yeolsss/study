// 필요 변수
const btnCircle = document.querySelectorAll('.sub-page_nav > button');
const headerContent = document.querySelector('.sub-page__contents-text > h3');
const bodyContent = document.querySelector(
  '.sub-page__contents-text > .body-text',
);
const imgContent = document.querySelector('.sub-page__img > img');

// class 상수
const CLASS_HOVER_CIRCLE = 'hover-circle';
const CLASS_CURRENT_CIRCLE = 'current-circle';

// 활성화된 class 삭제
const removeCurrentClass = () => {
  btnCircle.forEach((item) => {
    item.classList.remove(CLASS_CURRENT_CIRCLE);
  });
};

// data.json 받아오기
const jsonData = async () => {
  const { technology } = await (await fetch('data.json')).json();
  return technology;
};

btnCircle.forEach((item) => {
  // 마우스 hover
  item.addEventListener('mouseover', () => {
    if (!item.classList.contains(CLASS_CURRENT_CIRCLE)) {
      item.classList.add(CLASS_HOVER_CIRCLE);
    }
  });

  // 마우스 leave
  item.addEventListener('mouseleave', () => {
    item.classList.remove(CLASS_HOVER_CIRCLE);
  });

  // 마우스 click
  item.addEventListener('click', (event) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;

    removeCurrentClass();
    item.classList.add(CLASS_CURRENT_CIRCLE);

    jsonData().then((jsonItems) => {
      jsonItems.map((jsonItem) => {
        if (jsonItem.name.toUpperCase() === value.toUpperCase()) {
          headerContent.innerText = jsonItem.name;
          bodyContent.innerText = jsonItem.description;
          imgContent.src = jsonItem.images.portrait;
        }
      });
    });
  });
});
