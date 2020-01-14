window.onload = (function() {
  const navLinks = document.querySelectorAll('nav ul li a');

  window.addEventListener('scroll', e => {
    e.preventDefault();
    let fromTop = window.scrollY;

    navLinks.forEach(link => {
      let section = document.querySelector(link.hash);

      section.offsetTop <= fromTop + 150 &&
      section.offsetTop + section.offsetHeight > fromTop
        ? link.classList.add('current')
        : link.classList.remove('current');
    });
  });
})();

window.onscroll = function() {
  stickyNav();
};

let nav = document.querySelector('nav');

let sticky = nav.offsetTop;
console.log(sticky);

function stickyNav() {
  let width = window.screenX;
  console.log(width);

  if (window.pageYOffset > sticky - 65) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
}
/*
(function() {
  let delay = false;
  //Select the scroll container and listen from mouse wheel event.
  //DOMMouseScroll is needed for this to work in firefox.
  $('main').on('mousewheel DOMMouseScroll', function(e) {
    e.preventDefault();
    if (delay) {
      return;
    }
    //Delay scrolling for a brief moment.
    delay = true;
    setTimeout(function() {
      delay = false;
    }, 10);
    //store value that indicates the direction the wheel was spun in wheelDirection variable (-event.originalEvent.detail is for firefox)
    let wheelDirection = e.originalEvent.wheelDelta || -e.originalEvent.detail;
    let wheelDown = wheelDirection > 0;

    //Store array of elements to scroll through
    let scrollSections = document.querySelectorAll('.scroll-section');
    let len = scrollSections.length;
    let i;

    if (!wheelDown) {
      for (i = 0; i < len; i++) {
        let t = scrollSections[i].getClientRects()[0].top;
        if (t >= 40) {
          break;
        }
      }
    } else {
      for (i = len - 1; i >= 0; i--) {
        let t = scrollSections[i].getClientRects()[0].top;
        if (t < -20) {
          break;
        }
      }
    }

    if (i >= 0 && i < len) {
      $('html, body').animate({
        scrollTop: scrollSections[i].offsetTop
      });
    }
  });
})();
