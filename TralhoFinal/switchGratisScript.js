function form(){
    formulario.innerHTML = '<div class="form"><form action="" method="post"><fieldset><legend>cadastro para o golp... entrega do Switch2</legend><br><div class="campos"><label for="CPF">CPF: </label><br><input type="text"></div><br><div class="campos"><label for="numeroDoCartão">Catão frente e verso:</label><br><input type="text"></div><br><div class="campos"><label for="nomeDoPai">Nome do pai e da mãe:</label><br><input type="text"></div><br><div class="campos"><label for="endereço">endereço:</label><br><input type="text"></div><br><input type="submit" onclick=noForm() class="button" value="enviar"></fieldset></form></div>';
} 

function noForm(){
    formulario.innerHTML = '';
    formulario2.innerHTML = '<div class="formularioMSG"><h2>Dados roubados com sucesso.</h2><input type="button" onclick=noForm2() value="Proximo" class="button"></div>';
}

function noForm2(){
    formulario2.innerHTML = '';
    otaro.innerHTML = 'Sem volta, paizão'
}