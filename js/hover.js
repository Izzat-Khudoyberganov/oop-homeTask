const headerContent = document.querySelector('.header__content');

headerContent.addEventListener('mousemove', (e)=>{
  let horizontal = e.pageX
  let vertical = e.pageY
  horizontal = rand(500, 0)
  vertical = rand(500, 0)
  headerContent.style.marginTop = `${horizontal}px`
  headerContent.style.marginLeft = `${vertical}px`
  headerContent.style.position = "absolute"
  headerContent.style.zIndex = '10'
})

function rand(max, min){
  return Math.floor(Math.random() * (max - min) + min)
}

