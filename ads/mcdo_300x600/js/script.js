tl = gsap.timeline({
  repeat: 0,
  repeatDelay: 3
})

tl.from(".logo", {
    duration:0.6,
    y:-40,
    opacity:0
})

.from(".burger",{
    duration:0.8,
    scale:0.6,
    opacity:0,
    ease:"back.out(1.7)"
})

.from(".subtitle",{
    duration:0.6,
    y:20,
    opacity:0
})

.from(".headline",{
    duration:0.8,
    y:40,
    opacity:0
})

.from(".cta",{
    duration:0.6,
    scale:0,
    ease:"back.out(2)"
})