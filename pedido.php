<?php 

$nome = $_GET['nome'];
$tel = $_GET['tel'];
$cepEnd = $_GET['cepEnd'];
$end = $_GET['end'];
$numeroEnd = $_GET['numeroEnd'];
$compEnd = $_GET['compEnd'];

$final = "$end - $compEnd";
echo $final;

/*aqui poderia utilizar um código para salvar as informações no banco de dados*/