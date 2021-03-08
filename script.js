var display = document.getElementById('display');
var minutos = document.getElementById('minutos');
var segundos = document.getElementById('segundos');
var comecar = document.getElementById('comecar');
var minutoAtual;
var segundoAtual;
var interval;

for (var i = 0; i < 10; i++){
    minutos.innerHTML+= '<option value="'+i+'">0'+i+'</option>';
}

for (var i = 10; i <= 60; i++){
    minutos.innerHTML+='<option value="'+i+'">'+i+'</option>';
}

for (var i = 1; i < 10; i++){
    segundos.innerHTML+='<option value="'+i+'">0'+i+'</option>';
}

for (var i = 10; i <= 60; i++){
    segundos.innerHTML+='<option value="'+i+'">'+i+'</option>';
}

comecar.addEventListener('click',function(){
    minutoAtual = minutos.value;
    segundoAtual = segundos.value;
    
    display.childNodes[1].innerHTML = minutoAtual + ":"+segundoAtual;
    interval = setInterval(function(){
        segundoAtual--;
        if(segundoAtual <= 01){
            if(minutoAtual > 0){
                minutoAtual--;
                segundoAtual = 59;
            }else{
                alert("Fim!");
                document.getElementById("sound").play();
                clearInterval(interval);
            }
        }
        display.childNodes[1].innerHTML = minutoAtual + ":"+segundoAtual;
        if(segundoAtual < 10){
            if(minutoAtual >= 10){
                display.childNodes[1].innerHTML = minutoAtual + ":0"+segundoAtual;
            }else if(segundoAtual < 10 && minutoAtual < 10){
                display.childNodes[1].innerHTML = "0"+minutoAtual + ":0"+segundoAtual;
            }
        }else if(minutoAtual < 10){
            if(segundoAtual >= 10){
                display.childNodes[1].innerHTML ="0"+minutoAtual + ":"+segundoAtual;
            }else if(segundoAtual < 10 && minutoAtual < 10){
                display.childNodes[1].innerHTML = "0"+minutoAtual + ":0"+segundoAtual;
            }
        }
    },1000)

})