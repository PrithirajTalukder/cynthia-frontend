const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function mouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
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

var timeout;

function flatCircle(){
    var xscale = 1;
    var yscale = 1;


    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function(dets){
        
        clearTimeout(timeout);

        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        mouseFollower(xscale, yscale);

        timeout = this.setTimeout(function(){
            document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
        })

    }, 100)

}

mouseFollower();
firstPageAnim();
flatCircle();


document.querySelectorAll(".elem").forEach(function (elem){

    elem.addEventListener("mousemove", function(dets){
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            display: 'block',
            ease: Power1,
            
        });
    });

});

