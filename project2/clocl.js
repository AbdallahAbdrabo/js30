const  arrow_second = document.querySelector(".second-hand");
const  arrow_minute = document.querySelector(".minute-hand");
const  arrow_hour= document.querySelector(".hour-hand");


function rotate(){
    const time =  new Date();
  
    const method = time.getSeconds()
    const elementrotate= (method/60)*360+90;
    
    arrow_second.style.transform = 'rotate(' + elementrotate +'deg)';
    const method2 = time.getMinutes()
    const elementrotate2= (method2/60)*360 + 90;
 
    arrow_minute.style.transform = 'rotate(' + elementrotate2 +'deg)';
    const method3 = time.getHours()
    const elementrotate3= (method3/12)*360 + 90 ;

    arrow_minute.style.transform = 'rotate(' + elementrotate3 +'deg)'
   

}

setInterval(rotate ,1000) 