
var img1=document.getElementById("img1");
var img2=document.getElementById("img2");
var img3=document.getElementById("img3");

var popup1=document.getElementById("popup1");
var cls1=document.getElementById("close1");

var popup2=document.getElementById("popup2");
var cls2=document.getElementById("close2");

var popup3=document.getElementById("popup3");
var cls3=document.getElementById("close3");

//first image
img1.addEventListener("click",function(){
    popup1.style.display="block";
})

cls1.addEventListener("click",function(){
    popup1.style.display="none";
})

//second image
img2.addEventListener("click",function(){
    popup2.style.display="block";
})

cls2.addEventListener("click",function(){
    popup2.style.display="none";
})


//third image
img3.addEventListener("click",function(){
    popup3.style.display="block";
})

cls3.addEventListener("click",function(){
    popup3.style.display="none";
})
