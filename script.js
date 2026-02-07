const revealBtn = document.getElementById('revealBtn')
const modal = document.getElementById('modal')
const close = document.getElementById('close')
const close2 = document.getElementById('close2')
const modalMessage = document.getElementById('modalMessage')
const greeting = document.getElementById('greeting')
const customizeBtn = document.getElementById('customizeBtn')
const confettiRoot = document.getElementById('confetti')

function showModal(){
  modal.classList.remove('hidden')
  modal.setAttribute('aria-hidden','false')
  launchConfetti()
}
function hideModal(){
  modal.classList.add('hidden')
  modal.setAttribute('aria-hidden','true')
}

revealBtn.addEventListener('click', showModal)
close.addEventListener('click', hideModal)
close2.addEventListener('click', hideModal)

customizeBtn.addEventListener('click', ()=>{
  const name = prompt("Her name (leave blank to keep):")
  const msg = prompt("Personal message to show:", modalMessage.textContent)
  if(name) greeting.textContent = `Happy Rose Day, ${name}!`
  if(msg) modalMessage.textContent = msg
})

function launchConfetti(){
  confettiRoot.innerHTML=''
  const colors = ["#ff6b9a","#ffb3c6","#ffe6f0","#c2185b"]
  for(let i=0;i<80;i++){
    const el = document.createElement('div')
    el.className='confetti'
    el.style.background = colors[Math.floor(Math.random()*colors.length)]
    const left = Math.random()*100
    el.style.left = left + '%'
    el.style.top = (-10 - Math.random()*20) + 'vh'
    el.style.transform = `rotate(${Math.random()*360}deg)`
    const delay = Math.random()*0.6
    const duration = 2 + Math.random()*2
    el.style.animation = `fall ${duration}s ${delay}s linear forwards`
    el.style.width = (6 + Math.random()*10) + 'px'
    el.style.height = (8 + Math.random()*14) + 'px'
    confettiRoot.appendChild(el)
  }
  setTimeout(()=>{ confettiRoot.innerHTML='' }, 4500)
}
