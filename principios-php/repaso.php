<?php
header("Content-type: application/json");

function suma(?int $a, ?int $b = 1): int|string
{
    return "la suma es: " . $a + $b;
}

echo suma(null);

class Heroe
{
    public string $nombre;
    public int $vida;
    public int $ataque;
    public int $defensa;

    public function __construct(string $nombre, int $vida, int $ataque, int $defensa)
    {
        $this->nombre = $nombre;
        $this->vida = $vida;
        $this->ataque = $ataque;
        $this->defensa = $defensa;
    }

    public function atacar(Heroe $heroe): void
    {
        $heroe->vida -= $this->ataque - $heroe->defensa;
    }
}

$heroe1 = new Heroe("Heroe 1", 100, 10, 5);
$heroe2 = new Heroe("Heroe 2", 100, 10, 5);

$heroe1->atacar($heroe2);

class Conexion
{
    const HOST = 'localhost:8889';
    const USER = 'root';
    const PASS = 'root';
    const DB = 'world';

    private $con;

    public function __construct()
    {
        try {
            $this->con = new PDO("mysql:host=" . self::HOST . ";dbname=" . self::DB, self::USER, self::PASS);
            $this->con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            header("http/1.1 500 internal server error");
           die($e->getMessage());
        }

    }

    function getCon(): PDO
    {
        return $this->con;
    }

}

$conexion = new Conexion();
$conexion->getCon()->prepare("SELECT * FROM country")->execute();