
export let currentButton = null;
export let nextButton = null;
export let currentButtonText = null;
export let nextButtonText = null;

export const cmsButtonsFunction = function (activeIndex, nextIndex){
currentButton = document.querySelector(`.button.slider[data-attribute=slide-0${activeIndex}]`)
nextButton = document.querySelector(`.button.slider[data-attribute=slide-0${nextIndex}]`)
currentButtonText = currentButton?.querySelector(".button-text") || null;
nextButtonText = nextButton?.querySelector(".button-text") || null;
}

export const buttonsTextAnimation = function (activeIndex,nextIndex){
const tl4 = gsap.timeline({defaults: {duration: 0.8, ease: "power2.inOut"}});
tl4.to(currentButtonText, {
    y: -50,
});
tl4.fromTo(nextButtonText, {
    visibility: "visible",
    y:50
}, {
    y:0
},"<")
}