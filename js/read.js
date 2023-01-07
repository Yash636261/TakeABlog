var element= document.getElementsByClassName("btn post-btn");
for(var i=0;i<element.length;i++)
{
   element[i].addEventListener("click", myFunction);
}

  
function myFunction(e)
{
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText =  e.target;
    
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  
}