<?php
header("Content-Type: application/json; charset=UTF-8");
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

    private $connection;

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

    function getConnection()
    {
        return $this->connection;
    }

    function response($ok, $data, $message, $code = 200)
    {
        header("HTTP/1.1 $code");
        return json_encode([
            "ok" => $ok,
            "message" => $message,
            "data" => $data
        ]);
    }

} // fin de la clase de conexión

$db = new Database();
$con = $db->getConnection();

//SELECT

$query = "SELECT * FROM country where Code = :codigo ";
//prepara la consulta SQL
$statement = $con->prepare($query);

// *por defecto es String, pero se puede especificar el tipo de dato
// *enviando como tercer parametro, un tipo desde PDO::PARAM_{TIPO_DATO}
$statement->bindParam("codigo", $_GET["codigo"]);

//ejecuta la consulta SQL
$statement->execute();

//arreglo asociativo del resultado de la consulta
$result = $statement->fetchAll(PDO::FETCH_ASSOC);

echo $db->response(true, $result, "Consulta exitosa");