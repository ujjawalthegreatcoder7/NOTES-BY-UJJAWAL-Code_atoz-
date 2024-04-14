const notescontainer = document.querySelector(".notescontainer") ;
const button = document.querySelector(".buttonn") ;
const del = document.querySelector(".delete")
let notes = document.querySelectorAll(".inputbox")

let flag = true ;

function showNotes() {
    notescontainer.innerHTML = localStorage.getItem("notes") ;
}
showNotes();
function  updatestorage() {
    localStorage.setItem("notes" , notescontainer.innerHTML) ;
} 



button.addEventListener("click" , ()=> {

let inputbox = document.createElement("p") ;
let img = document.createElement("img") ;

inputbox.className = "inputbox" ;
inputbox.setAttribute("contenteditable" , "true") ;

img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPY9p0pySUEFP_Dqa1tOwE6wSs84q3VsO6WQ&s";
img.style.height= "40px" ;
img.style.bottom = "0px" ;
img.style.position= "absolute" ;
img.style.right= "15px" ;

notescontainer.appendChild(inputbox).appendChild(img) ;


})


notescontainer.addEventListener("click" , function(e) {
  
    if ( e.target.tagName === "IMG" ) {
        e.target.parentElement.remove() ;
        console.log(e.target) ;
        console.log(e.target.tagName) ;

        updatestorage() 


    }

    else if (e.target.tagName === "P" ) {
        notes = document.querySelectorAll(".inputbox") ;

        notes.forEach(nt => {
         nt.onkeyup = function() {
            updatestorage() ;


         }   
        } )
    }

})















