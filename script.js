var crsr=document.querySelector("#cursor")    //humare kisi bhi html ke element ko js mai use karne ke kaam aata hai//
//humare kisi bhi html ke element ko js mai use karne ke kaam aata hai//
var crsrblr=document.querySelector("#cursor-blur")  
document.addEventListener("mousemove",function(dets){
    crsr.style.left =dets.x+"px"
    crsr.style.top =dets.y+"px"
    crsrblr.style.left =dets.x-150+"px"
   crsrblr.style.top =dets.y-150+"px"
})
//above was the main thing we do to move cursor//
//mousemove is a property

gsap.to("#nav",{
  
    backgroundColor:"#000", 
    height:"110px",
    duration:1,
    delay:1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub:2  /*when we scroll down the nav bar bg will get black slowly*/
    }
})

gsap.to("#main",{

    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller:"body",
        markers: true ,
        start: "top -25%",
        end : "top -70%",
        scrub:2          //black screen will appear from 50% from the top
    }

})
