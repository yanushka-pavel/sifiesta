let generalActiveIndex = 0;
let generalNextIndex = 1;
function updateSlideState(active, next){
generalActiveIndex = active;
generalNextIndex = next;
}
export const GeneralIndex = {
    get generalActiveIndex(){
        return generalActiveIndex;
    },
    get generalNextIndex(){
        return generalNextIndex;
    },
    updateSlideState
}