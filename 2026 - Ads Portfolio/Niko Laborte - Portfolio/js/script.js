// TYPEWRITER EFFECT

const text = "Hi, I'm Niko Laborte!"
const typedText = document.getElementById("typed-text")

let i = 0

function type(){

if(i < text.length){

typedText.innerHTML += text.charAt(i)
i++

setTimeout(type,70)

}

}

type()


// MODAL LOGIC

const thumbs = document.querySelectorAll(".ad-thumb")
const modal = document.getElementById("adModal")
const frame = document.getElementById("adFrame")
const winHeight = window.innerHeight;

thumbs.forEach(thumb=>{

	thumb.addEventListener("click",()=>{

		let width = thumb.dataset.width
		let height = thumb.dataset.height

		if(height > 700){
			width = width - (width * 0.25)
			height = height - (height * 0.25)
		}

		frame.src = thumb.dataset.ad;
		frame.style.width = width+"px"
		frame.style.height = height+"px"

		modal.classList.add("active")

		})
	})

document.querySelector(".close").onclick=()=>{
modal.classList.remove("active")
frame.src=""
}


// HERO ANIMATION

gsap.from(".hero",{
opacity:0,
y:40,
duration:1
})