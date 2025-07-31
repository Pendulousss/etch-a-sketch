    let container = document.querySelector("#container");
    let ndivs = 16;
    let sketchtoggle = false;
    container.addEventListener("dblclick",(e)=>{
        if (sketchtoggle===false){sketchtoggle=true;}
        else if (sketchtoggle===true){sketchtoggle=false;}
    })

function canvasmaker(ndivs){

        for (let i=0;i<ndivs*ndivs;i++){

            let ndiv = document.createElement("div");
            container.appendChild(ndiv);

            
    }

let divs = container.querySelectorAll("div");
            let divsarr = Array.from(divs);
            divsarr.forEach((div)=>{div.style.flexBasis = `calc(100%/${ndivs})`
                                    div.style.height = `calc(100%/${ndivs})`;
                                    div.addEventListener(("mouseenter"),()=>{
                                        if (sketchtoggle){
                                    div.style.backgroundColor=randomcolor();
                                                             }});
                                                            });
                                                        }

                                                    
const btn = document.querySelector("#btn");
btn.addEventListener("click",()=>{
    ndivs = (prompt("Enter a number between 16 to 100"));
    if(ndivs>100){ndivs=prompt("INVALID INPUT \nEnter a number between 16 to 100")
    container.replaceChildren();
    canvasmaker(ndivs);
    }
    else{
    container.replaceChildren();
    canvasmaker(ndivs);
    }
})

let clear=document.querySelector("#clear");
clear.addEventListener("click",()=>{container.replaceChildren();canvasmaker(ndivs)})

function randomcolor(){
    let r = Math.floor(Math.random()*255)
    let g = Math.floor(Math.random()*255)
    let b = Math.floor(Math.random()*255)
    return `rgb(${r},${g},${b})`
}


canvasmaker(ndivs);