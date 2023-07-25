// I will use nested for loops, 1 to loop for all 16 rows, and for each column, 
// I will create 16 divs
// each row, I need to add a style that sizes the divs(perhas percentage based? height = width)
//, and I need a container for each row, to use flexbox to align the divs along the horizontal axis
// with no top or bottom margin between these containers, a grid should be created.
const gridSize = 16; 
for(let i=0;i!=gridSize;i++){
    const gridContainer=document.querySelector(".gridContainer");
    const divRow= document.createElement("div");
    divRow.classList.add("rowContainer"); //to be styled as the container of flexbox items for each row
    gridContainer.appendChild(divRow) ;


    for(let i=0;i!=gridSize;i++){
        const divGridElement =document.createElement("div");
        divGridElement.classList.add("gridElement");
        divGridElement.style.width=960/gridSize +"px";
        divGridElement.style.height=960/gridSize +"px";
        divRow.appendChild(divGridElement);
    }
}

