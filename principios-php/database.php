<?php

/**
 * LISTA DE CODIGOS
 * 
 * ? 100 - 199: Son codigos de información/informativos
 * * 200 - 299: Son codigos de exito
 * ? 300 - 399: Son codigos de redirecció
 * TODO 400 - 499: Son codigos de error del cliente
 * ! 500 - 599: Son codigos de error del servidor
 * 
 */

class Database
{
    private $host = "localhost:8889";
    private $db_name = "world";
    private $user = "root";
    private $password = "root";

    public $connection;

    function __construct()
    {
        try {
            $this->connection = new PDO(
                "mysql:host=$this->host;dbname=$this->db_name",
                $this->user,
                $this->password
            );

            //habilita el modo de errores y arroja excepciones
            $this->connection->setAttribute(
                PDO::ATTR_ERRMODE,
                PDO::ERRMODE_EXCEPTION
            );

            echo "conexión exitosa";

        } catch (PDOException $exception) {
            header("HTTP/1.1 500 Internal Server Error");
            die("Connection error: " . $exception->getMessage());
        }

    }

    function __destruct()
    {
        //destruir la conexión
        $this->connection = null;
    }

} // fin de la clase de conexión

$db = new Database();