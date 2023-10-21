// 클릭된 행성
const planetTag = document.querySelectorAll('.planet-nav');
const planetTitle = document.querySelector('.planet-title');
const planetBodyText = document.querySelector('.body-text');
const planetImg = document.querySelector('.sub-page__info-container > img');
const distance = document.querySelector('#distance');
const travel = document.querySelector('#travel');

// 현재 선택된 planet 담을 변수
let planet = '';

// current class 삭제 함수
const removeCurrentClass = () => {
  planetTag.forEach((item) => {
    item.classList.remove(CLASS_CURRENT_NAV);
    item.querySelector('.nav-text').classList.remove(CLASS_CURRENT_TEXT);
  });
};

// data.json 데이터 받아오기
const jsonData = async () => {
  const { destinations } = await (await fetch('data.json')).json();
  return destinations;
};

planetTag.forEach((item, index) => {
  // 행성 테그 호버
  item.addEventListener('mouseover', () => {
    if (!item.classList.contains(CLASS_CURRENT_NAV)) {
      item.classList.add(CLASS_HOVER);
    }
  });

  // 행성 테그 마우스리브
  item.addEventListener('mouseleave', () => {
    item.classList.remove(CLASS_HOVER);
  });

  // 행성 테그 클릭
  item.addEventListener('click', ({ target }) => {
    if (!item.classList.contains(CLASS_CURRENT_NAV)) {
      //클릭 된 행성 정보로 data.json에서 데이터 받아오기
      planet = target.textContent;
      // current class 삭제
      removeCurrentClass();
      // 선택된 planet current class 부여
      item.classList.add(CLASS_CURRENT_NAV);
      target.classList.add(CLASS_CURRENT_TEXT);
      const currentPlanet = target.innerText;

      jsonData().then((jsonItems) => {
        jsonItems.map((jsonItem) => {
          if (jsonItem.name.toUpperCase() === currentPlanet) {
            planetTitle.innerText = jsonItem.name;
            planetBodyText.innerText = jsonItem.description;
            planetImg.src = jsonItem.images.png;
            distance.innerText = jsonItem.distance;
            travel.innerText = jsonItem.travel;
          }
        });
      });
    }
  });
});
