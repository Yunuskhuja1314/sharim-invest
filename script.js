
const animItems = document.querySelectorAll("._anim-items"),
  realisation = document.querySelector(".realisation"),
  add = document.querySelector(".add"),
  addText = document.querySelector(".add__text"),
  term = document.querySelectorAll(".term"),
  termBtn = document.querySelectorAll(".terms__btn"),
  turn = document.querySelectorAll(".term__turn"),
  termClose = document.querySelectorAll(".term__close"),
  menu = document.querySelectorAll(".menu__li"),
  sectons = document.querySelectorAll('._main'),
  termInfo = document.querySelector(".terms__info"),
  termInfoContent = document.querySelectorAll(".terms__info__content"),
  nav = document.querySelector(".main__navbar");

    window.addEventListener("scroll", function () {
      const offset = window.pageYOffset;

      if (offset > 20) nav.classList.add("sticky");
      else nav.classList.remove("sticky");
    });

    if (offset > 20) nav.classList.add("sticky");
    else nav.classList.remove("sticky");

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            }else{
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) { 
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }
    setTimeout(() => {
        animOnScroll();
    }, 300);
}

add.addEventListener("click", function () {
  if (realisation.classList.contains('_opened')) {
    realisation.classList.remove('_opened');
    add.classList.remove('_opened');
    addText.innerHTML = "rozwiń";
  } else {
    realisation.classList.add('_opened');
    add.classList.add("_opened");
    addText.innerHTML = "zwiń";
  }
});

for (let i = 0; i < termBtn.length; i++) {
  termBtn[i].addEventListener("click", function () {
    termInfo.style.display = "flex";
    setTimeout(function () {
      termInfo.style.opacity = "1";
    }, 200);
    setTimeout(function () {
      termInfoContent[i].style.display = "flex";
      turn[i].innerHTML = `<p>${i + 1}</p>/4`;
    }, 400);
  });
}

for (let i = 0; i < termClose.length; i++) {
  termClose[i].addEventListener("click", function () {
    termInfo.style.opacity = "0";
    setTimeout(function () {
      termInfo.style.display = "none";
    }, 1000);
  });
}


for (let i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", function (e) {
      e.preventDefault();
    });
    let sectionTop = sectons[i].getBoundingClientRect().top
    console.log(i);
    // window.scrollTo(0, sectionTop);

    
}