const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function mouseFollower() {
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
    })
}

mouseFollower();


///var crsr =  document.querySelector("#minicircle")
//document.addEventListener("mousemove", function (dets){
    crsr.style.left = dets.x+30+ "px"
    crsr.style.top = dets.y+"px"
    crsrb.style.left = dets.x - 150 + "px"
    crsrb.style.top = dets.y - 150 + "px"
//})