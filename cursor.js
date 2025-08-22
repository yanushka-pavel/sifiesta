export let buttonElement = document.querySelector(".btn-element");
const speed = 0.1;

// Hover sticky elements
export function setupMouse(buttonWrap, buttonText){

buttonWrap.forEach(wrap => {
    wrap.addEventListener("mouseleave", ()=>{
        if(buttonElement) buttonElement.style.visibility = "hidden";
            target.x = current.x;
            target.y = current.y;
    })
wrap.addEventListener("mousemove", (e)=>{
   //e - to track current mouse position
    if(wrap.classList.contains("is-next")){
        mouseWrapHover(wrap,e,buttonText, "Next")
    }
    else {
        mouseWrapHover(wrap,e,buttonText, "Back")
    };
    
})});

}
 
//mouse hover function
const target = {x:0,y:0};
let current = {x:0,y:0};
 const mouseWrapHover = function (wrap,e,buttonText,content){
        buttonElement.style.visibility = "visible";
        const elementWidth = buttonElement.offsetWidth; //offsetWidth - width of the element with all paddings and margins
        const elementHeight = buttonElement.offsetHeight;    
        // const rect = wrap.getBoundingClientRect();
        target.x = e.clientX - elementWidth/2;
        target.y = e.clientY - elementHeight/2;
        if(buttonText.textContent !== content){
            buttonText.textContent = content;
        }
        
    }

    function animate(){
        current.x += (target.x - current.x)* speed;
        current.y += (target.y - current.y)* speed;
        buttonElement.style.left = current.x + "px";
        buttonElement.style.top = current.y + "px";
        requestAnimationFrame(animate);
        }
        animate();

    // //we also need to get the whole size of each wrapper
        // const wrapperWidth = rect.width;
        // const wrapperHeight = rect.height;
        // /*we need to compare if our value is greater than 0 and less than 1
        // 1>num>0
        // Math.max(num,0) - num>0?
        // Math.min(num,1) - num<1?
        // and get either our number if its insie the approved values, or max if the mouse goes to far right, or min if it overflows left wrapper
        // */
        // const clamp = (num,min,max) => Math.min(Math.max(num, min), max);
        // //now we want to have a scale from 0 to 1, not pixels sizes
        // const scaleLineX = clamp(targetX / wrapperWidth, 0,1);
        // const scaleLineY = clamp(targetY / wrapperHeight, 0,1);