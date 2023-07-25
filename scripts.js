// I will use nested for loops, 1 to loop for all 16 rows, and for each column, 
// I will create 16 divs
// each row, I need to add a style that sizes the divs(perhas percentage based? height = width)
//, and I need a container for each row, to use flexbox to align the divs along the horizontal axis
// with no top or bottom margin between these containers, a grid should be created.
SetGrid(16); //to initialize?
function SetGrid(gridSize){
    //first delete previous grid elements?
    const gridContainer=document.querySelector(".gridContainer");
    while (gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }
    for(let i=0;i!=gridSize;i++){
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
    // set up a "hover" effect to change div color when mouse passes over them.
    // do so by changing divs background color using js.
    // I will use onmouseenter event -> this does not bubble (opposed to onmouseover)
    const gridDivs = document.querySelectorAll(".gridElement");
    gridDivs.forEach((div)=>{
        div.addEventListener("mouseover",()=>{ //I tried onmouesenter and onmouseover, but both did NOT work -> using mouseover now
            div.style.backgroundColor="grey";
        })
})
}

document.querySelector(".gridSize").addEventListener('click',()=>{
    let gridSize = prompt("Please enter grid size:",16); //default size 16?
    if(gridSize>100){ //if user wants a grid larger than 100x100 -> size will be 100.
        gridSize =100; 
    }
    if(gridSize >0 && gridSize <101){
        SetGrid(gridSize);
    }else{
        alert("Please enter a valid grid size.");
    }
})