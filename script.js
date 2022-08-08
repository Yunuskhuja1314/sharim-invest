
const animItems = document.querySelectorAll("._anim-items"),
  realisation = document.querySelector(".realisation"),
  add = document.querySelector(".add"),
  addText = document.querySelector(".add__text"),
  term = document.querySelectorAll(".term"),
  termBtn = document.querySelectorAll(".terms__btn"),
  turn = document.querySelectorAll(".term__turn"),
  termClose = document.querySelectorAll(".term__close"),
  menu = document.querySelectorAll(".menu__li"),
  sectons = document.querySelectorAll("._main"),
  left = document.querySelectorAll(".term_left"),
  right = document.querySelectorAll(".term_right"),
  navbarBtn = document.querySelector(".navbar__btn"),
  navbarContent = document.querySelector(".navbar__menu"),
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
      } else {
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
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
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

// for (let i = 0; i < termBtn.length; i++) {
//   termBtn[i].addEventListener("click", function () {
//     termInfo.style.display = "flex";
//     setTimeout(function () {
//       termInfo.style.opacity = "1";
//     }, 200);
//     setTimeout(function () {
//       termInfoContent[i].style.display = "flex";
//       turn[i].innerHTML = `<p>${i + 1}</p>/4`;
//     }, 400);
//   });
// }

for (let i = 0; i < termBtn.length; i++) {
  termBtn[i].addEventListener("click", function () {
    termInfo.style.display = "flex";
    location.href = '#terms';
    setTimeout(function () {
      termInfo.style.opacity = "1";
    }, 200);
    for (let ii = 0; ii < termBtn.length; ii++) {
      setTimeout(function () {
        termInfoContent[ii].style.display = "none";
      }, 400);
    }
    setTimeout(function () {
      termInfoContent[i].style.display = "flex";
      turn[i].innerHTML = `<p>${i + 1}</p>/4`;
    }, 400);
  });
}

for (let i = 0; i < left.length; i++) {
  left[i].addEventListener("click", function Left() {
    if (i > 0) {
      for (let ii = 0; ii < left.length; ii++) {
        termInfoContent[ii].style.opacity = "0";
        setTimeout(function () {
          termInfoContent[ii].style.display = "none";
        }, 400);
      }
      setTimeout(function () {
        termInfoContent[i - 1].style.display = "flex";
      }, 400);
      setTimeout(function () {
        termInfoContent[i - 1].style.opacity = "1";
        turn[i - 1].innerHTML = `<p>${i}</p>/4`;
      }, 600);
    } else {
      i = 4;
      Left();
    }
  });
}
for (let i = 0; i < right.length; i++) {
  right[i].addEventListener("click", function Right() {
    if (i < 3) {
      for (let ii = 0; ii < right.length; ii++) {
        termInfoContent[ii].style.opacity = "0";
        setTimeout(function () {
          termInfoContent[ii].style.display = "none";
        }, 400);
      }
      setTimeout(function () {
        termInfoContent[i + 1].style.display = "flex";
      }, 400);
      setTimeout(function () {
        termInfoContent[i + 1].style.opacity = "1";
        turn[i + 1].innerHTML = `<p>${i + 2}</p>/4`;
      }, 600);
    } else {
      i = -1;
      Right();
    }
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
  // console.log(i);
  // window.scrollTo(0, sectionTop);


}

navbarBtn.addEventListener("click", menuOpen);

function menuOpen() {
  if (navbarBtn.classList.contains("active") === true) {
    navbarBtn.classList.remove("active");
    navbarContent.style = `left: -102%; transition: left 0.5s`;
  } else {
    navbarBtn.classList.add("active");
    navbarContent.style = `left: 0; transition: left 0.5s`;
  }
}
function menuClose(event) {
  if (event.target.classList.contains("navbar__content")) {
    navbarContent.style = `left: -102%; transition: left 0.5s`;
    navbarBtn.classList.remove("active");
  }
}






function SliderS(sliderClass) {
  this.sliderImages = document.querySelectorAll(sliderClass + ' img');
  this.sliderBtnLeft = document.querySelector(sliderClass + ' .slick-button-prev');
  this.sliderBtnRight = document.querySelector(sliderClass + ' .slick-button-next');
  this.sliderCounter = 0;
  var sliderContext = this;
  this.sliderBtnLeft.addEventListener('click', left);
  this.sliderBtnRight.addEventListener('click', right);
  function right() {
    sliderContext.sliderImages[sliderContext.sliderCounter].classList.remove('slider-active');
    sliderContext.sliderCounter++;
    if (sliderContext.sliderCounter == sliderContext.sliderImages.length) {
      sliderContext.sliderCounter = 0;
    }
    sliderContext.sliderImages[sliderContext.sliderCounter].classList.add('slider-active');
  }
  function left() {
    sliderContext.sliderImages[sliderContext.sliderCounter].classList.remove('slider-active');
    sliderContext.sliderCounter--;
    if (sliderContext.sliderCounter < 0) {
      sliderContext.sliderCounter = --sliderContext.sliderImages.length;
    }
    sliderContext.sliderImages[sliderContext.sliderCounter].classList.add('slider-active');
  }
}

var slick = new SliderS('.mySlider');
