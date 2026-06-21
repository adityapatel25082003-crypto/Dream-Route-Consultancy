document.addEventListener("DOMContentLoaded", function(){

    console.log("Dream Route Consultancy Loaded");

    const links = document.querySelectorAll("nav a");

    links.forEach(link=>{
        link.addEventListener("mouseover",()=>{
            link.style.opacity="0.7";
        });

        link.addEventListener("mouseout",()=>{
            link.style.opacity="1";
        });
    });

});
