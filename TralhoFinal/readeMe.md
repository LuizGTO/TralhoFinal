# observações

- O elemento <table> esta no footer.

- O elemento <form> só aparece após clicas no link "Formulario" no footer.

- O codigo do formulario: 
<div class="form">
            <form action="" method="post">
                <fieldset>
                    <legend>cadastro para o golp... entrega do Switch2</legend>
                    <br>
                    <div class="campos">
                        <label for="CPF">CPF: </label>
                        <br>
                        <input type="text">
                    </div>
                    <br>
                    <div class="campos">
                        <label for="numeroDoCartão">Catão frente e verso:</label>
                        <br>
                        <input type="text">
                    </div>
                    <br>
                    <div class="campos">
                        <label for="nomeDoPai">Nome do pai:</label>
                        <br>
                        <input type="text">
                    </div>
                    <br>
                    <div class="campos">
                        <label for="endereço">endereço:</label>
                        <br>
                        <input type="text">
                    </div>
                    <br>
                    <input type="submit" class="button" value="enviar">
                </fieldset>
            </form>
        </div>

- O codigo seguinte ao formulario:
<div class="formularioMSG">
	<h2>Dados roubados com sucesso.</h2>
	<input type="button" onclick=noForm2() value="Proximo" class="button">
</div>