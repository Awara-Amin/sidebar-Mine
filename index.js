var barButton = document.querySelector(".fa-bars");
var crossIcon = document.querySelector(".fa-times");
var sidebarPart = document.querySelector(".side");


crossIcon.addEventListener("click", function () {
  console.log("hi");
  document.querySelector(".side").classList.add("hidesidebar");
  console.log(sidebarPart.classList);

})

barButton.addEventListener("click", function () {
  console.log("hi bar");
  console.log(sidebarPart.classList.contains("random"));

  if(sidebarPart.classList.contains("hidesidebar")){
    sidebarPart.classList.remove("hidesidebar");
  }
  else {
    sidebarPart.classList.add("hidesidebar");
   }
  })
