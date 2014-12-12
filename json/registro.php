<?php
header('Content-Type: application/json');
/*  $nombre = $_POST['nombre'];
  $correo = $_POST['correo'];
  $cedula = $_POST['cedula'];
  $patas = isset($_POST['patas']);
  $ruedas = isset($_POST['ruedas']);
  */

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$nombre = $request->nombre;
$correo = $request->correo;
$cedula = $request->cedula;
$patas = isset($request->patas);
$ruedas = isset($request->ruedas);
$categorias = '';

if ($patas) {
  if($categorias == '')
    $categorias = 'Robots con patas';
  else
    $categorias .= ', Robots con patas';
}

if ($ruedas) {
  if($categorias == '')
    $categorias = 'Robots con ruedas';
  else
    $categorias .= ', Robots con ruedas';
}

$body = "Nombre: $nombre\n";
$body .= "Cédula: $cedula\n";
$body .= "Correo: $correo\n";
$body .= "Categorías: $categorias";

mail('moises_1_2_3@hotmail.com, naderst@hotmail.com', 'Registro Paper Bots', $body);

echo json_encode(array('success' => true));

?>