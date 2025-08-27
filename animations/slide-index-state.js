let generalActiveIndex = 0;
let generalNextIndex = 1;
function updateSlideState(active, next){
generalActiveIndex = active;
generalNextIndex = next;
}
export const GeneralIndex = {
    generalActiveIndex,
    generalNextIndex,
    updateSlideState
}