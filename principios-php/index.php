<?php

$nombre = 'Juan';
$edad = 29;
// echo 'Hola, me llamo '.$nombre." tengo ".$edad." años";
// echo "Hola, me llamo {$nombre} tengo {$edad} años";

$dataToSave = '{"nombre": "Juan", "edad": "29"}';

$nombres = ['Juan', 'Pedro', 'Luis'];

$persona = ['nombre' => 'Juan', 'edad' => 29]; // Array asociativo

$personaCodificada = json_encode($persona); // convierte el arreglo a String

print_r($nombres[0] . "<br>");
print_r($persona["edad"] . "<br>");

//json_decode: convierte un String a un arreglo asociativo/objeto json
//si es un arreglo asociativo se debe pasar un true como segundo parametro
print_r(json_decode($dataToSave, true)['nombre'] . "<br>");
print_r(json_decode($dataToSave)->edad . "<br>");


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
</head>

<body>
    <h1>Hola desde php</h1>
    <!-- <h3>Hola, me llamo <?php echo $nombre ?> tengo <?php echo $edad ?> años</h3> -->
    <!-- <h3>Hola, me llamo <?= $nombre ?> tengo <?= $edad ?> años</h3> -->
    <!-- <h3>Hola, me llamo <?= $nombre ?> tengo <?= $edad ?> años</h3> -->
    <?php echo "<h3>Hola, me llamo {$nombre} tengo {$edad} años</h3>"; ?>
</body>

</html>