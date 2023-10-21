// 필요 변수 선언
const crewNavDot = document.querySelectorAll('.crew-nav__dot > div');
const crewRole = document.querySelector('.crew-role');
const crewName = document.querySelector('.crew-name');
const crewBodyText = document.querySelector('.body-text');
const crewImg = document.querySelector('.sub-page__img-container > img');

// 자주 쓰는 string 상수 변수선언
const CLASS_CREW_CURRENT = 'current-dot';
const CLASS_CREW_HOVER = 'hover-dot';

//json.data에서 data가져오기
const jsonData = async () => {
  const { crew } = await (await fetch('data.json')).json();
  return crew;
};

//current dot class 삭제 함수
const removeCurrentClass = () => {
  crewNavDot.forEach((item) => {
    item.classList.remove(CLASS_CREW_CURRENT);
  });
};

crewNavDot.forEach((item) => {
  //mouse hover
  item.addEventListener('mouseover', (event) => {
    if (!item.classList.contains(CLASS_CREW_CURRENT)) {
      item.classList.add(CLASS_CREW_HOVER);
    }
  });

  // mouse leave
  item.addEventListener('mouseleave', (event) => {
    item.classList.remove(CLASS_CREW_HOVER);
  });

  // mouse click
  item.addEventListener('click', ({ target }) => {
    // 클릭된 tag에 current class가 없는 테그일때
    if (!item.classList.contains(CLASS_CREW_CURRENT)) {
      // current class 제거 함수 호출
      removeCurrentClass();
      // 클릭된 tag에 current class 추가
      item.classList.add(CLASS_CREW_CURRENT);

      console.dir(target.attributes.href.nodeValue);

      const role = target.attributes.href.nodeValue.replaceAll('#', '');

      //데이터 교체
      jsonData().then((jsonItems) => {
        jsonItems.map((jsonItem) => {
          if (role.toUpperCase() === jsonItem.role.toUpperCase()) {
            // role 변경
            crewRole.innerText = jsonItem.role;
            // crew name 변경
            crewName.innerText = jsonItem.name;
            // crew bio 변경
            crewBodyText.innerText = jsonItem.bio;
            //crew img 변경
            crewImg.src = jsonItem.images.png;
          }
        });
      });
    }
  });
});
