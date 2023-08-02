<?php // após pegar os dados do compras.js, ele vai fazer as multiplicações sobre os valores e quantidades.

$prod1 = $_GET['prod1'];
$prod2 = $_GET['prod2'];
$prod3 = $_GET['prod3'];

$prod4 = $_GET['prod4'];
$prod5 = $_GET['prod5'];
$prod6 = $_GET['prod6'];

$prod7 = $_GET['prod7'];
$prod8 = $_GET['prod8'];
$prod9 = $_GET['prod9'];

$prod10 = $_GET['prod10'];
$prod11 = $_GET['prod11'];
$prod12 = $_GET['prod12'];

//........................................................................................

$qtde1 = $_GET['qtde1'];
$qtde2 = $_GET['qtde2'];
$qtde3 = $_GET['qtde3'];

$qtde4 = $_GET['qtde4'];
$qtde5 = $_GET['qtde5'];
$qtde6 = $_GET['qtde6'];

$qtde7 = $_GET['qtde7'];
$qtde8 = $_GET['qtde8'];
$qtde9 = $_GET['qtde9'];

$qtde10 = $_GET['qtde10'];
$qtde11 = $_GET['qtde11'];
$qtde12 = $_GET['qtde12'];


$valorfinal = $prod1 * $qtde1 + $prod2 * $qtde2 + $prod3 * $qtde3 + $prod4 * $qtde4 + $prod5 * $qtde5 + $prod6 * $qtde6 + $prod7 * $qtde7 + $prod8 * $qtde8 + $prod9 * $qtde9 + $prod10 * $qtde10 + $prod11 * $qtde11 + $prod12 * $qtde12;
echo $valorfinal; 

/*aqui poderia utilizar um código para salvar as informações no banco de dados*/