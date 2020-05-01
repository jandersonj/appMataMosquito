
var altura =  0
var largura = 0
var vidas = 1
var tempo = 17
var criaMosquitoTempo = 1500
 
 var nivel = window.location.search
 nivel =  nivel.replace('?', '')


// criação da dificuldade do jogo



 if (nivel === 'donzelo') {
 	//tempo
 	 criaMosquitoTempo = 1500

 } else if (nivel === 'prodigio') {
    criaMosquitoTempo = 1000

 } else if (nivel === 'chucknorris') {
 	criaMosquitoTempo = 880

 }




function ajustaTamanhoTela () {
   altura =  window.innerHeight
   largura = window.innerWidth

   console.log(altura, largura)
}

   ajustaTamanhoTela()

    var cronometro = setInterval(function(){
    	tempo = tempo - 1
    	if (tempo < 0) {
    		clearInterval(cronometro)
    		window.location.href = "vitoria.html"
    	} else {
    		document.getElementById('cronos').innerHTML = tempo
    	}	
    	
          },1000)
    	


  function posicaoRandomica () {

  	//remover mosquito anterior caso exista
  	if (document.getElementById('mosquito')) {
  	  document.getElementById('mosquito').remove()
  	  if (vidas > 4) {
         window.location.href='fim.html'
  	  }else {
  	  	  document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
  	     vidas++
  	  } 
  	 
  	} 

  
var positionX = Math.floor(Math.random() * largura) - 90
var positionY = Math.floor(Math.random() * altura) - 90
   //controle para que não acerte a posicão zero 
    positionX = positionX < 0 ? 0 : positionX
    positionY = positionY < 0 ? 0 : positionY

  console.log(positionX, positionY)


  //criar elemento html para manipular
  
    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = positionX +'px'
    mosquito.style.top = positionY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
     //  if (document.getElementById('mosquito')) {
  	  // document.getElementById('mosquito').remove()
  	  // } um dos métodos para fazer remover o mosquito quando se clical <---
      
  	  this.remove()
    }
    
//incluir a img dentro do body da pagina
   
   document.body.appendChild(mosquito)
}

function tamanhoAleatorio () {
	var classe =  Math.floor(Math.random() * 3)
	 switch (classe) {
	 	case 0:
	 	   return 'mosquito1'
	 	case 1:
	 	   return 'mosquito2'
	 	case 2:
	 	  return 'mosquito3' 
	 }
}
   
function ladoAleatorio () {
	var classe =  Math.floor(Math.random() * 2)
	 switch (classe) {
	 	case 0:
	 	   return 'ladoA'
	 	case 1:
	 	   return 'ladoB'
 
	 }

}

