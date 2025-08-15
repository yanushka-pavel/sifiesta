let splitType = new SplitType(".slider_cms_title", {
  types: "words, chars",
  tagName: "span"
});

// Select all .slider_wrap elements and iterate over them
document.querySelectorAll(".slider_wrap").forEach(sliderWrap => {
  let childArrow = sliderWrap.querySelectorAll(".slider_btn");
  let childItems = sliderWrap.querySelectorAll(".slider_cms_item");
  let childDots = sliderWrap.querySelectorAll(".slider_dot_item");
  let childDotsClick = sliderWrap.querySelectorAll(".slider_dot_click");
  let totalSlides = childItems.length;
  let activeIndex = 0;
  let buttonWrap = sliderWrap.querySelectorAll(".btn-wrap")


  // Hide all childItems initially
  childItems.forEach(item => item.style.display = "none");
  // Show first item
  if (childItems[0]) childItems[0].style.display = "flex";


// Hover sticky elements
 buttonWrap.forEach(wrap => {
wrap.addEventListener("mousemove", (e)=>{
    let buttonElement;
    if(wrap.classList.contains("is-next")){
        buttonElement = wrap.querySelector(".is-next");
        buttonElement.style.visibility = "visible";
        const elementWidth = buttonElement.offsetWidth; //offsetWidth - width of the element with all paddings and margins
        const elementHeight = buttonElement.offsetHeight;    
        const rect = wrap.getBoundingClientRect();
        const Mx = e.clientX - rect.left - elementWidth/2;
        const My = e.clientY - rect.top - elementHeight/2;
        //we also need to get the whole size of each wrapper
        const wrapperWidth = rect.width;
        const wrapperHeight = rect.height;
        /*we need to compare if our value is greater than 0 and less than 1
        1>num>0
        Math.max(num,0) - num>0?
        Math.min(num,1) - num<1?
        and get either our number if its insie the approved values, or max if the mouse goes to far right, or min if it overflows left wrapper
        */
        const clamp = (num,min,max) => Math.min(Math.max(num, min), max);
        //now we want to have a scale from 0 to 1, not pixels sizes
        const scaleLineX = clamp(Mx / wrapperWidth, 0,1);
        const scaleLineY = clamp(My / wrapperHeight, 0,1);
        buttonElement.style.left = scaleLineX * 100 + "%";
        buttonElement.style.top = scaleLineY * 100 + "%";
        wrap.addEventListener("mouseleave", ()=>{
            buttonElement.style.visibility = "hidden";
        })
    }
})});

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

    let titleFrom = -100;
    let titleDelay = "<";
    if (forwards) {
      titleFrom = 100;
      titleDelay = "<50%";
    }

    childItems.forEach(item => item.style.display = "none");
    childItems[activeIndex].style.display = "flex";
    childItems[nextIndex].style.display = "flex";

    let tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.inOut" } });
    let nextItem = childItems[nextIndex];
    let prevItem = childItems[activeIndex];

    if (forwards) {
      tl.fromTo(nextItem, 
        { clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" }, 
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, -30% 100%)" });
      tl.fromTo(prevItem, 
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }, 
        { clipPath: "polygon(0% 0%, 0% 0%, -30% 100%, 0% 100%)" }, "<");
    } else {
      tl.fromTo(nextItem, 
        { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" }, 
        { clipPath: "polygon(0% 0%, 100% 0%, 130% 100%, 0% 100%)" });
      tl.fromTo(prevItem, 
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }, 
        { clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 130% 100%)" }, "<");
    }

    // Animate characters inside slider_cms_title
    let chars = nextItem.querySelectorAll(".slider_cms_title .char");
    gsap.fromTo(chars, { yPercent: titleFrom }, { yPercent: 0, stagger: 0.08 });

    activeIndex = nextIndex;
  }

  // ARROWS navigation
  function goNext(num) {
    let nextIndex = num;
    if (nextIndex > totalSlides - 1) nextIndex = 0;
    moveSlide(nextIndex, true);
  }

//   buttonWrap(arrow => {
//     if (arrow.classList.contains("is-next")) {
//       arrow.addEventListener("click", () => {
//         goNext(activeIndex + 1);
//       });
//     }
//     if (arrow.classList.contains("is-prev")) {
//       arrow.addEventListener("click", () => {
//         let nextIndex = activeIndex - 1;
//         if (nextIndex < 0) nextIndex = totalSlides - 1;
//         moveSlide(nextIndex, false);
//       });
//     }
//   });

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