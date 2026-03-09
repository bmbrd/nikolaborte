tl = gsap.timeline();

tl.to(".logo", {opacity:1, duration:0.5})

.to(".coffee", {
opacity:1,
y:-20,
duration:0.8
})

.to(".headline", {
opacity:1,
y:-10,
duration:0.5
})

.to(".subtext", {
opacity:1,
duration:0.5
})

.to(".cta", {
opacity:1,
scale:1.1,
duration:0.4
})

.to(".cta", {
scale:1,
duration:0.3
})