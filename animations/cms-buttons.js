
export let currentButton = null;
export let nextButton = null;
export let currentButtonText = null;
export let nextButtonText = null;
// export let buttonHoverWrap = null;
// export let buttonHoverEl = null;

export const cmsButtonsFunction = function (activeIndex, nextIndex){
currentButton = document.querySelector(`.button.slider[data-attribute=slide-0${activeIndex}]`)
nextButton = document.querySelector(`.button.slider[data-attribute=slide-0${nextIndex}]`);
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
//button hover trigger

//button hover animation
export function buttonHoverAnimationIn (timeline, button){

const buttonHoverTL = gsap.timeline();
timeline.pause();
buttonHoverTL.fromTo(button.querySelector(".button-hover"), {visibility:"visible",y:"150%", scale:1}, {y:"0%", scale: 10},"<");
buttonHoverTL.to(document.querySelectorAll(".button-text"), {color: "white", duration:0.2}, "<");
}

export function buttonHoverAnimationOut (timeline, button){
const buttonHoverTL = gsap.timeline();
timeline.play();
buttonHoverTL.to(button.querySelector(".button-hover"), {y:"150%", scale: 1});
buttonHoverTL.to(document.querySelectorAll(".button-text"), {color: "black", duration:0.2}, "-=0.3");
}