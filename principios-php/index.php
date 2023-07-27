<?php
$nombre = 'Juan';
$edad = 29;

// echo 'Hola, me llamo '.$nombre." tengo ".$edad." años";
// echo "Hola, me llamo {$nombre} tengo {$edad} años";
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
    <!-- <h3>Hola, me llamo <?php echo $nombre ?> tengo <?php echo $edad?> años</h3> -->
    <!-- <h3>Hola, me llamo <?=$nombre ?> tengo <?=$edad?> años</h3> -->
    <!-- <h3>Hola, me llamo <?=$nombre ?> tengo <?=$edad?> años</h3> -->
    <?php echo "<h3>Hola, me llamo {$nombre} tengo {$edad} años</h3>";?>
</body>
</html>