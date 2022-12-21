function rangeSlide(id, value) {
  document.getElementById(id).innerHTML = value;
}

function validar(){
  var validado = false;

  var tamanho = document.getElementsByName("item1");
  for (i = 0; i < tamanho.length; i++){
    if (tamanho[i].checked){
      validado = true;
    }
  }
  if (!validado){
    alert("Item Tamanho não selecionado");
  }

  var peso = document.getElementsByName("item2");
  for (i = 0; i < peso.length; i++){
    if (peso[i].checked){
      validado = true;
    }
  }
  if (!validado){
    alert("Item Peso não selecionado");
  }

  var tela = document.getElementsByName("item3");
  for (i = 0; i < tela.length; i++){
    if (tela[i].checked){
      validado = true;
    }
  }
  if (!validado){
    alert("Item Tamanho de Tela não selecionado");
  }

  var bateria = document.getElementsByName("item4");
  for (i = 0; i < bateria.length; i++){
    if (bateria[i].checked){
      validado = true;
    }
  }
  if (!validado){
    alert("Item Bateria não selecionado");
  }

  var armazenamento = document.getElementsByName("item5");
  for (i = 0; i < armazenamento.length; i++){
    if (armazenamento[i].checked){
      validado = true;
    }
  }
  if (!validado){
    alert("Item Armazenamento não selecionado");
  }

  var imagem = document.getElementsByName("item6");
  for (i = 0; i < imagem.length; i++){
    if (imagem[i].checked){
      validado = true;
    }
  }
  if (!validado){
    alert("Item Imagem não selecionado");
  }

  var teclado = document.getElementsByName("item7");
  for (i = 0; i < teclado.length; i++){
    if (teclado[i].checked){
      validado = true;
    }
  }
  if (!validado){
    alert("Item Teclado não selecionado");
  }

  var mouse = document.getElementsByName("item8");
  for (i = 0; i < mouse.length; i++){
    if (mouse[i].checked){
      validado = true;
    }
  }
  if (!validado){
    alert("Item Mouse não selecionado");
  }

  var audio = document.getElementsByName("item9");
  for (i = 0; i < audio.length; i++){
    if (audio[i].checked){
      validado = true;
    }
  }
  if (!validado){
    alert("Item Audio não selecionado");
  }

  var check = document.getElementsByName("item10");
  for (i = 0; i < check.length; i++){
    if (check[i].checked){
      validado = true;
    }
  }
  if (!validado){
    alert("Selecione pelo menos um item");
  }
} 

function limpar() {
  document.getElementById("formulario").reset();
  document.getElementById("rangeValue1").innerHTML = 0;
  document.getElementById("rangeValue2").innerHTML = 0;
  document.getElementById("rangeValue3").innerHTML = 0;
  document.getElementById("rangeValue4").innerHTML = 0;
}