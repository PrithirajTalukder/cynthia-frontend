const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function mouseFollower() {
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}

function firstPageAnim(){
    var tl = gsap.timeline();

    tl.from("#nav", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })

    tl.to(".boundinlem", {
        y: '0',
        stagger: .2,
        duration: 1.5,
        ease: Expo.easeInOut,
        delay: -1,
    })

    tl.from("#herofooter", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })
}

mouseFollower();
firstPageAnim();


///var crsr =  document.querySelector("#minicircle")
//document.addEventListener("mousemove", function (dets){
    crsr.style.left = dets.x+30+ "px"
    crsr.style.top = dets.y+"px"
    crsrb.style.left = dets.x - 150 + "px"
    crsrb.style.top = dets.y - 150 + "px"
//})