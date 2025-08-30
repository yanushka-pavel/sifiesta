import {setupMouse} from './animations/cursor.js'; // executes code in cursor.js
import './style.css';
import './animations/cms-buttons.js';
import {cmsButtonsFunction,currentButton,nextButton, currentButtonText,nextButtonText,buttonsTextAnimation, buttonHoverAnimationIn, buttonHoverAnimationOut} from './animations/cms-buttons.js';
import { Load } from './animations/page-load.js';
import { GeneralIndex } from './animations/slide-index-state.js';
//pageLoad animation
window.addEventListener("load", ()=> {
  Load.pageLoadAnimation();
})

function initSlider (){

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
  let childImage = sliderWrap.querySelectorAll(".slider_cms_content");
  let childDots = sliderWrap.querySelectorAll(".slider_dot_item");
  let childDotsClick = sliderWrap.querySelectorAll(".slider_dot_click");
  let totalSlides = childItems.length;
  let activeIndex = 0;
  let buttonWrap = sliderWrap.querySelectorAll(".btn-wrap")
  let buttonText = sliderWrap.querySelector(".btn-text")
  const cmsButtons = document.querySelectorAll(".button.slider");
  const backgroundVideo = document.querySelectorAll(".slider_cms_video");
  // const buttonHoverWrap = document.querySelector(".button-hover-wrap");
  // const buttonHoverEl = document.querySelector(".button-hover");
  //button hover animation
  // Hide all childItems initially
  childItems.forEach(item => item.style.display = "none");
  // Show first item
  if (childItems[0]) childItems[0].style.display = "flex";
  cmsButtons[0].style.visibility = "visible";
//mouse animation
setupMouse(buttonWrap,buttonText);

  // gsap set for first dot line
  if (childDots[0]) {
    gsap.set(childDots[0].querySelector(".slider_dot_line"), { x: "0%" });
    gsap.set(childDots[0], { width:"5rem",height:"0.3rem",borderRadius:"15%" });
  }

  // DOT LINES
  let tl2 = gsap.timeline({ repeat: -1});
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

//button hover event listeners
cmsButtons.forEach(button => {
  button.addEventListener("mouseenter", (e)=> {
    const buttonHoverEl = e.currentTarget
    buttonHoverAnimationIn(tl2, buttonHoverEl);
  }
);
});
cmsButtons.forEach(button => {
  button.addEventListener("mouseleave", (e)=> {
    const buttonHoverEl = e.currentTarget
  buttonHoverAnimationOut(tl2, buttonHoverEl);
  });});

//function to reset video
const resetVideo = function (index){
const currentVideo = backgroundVideo[index]?.querySelector("video")
if(currentVideo){
    currentVideo.currentTime = 0;
}
}

  // MAIN SLIDER CODE
    let animating = false;  
    function moveSlide(nextIndex, forwards) {
    //genereal index update for button hover animation
    GeneralIndex.updateSlideState(activeIndex, nextIndex);
    //button text animation
    cmsButtonsFunction(activeIndex, nextIndex);
    if (animating) return;
    animating = true;
    //animation for dots
    let tl3 = gsap.timeline();
    tl3.set(childDots[nextIndex].querySelector(".slider_dot_line"), { x: "0%" });
    tl3.to(childDots[nextIndex], { width: "5rem", height: "0.3rem", borderRadius: "15%"},);
    tl3.to(childDots[activeIndex], {width:"0.75rem",height:"0.75rem", borderRadius: "100%"},"<")
    tl3.fromTo(childDots[activeIndex].querySelector(".slider_dot_line"), { x: "0%" }, { x: "100%" },"<");
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
        let img = item.querySelector(".slider_cms_content");
        if (img) gsap.set(img, { scale: 1, transformOrigin: "left bottom",x:0,y:0,rotate:0,skewY:0 });
        gsap.set(item, { x:0, skewY:0 });
        
    });
    
    
    childItems[activeIndex].style.display = "flex";
    childItems[nextIndex].style.display = "flex";
    let tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.inOut" } });
    let nextItem = childItems[nextIndex];
    let prevItem = childItems[activeIndex];
    let prevImage = childItems[activeIndex].querySelector(".slider_cms_content");
    let nextImage = childItems[nextIndex].querySelector(".slider_cms_content");
    buttonElement.style.zIndex = 4;
    

    if (forwards) {
    // Forward animation
    prevItem.style.zIndex = 1;
    nextItem.style.zIndex = 2;
    buttonsTextAnimation(activeIndex, nextIndex);
    
    // Set transform origins
    prevItem.style.transformOrigin = "bottom right"; // current pivot
    nextItem.style.transformOrigin = "bottom left"; // next slide pivot aligns diagonal
    tl.call(()=> resetVideo(activeIndex));
      tl.fromTo(nextImage,
      { scale: 1.8,},
      { scale: 1, duration: 0.8, ease: "power1.inOut",
        },
      "<"
    );
    // Animate the next slide mask
     tl.fromTo(nextImage,
      { scale: 1.8,  x: nextItem.offsetWidth, y: 0, rotate: 15 },
      { scale: 1, x: 0, y: 0, rotate: 0, duration: 0.9, ease: "power2.inOut",
      },
      "<"
    );

    // Animate the previous image with fan effect
    tl.fromTo(prevImage,
      { scale: 1,},
      { scale: 1.4,
        duration: 0.8, ease: "power2.inOut" },"<"
    );
    
     tl.fromTo(prevImage,
      { x: 0, y:0},
      { x: -prevItem.offsetWidth, y: "10%",
        duration: 0.8, ease: "power2.inOut", 
      onComplete: () => { animating = false; }  },"-=0.8"
    );
    
   

} else {
buttonsTextAnimation(activeIndex, nextIndex);
  prevItem.style.zIndex = 1;
  nextItem.style.zIndex = 2;
  nextImage.style.transformOrigin = "bottom right"; // next slide pivot aligns diagonal
  prevImage.style.transformOrigin = "bottom right";
  tl.call(()=> resetVideo(activeIndex));
    tl.fromTo(nextImage,
      { scale: 1.8,},
      { scale: 1, duration: 0.8, ease: "power1.inOut",
       },
      "<"
    );
    // Animate the next slide mask
     tl.fromTo(nextImage,
      {  scale: 1.8,x: -nextItem.offsetWidth, y: 0,rotate: -15,},
      {  scale:1,x: 0, y: 0, rotate: 0, duration: 0.9, ease: "power2.inOut",
      },
      
      "<"
    );
    

    // Animate the previous image with fan effect
    tl.fromTo(prevImage,
      { scale: 1,},
      { scale: 1.4,
        duration: 0.8, ease: "power2.inOut" },"<"
    );
    
     tl.fromTo(prevImage,
      { x: 0, y:0},
      { x: prevItem.offsetWidth, y: "10%",
        duration: 0.8, ease: "power2.inOut",
       onComplete: () => { animating = false; } },"-=0.8"
    );

    
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
    duration: 1.2, 
    ease: "power3.out" 
  },"-=0.4"
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
}
window.addEventListener("load", ()=> {
  setTimeout(()=> {
    initSlider();
  }, 2900);
})