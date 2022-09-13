function OnLoad(){
var cont = 0
 if (cont == 0){
  document.querySelector(".style_sheet").href="projects2.css"
  document.querySelector(".lamp").src="./img/ss.png"
}
}
var count = 0
function OnClick(){
  if (count == 0){
  document.querySelector(".style_sheet").href="projects.css"
  document.querySelector(".lamp").src="./img/lamp.png"
  count = count - 1
  } 
}

function onClickBack(){
  if (count == 1){
  document.querySelector(".style_sheet").href="projects2.css"
 
}
}