<?php
// convierte el modo estricto en obligatorio
declare(strict_types=1);

class Heroe
{
    // Propiedades
    private string $nombre;
    private $poder;

    //constructor
    function __construct($nombre, $poder)
    {
        //  $nombre = $p1;// es una variable comun y silvestre y solo existe dentro del constructor
        $this->nombre = $nombre; // es la propiedad nombre de la clase
        $this->poder = $poder;
    }

    // function __destruct()
    // {
    //     echo "El heroe {$this->nombre} ha muerto";
    // }

    // Metodos
    public function getNombre(): string|int
    {
        return 12;
    }

    public function setNombre(string $nombre): void
    {
        $this->nombre = $nombre;
    }

    public function getInfo(): string
    {
        return "El heroe {$this->nombre} tiene el poder '{$this->poder}' ";
    }

} // finaliza la clase "Heroe"

// $heroe = null;
// $heroe->nombre = 'Batman';
// $heroe->poder = 'Dinero';

// $heroe = new Heroe("Batman", "Dinero");

// Recibiendo los parametros por GET
// $heroe = new Heroe($_GET["nombre"], $_GET["poder"] ?? 'No tiene poder');

// Recibiendo los parametros por POST
// $heroe = new Heroe($_POST["nombre"], $_POST["poder"] ?? 'No tiene poder');


// Recibiendo los parametros por Raw Json

//creamos una nueva variable, que seria un arreglo asociativo
//con los valores enviados en el JSON
$data = json_decode(file_get_contents('php://input'), true);

$heroe = new Heroe($data['nombre'], $data['poder'] ?? 'No tiene poder');

// var_dump($_GET);

echo $heroe->getInfo();
