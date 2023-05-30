var btn = document.getElementsByClassName("btn");
        
var slide = document.getElementById("slide");

//define media query
const mediaQuery = window.matchMedia("(max-width: 768px)");
const mediaQuery2 = window.matchMedia("(max-width: 950px)");

//add a listener to respod to changes in media query
function handleMediaQueryChange(event){
    if(event.matches){
        //if the viewport is narrower than 768px
        btn[0].onclick = function (){
            slide.style.transform = "translateX(0px)";
            for(i=0; i<4; i++){
                btn[i].classList.remove("active");
            }
            this.classList.add("active");
        }
        btn[1].onclick = function (){
            slide.style.transform = "translateX(-500px)";
            for(i=0; i<4; i++){
                btn[i].classList.remove("active");
            }
            this.classList.add("active");
        }
        btn[2].onclick = function (){
            slide.style.transform = "translateX(-1000px)";
            for(i=0; i<4; i++){
                btn[i].classList.remove("active");
            }
            this.classList.add("active");
        }
        btn[3].onclick = function (){
            slide.style.transform = "translateX(-1500px)";
            for(i=0; i<4; i++){
                btn[i].classList.remove("active");
            }
            this.classList.add("active");
        }

        
        var image = document.getElementsByClassName("My-img");
        image.classList.add("removed");
    
    }else if(event.media === mediaQuery2.media){
        //the viewport is wider than  768px
        btn[0].onclick = function (){
            slide.style.transform = "translateX(0px)";
            for(i=0; i<4; i++){
                btn[i].classList.remove("active");
            }
            this.classList.add("active");
        }
        btn[1].onclick = function (){
            slide.style.transform = "translateX(-600px)";
            for(i=0; i<4; i++){
                btn[i].classList.remove("active");
            }
            this.classList.add("active");
        }
        btn[2].onclick = function (){
            slide.style.transform = "translateX(-1200px)";
            for(i=0; i<4; i++){
                btn[i].classList.remove("active");
            }
            this.classList.add("active");
        }
        btn[3].onclick = function (){
            slide.style.transform = "translateX(-1800px)";
            for(i=0; i<4; i++){
                btn[i].classList.remove("active");
            }
            this.classList.add("active");
        }
    }else{
        //the view port is wider than 950px
        btn[0].onclick = function (){
            slide.style.transform = "translateX(0px)";
            for(i=0; i<4; i++){
                btn[i].classList.remove("active");
            }
            this.classList.add("active");
        }
        btn[1].onclick = function (){
            slide.style.transform = "translateX(-800px)";
            for(i=0; i<4; i++){
                btn[i].classList.remove("active");
            }
            this.classList.add("active");
        }
        btn[2].onclick = function (){
            slide.style.transform = "translateX(-1600px)";
            for(i=0; i<4; i++){
                btn[i].classList.remove("active");
            }
            this.classList.add("active");
        }
        btn[3].onclick = function (){
            slide.style.transform = "translateX(-2400px)";
            for(i=0; i<4; i++){
                btn[i].classList.remove("active");
            }
            this.classList.add("active");
        }
    } 
}
//call the listener to initially check the initiall state of the media query
handleMediaQueryChange(mediaQuery);

// Add the listener to respond to changes in the media query
mediaQuery.addEventListener('change', handleMediaQueryChange);