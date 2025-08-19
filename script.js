import {setupMouse} from './cursor.js'; // executes code in cursor.js
import './style.css';
let buttonElement = document.querySelector(".btn-element");
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
      duration: 50,
      onComplete: () => {
        goNext(index + 1);
      }
    });
  });


  // MAIN SLIDER CODE
    let animating = false;  
  function moveSlide(nextIndex, forwards) {
    if (animating) return;
    animating = true;
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

    //resetting all positions
    childItems.forEach((item, i) => {
        item.style.display = "none";
        let img = item.querySelector(".slider_cms_img");
        if (img) gsap.set(img, { scale: 1, transformOrigin: "left bottom",x:0,y:0,rotate:0,skewY:0 });
        gsap.set(item, { "--angle": "0deg", x:0, skewY:0 });
        
    });
    
    childItems[activeIndex].style.display = "flex";
    childItems[nextIndex].style.display = "flex";

    let tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.inOut" } });
    let nextItem = childItems[nextIndex];
   
    let prevItem = childItems[activeIndex];
    let prevImage = childItems[activeIndex].querySelector(".slider_cms_img");
    let nextImage = childItems[nextIndex].querySelector(".slider_cms_img");
    buttonElement.style.zIndex = 4;
    
    
    if (forwards) {
    // Clip-path for page swipe
    prevItem.style.zIndex = 1;
    nextItem.style.zIndex = 2;
    

    console.log("Forwards")
    console.log(`Current Item is ${prevItem.querySelector(".slider_cms_title").textContent}`);
    console.log(`Next Item is ${nextItem.querySelector(".slider_cms_title").textContent}`);
    // REVEAL the next slide with an opposite sweep

    gsap.fromTo(nextItem, 
      { "--angle": "90deg" }, 
      { "--angle": "0deg", duration: 1.2, ease: "back.out(0.1)"}, "<"
    );

      // Image zoom + skew for fan effect
      tl.fromTo(prevImage, 
        { scale: 1, transformOrigin: "left bottom" }, 
        { scale: 2,y:300,x:-1020,rotate:-15, duration: 1, onComplete: ()=> {
          animating = false;
        } }, "+=0.2"); // "<" = start together with clip-path
        
    } else {

    prevItem.style.zIndex = 2;
    nextItem.style.zIndex = 1;
      // Reverse direction
    console.log("Backwards")
    console.log(`Current Item is ${prevItem.querySelector(".slider_cms_title").textContent}`);
    console.log(`Next Item is ${nextItem.querySelector(".slider_cms_title").textContent}`);
    // REVEAL the next slide with an opposite sweep

    gsap.fromTo(prevItem, 
      { "--angle": "0deg"},
      { "--angle": "90deg", duration: 1.2, ease: "power2.inOut"}, "<"
    );
      // Image zoom + skew for fan effect
    tl.fromTo(prevImage, 
        { scale: 1, transformOrigin: "left bottom" }, 
        { scale: 2,y:300,x:1020,rotate:15, duration: 1, onComplete: ()=> {
          animating = false;
        } }, "<"); // "<" = start together with clip-path
        

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