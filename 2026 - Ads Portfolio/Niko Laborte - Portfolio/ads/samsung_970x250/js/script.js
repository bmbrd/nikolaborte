const tl = gsap.timeline({repeat:0, repeatDelay:0});

// logo
tl.from(".logo", {
opacity:0,
y:-20,
duration:0.6
})

// headline
.from(".text h1", {
y:40,
opacity:0,
duration:0.8
})

// subtext
.from(".text p", {
y:20,
opacity:0,
duration:0.6
})

// CTA
.from("button", {
scale:0,
duration:0.5,
ease:"back.out(1.7)"
})

// product
.from(".buds", {
x:200,
opacity:0,
duration:1
}, "-=0.5")

// floating motion
.to(".buds", {
y:-10,
repeat:3,
yoyo:true,
duration:0.6
});