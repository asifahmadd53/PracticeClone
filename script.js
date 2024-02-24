gsap.from("nav .logo h1",{
    x:-200,
    duration:1,
    delay:.3,
    opacity:0
})
gsap.from(" nav ul li",{
    Y: -100,
    duration: 1,
    delay: .5,
    opacity: 0,
    stagger:.4
})

gsap.from(".leftside img", {
    x: -200,
    duration: 1.1,
    delay: .8,
    opacity: 0
})
let rightside = gsap.timeline();

gsap.from(".rightside h1, .rightside p", {
    x: 90,
    duration: 1,
    delay: .2,
    opacity: 0,
    stagger: .2
})

let sidemenu = document.querySelector(".innav")


function openmenu(){
    sidemenu.style.right="0px";
}
function closemenu(){
    sidemenu.style.right="-200px"
}









