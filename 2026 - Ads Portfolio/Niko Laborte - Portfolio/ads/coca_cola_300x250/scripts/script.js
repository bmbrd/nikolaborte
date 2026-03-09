var adDiv;


function startAd() {
    adDiv = document.getElementById("ad");
    addEventListeners();
    animate();
}

function addEventListeners() {
    adDiv.addEventListener("click", clickthrough);
}
function animate() {
    var tl = gsap.timeline( {repeat:0, repeatDelay: 2} );

    tl.to(["#frame1","#f1-bg"], 1, {opacity: 1, force3D:true, ease: Power0.easeNone }) 
        .to(["#f1-bg"], 0.5, {opacity: 1, force3D:true, ease: Power0.easeNone })
        .from(["#f1-musicnote"], 0.5, {scale: 0, ease:Bounce.easeOut })
        .from(["#f1-spark"], 0.5, {scale: 0, ease:Bounce.easeOut })
        .from(["#f1-kwave-packshot"], 0.5, {scale: 0, ease:Bounce.easeOut })
        .from(["#f1-heart"], 0.5, {scale: 0, ease:Bounce.easeOut })
        .to(["#f1-kwave-packshot"], 0.03, {rotation: "+=10",yoyo:true, repeat:5,ease:Power0.easeInOut})
        .from(["#f1-led"], 0.3, {opacity: 0,scale:0.25,top:110,left:35,rotation:-180, ease:Power0.easeOut })
        .from(["#f1-kwave"], 1, {opacity: 0, ease: Power0.easeNone })
        .to(["#f1-led"], 0.3, {delay:2,scale:7,opacity: 0, force3D:true, ease: Power0.easeInOut })  
        .to(["#frame2"], 0.2, {delay:-0.2,opacity: 1, force3D:true, ease: Power0.easeInOut }) 
        .from(["#f2-subhead"], 0.5, {delay:0.3,opacity: 0,scale:2, force3D:true, ease: Bounce.easeOut })
        .from(["#f2-header"], 0.5, {opacity: 0,scale:2, force3D:true, ease: Bounce.easeOut })
        .from(["#f2-logos"], 0.5, {opacity: 0, force3D:true, ease: Power0.easeInOut })
        .from(["#f2-packshot"], 0.5, {opacity: 0,top:0, force3D:true, ease: Bounce.easeOut })
        .from(["#f2-cta"], 1, {opacity: 0, force3D:true, ease: Power0.easeInOut });     

}

function clickthrough() {
    window.open(clickTag); 
}

window.addEventListener("load", startAd);
