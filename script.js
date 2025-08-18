import {setupMouse} from './cursor.js'; // executes code in cursor.js
import './style.css';
let splitType = new SplitType(".slider_cms_title", {
  types: "lines",
  tagName: "span"
});

document.querySelectorAll(".slider_cms_title .line").forEach(line => {
  let wrapper = document.createElement("div");
  wrapper.style.overflow = "hidden";
  line.parentNode.insertBefore(wrapper,line);//line.parentNode - finds the parent of line element, insertbefore puts wrapper before the line element
  wrapper.appendChild(line); // puts line element inside wrapper
})
// Select all .slider_wrap elements and iterate over them
document.querySelectorAll(".slider_wrap").forEach(sliderWrap => {
  let childArrow = sliderWrap.querySelectorAll(".slider_btn");
  let childItems = sliderWrap.querySelectorAll(".slider_cms_item");
  let childImage = sliderWrap.querySelectorAll(".slider_cms_img");
  let childDots = sliderWrap.querySelectorAll(".slider_dot_item");
  let childDotsClick = sliderWrap.querySelectorAll(".slider_dot_click");
  let totalSlides = childItems.length;
  let activeIndex = 0;
  let buttonWrap = sliderWrap.querySelectorAll(".btn-wrap")
  let buttonText = sliderWrap.querySelector(".btn-text")

  // Hide all childItems initially
  childItems.forEach(item => item.style.display = "none");
  // Show first item
  if (childItems[0]) childItems[0].style.display = "flex";

//mouse animation
setupMouse(buttonWrap,buttonText);

  // gsap set for first dot line
  if (childDots[0]) {
    gsap.set(childDots[0].querySelector(".slider_dot_line"), { x: "0%" });
  }

  // DOT LINES
  let tl2 = gsap.timeline({ repeat: -1 });
  childDots.forEach((dot, index) => {
    tl2.addLabel(`step${index}`);
    tl2.to(dot.querySelector(".slider_dot_line"), {
      scaleX: "1.0",
      ease: "none",
      duration: 5,
      onComplete: () => {
        goNext(index + 1);
      }
    });
  });

  // MAIN SLIDER CODE
  function moveSlide(nextIndex, forwards) {
    let tl3 = gsap.timeline();
    tl3.set(childDots[nextIndex].querySelector(".slider_dot_line"), { x: "0%" });
    tl3.fromTo(childDots[activeIndex].querySelector(".slider_dot_line"), { x: "0%" }, { x: "100%" });

    tl2.seek(`step${nextIndex}`);

    let titleFrom = -400;
    let titleDelay = "<";
    if (forwards) {
      titleFrom = 400;
      titleDelay = "<50%";
    }

    childItems.forEach(item => item.style.display = "none");
    childItems[activeIndex].style.display = "flex";
    childItems[nextIndex].style.display = "flex";

    let tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.inOut" } });
    let nextItem = childItems[nextIndex];
    let nextImage = childItems[nextIndex].querySelector(".slider_cms_img");
    let prevItem = childItems[activeIndex];
    let prevImage = childItems[activeIndex].querySelector(".slider_cms_img");
    if (forwards) {
  // Clip-path for page swipe
  

  tl.fromTo(prevItem, 
    { clipPath: "polygon(0% 0%, 150% 0%, 100% 100%, 0% 100%)" }, 
    { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 100%)" }); // "<" = simultaneous
    
   tl.fromTo(nextItem, 
    { clipPath: "polygon(100% 100%, 100% 100%, 100% 100%, 0% 100%)" }, 
    { clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 0% 100%)" }, "<");


  // Image zoom + skew for fan effect
  tl.fromTo(prevImage, 
    { scale: 1, transformOrigin: "left bottom" }, 
    { scale: 2,x:-1000,  duration: 0.8 }, "<"); // "<" = start together with clip-path

} else {
  // Reverse direction
  tl.fromTo(nextItem, 
    { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }, 
    { clipPath: "polygon(0% 0%, 100% 0%, 130% 100%, 0% 100%)" });

  tl.fromTo(prevItem, 
    { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }, 
    { clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 130% 100%)" }, "<");

  // Image zoom + skew for opposite fan effect
  tl.fromTo(prevImage, 
    { scale: 2, transformOrigin: "top left" }, 
    { scale: 1,  duration: 0.8 }, "<");
}

    // Animate characters inside slider_cms_title
    let lines = nextItem.querySelectorAll(".slider_cms_title .line");
    gsap.fromTo(
  lines,
  { 
    yPercent: titleFrom, 
    opacity: 0, 
    skewY: 20,
  }, 
  { 
    yPercent: 0, 
    opacity: 1, 
    skewY: 0, 
    duration: 1.5, 
    ease: "power3.out" 
  }
);

    activeIndex = nextIndex;
  }

  // ARROWS navigation
  function goNext(num) {
    let nextIndex = num;
    if (nextIndex > totalSlides - 1) nextIndex = 0;
    moveSlide(nextIndex, true);
  }

  buttonWrap.forEach(arrow => {
    if (arrow.classList.contains("is-next")) {
      arrow.addEventListener("click", () => {
        goNext(activeIndex + 1);
      });
    }
    if (arrow.classList.contains("is-prev")) {
      arrow.addEventListener("click", () => {
        let nextIndex = activeIndex - 1;
        if (nextIndex < 0) nextIndex = totalSlides - 1;
        moveSlide(nextIndex, false);
      });
    }
  });

  // CLICK OF DOTS
  childDotsClick.forEach(dotClick => {
    dotClick.addEventListener("click", () => {
      // find index of clicked dotClick relative to all dots
      let dotIndex = Array.from(childDotsClick).indexOf(dotClick);
      if (activeIndex > dotIndex) {
        moveSlide(dotIndex, false);
      } else if (activeIndex < dotIndex) {
        moveSlide(dotIndex, true);
      }
    });
  });
});