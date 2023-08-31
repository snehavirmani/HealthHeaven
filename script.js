// var btn= document.getElementsByClassName(".navbar");
// var openBtn=document.querySelector(".icons");
// openBtn.addEventListener("click", function(){ btn.style.display="inline";})

var navBar= document.getElementById("nB");
var openbtn= document.querySelector(".openIcon");
openbtn.addEventListener("click", function(){
    navBar.style.height="45vh";
    for(var i=0; i<document.querySelectorAll("#nB p").length; i++){
        document.querySelectorAll("#nB p")[i].style.display="block";
    }
  
})
document.querySelector(".block").addEventListener("mouseover", function(){
    document.querySelector(".block h3").style.display="block";
})
var index=0;
slider();
function slider(){
    var n=document.querySelectorAll(".img");
    for(var i=0; i<n.length; i++){
        n[i].style.display="none";
    }

    index++;
    if(index>n.length){
        index=1;
    }
    n[index-1].style.display="block";
    setTimeout(slider, 2000);
}

document.querySelector(".discussion").addEventListener("click",function(){
    document.querySelector("#askForm").style.display="block";
    document.querySelector(".discussion").style.display="none";
})
// document.querySelector("#submit").addEventListener("click", function(){
//     document.querySelector("#askForm").style.display="none";
//     document.querySelector("#onSubmit").style.display="block";
//     setTimeout(function(){
//         document.querySelector("#onSubmit").style.display="none";
//         document.querySelector(".discussion").style.display="block";
//     }, 5000)
// })


// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 2000); // Change image every 2 seconds
// }