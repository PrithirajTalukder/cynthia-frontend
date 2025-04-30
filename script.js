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


function flatCircle(){
    var xscale = 1;
    var yscale = 1;


    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function(dets){

        var xdiff = dets.clientX - xprev;
        var ydiff = dets.clientY - yprev;

        xprev = dets.clientX;
        yprev = dets.clientY;

        console.log(xdiff, ydiff);
    })

}

mouseFollower();
firstPageAnim();
flatCircle();


