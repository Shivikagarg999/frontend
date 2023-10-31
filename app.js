var cur= document.querySelector(".cursor");
var cursorblur= document.querySelector(".cursorblur");
document.addEventListener("mousemove",function(dets){
    cur.style.top= dets.y + "px",
    cur.style.left= dets.x +30+ "px",
    cursorblur.style.top= dets.y -150 + "px",
    cursorblur.style.left= dets.x -150 + "px"
})
gsap.to(".nav",{
    backgroundColor: "black",
    duration: 0.5,
    height: "130px",
    scrollTrigger: {
        trigger: ".nav",
        scroller:"body",
        start: "top -10%",
        scrub:2
    }
})
gsap.to(".page1, .page2",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: ".main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})
var h4all= document.querySelectorAll(".nav h4");
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cur.style.scale= 3,
        cur.style.border= "1px solid #fff",
        cur.style.backgroundColor= "transaparent",
        cursorblur.style.opacity= 0;
    })
    elem.addEventListener("mouseleave",function(){
        cur.style.scale= 1,
        cur.style.border= "0px solid ##bfed40",
        cur.style.backgroundColor= "#bfed40",
        cursorblur.style.opacity= 1;
    })
})

var cards= document.querySelectorAll(".cards .card");
cards.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cur.style.scale= 3,
        cur.style.border= "1px solid #fff",
        cur.style.backgroundColor= "transaparent",
        cursorblur.style.opacity= 0;
    })
    elem.addEventListener("mouseleave",function(){
        cur.style.scale= 1,
        cur.style.border= "0px solid ##bfed40",
        cur.style.backgroundColor= "#bfed40",
        cursorblur.style.opacity= 1;
    })
})

var elems= document.querySelectorAll(".page4 .elem");
elems.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        cur.style.scale= 3,
        cur.style.border= "1px solid #fff",
        cur.style.backgroundColor= "transaparent",
        cursorblur.style.opacity= 0;
    })
    elem.addEventListener("mouseleave",function(){
        cur.style.scale= 1,
        cur.style.border= "0px solid ##bfed40",
        cur.style.backgroundColor= "#bfed40",
        cursorblur.style.opacity= 1;
    })
})

gsap.from(".aboutus img, .abouttext",{
    y: 90,
    x:20,
    opacity: 0,
    duration:3,
    stagger:2,
    scrollTrigger:{
        trigger: ".aboutus",
        scroller: "body",
        start: "top 70%",
        end: "top 55%",
        scrub:1
    }
})
gsap.from(".leftim",{
    y: 70,
    x:-70,
    duration:3,
    scrollTrigger:{
        trigger: ".leftim",
        scroller: "body",
        start: "top 70%",
        end: "top 45%",
        scrub:1
    }
})

gsap.from(".rightim",{
    y: 70,
    x:-70,
    duration:3,
    scrollTrigger:{
        trigger: ".leftim",
        scroller: "body",
        start: "top 70%",
        end: "top 45%",
        scrub:1
    }
})

gsap.from(".page4 h1",{
    y:50,
    scrollTrigger:{
        trigger: ".page4 h1",
        scroller: "body",
        start: "top 70%",
        end: "top 45%",
        scrub:4
    }
})