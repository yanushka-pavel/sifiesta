const loader = document.querySelector(".loader");
const loaderBG = loader.querySelector(".loader-bg");
const logoName = loader.querySelector(".heading.m");
const loaderText = loader.querySelectorAll(".loader-content-text")

export function pageLoadAnimation(onCompleteCallBack){
    loader.style.visibility = "visible"
    const pageLoadTL = gsap.timeline({defaults: {duration:1,ease: "power1.out"}});
pageLoadTL.fromTo(logoName,{opacity:0, x:"-10%"}, {opacity:1, x:"0%"});
pageLoadTL.fromTo(loaderText,{opacity:0, x:"-10%"}, {opacity:1, x:"0%"}, "0.3");
pageLoadTL.addLabel("fadeStart", "+=0.5")
pageLoadTL.to(logoName, {opacity:0, x:"10%"}, "fadeStart" );
pageLoadTL.to(loaderText, {opacity:0, x:"10%"}, "fadeStart+=0.2" );
pageLoadTL.to(loaderBG,{y:"100%", duration: 1, ease: "power4.inOut", onComplete: ()=> {
    loader.style.visibility = "hidden"
}},"-=0.3"
);

if(onCompleteCallBack){
    pageLoadTL.eventCallback("onComplete", onCompleteCallBack);
}
}

export const Load = {
    loader,
    loaderBG,
    logoName,
    loaderText,
    pageLoadAnimation
}