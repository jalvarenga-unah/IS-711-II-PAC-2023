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
    public function getNombre(): string
    {
        return $this->nombre;
    }

} // finaliza la clase "Heroe"

$heroe = new Heroe("Batman", "Dinero");

// $heroe = null;

echo $heroe->getNombre();
// $heroe->nombre = 'Batman';
// $heroe->poder = 'Dinero';