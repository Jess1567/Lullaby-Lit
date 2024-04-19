//This allows for the queryselector to return the element that matches.
const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");


// A function to click the arrow button to open and close the navagation bar.
toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

// A function to click inside the search button and type information.
searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})


//A function to switch between light mode and dark mode.
modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light";
    }else{
        modeText.innerText = "Dark";
        
    }
});