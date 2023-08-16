<?php

// inlcuye el contenido de database.php
require_once('database.php');

class Pais
{
    private $db;
    private $con;

    function __construct()
    {
        $this->db = new Database();
        $this->con = $this->db->getConnection();

        //GET, post, put, delete, options, patch....
        switch ($_SERVER["REQUEST_METHOD"]) {
            case "GET":
                if (isset($_GET['codigo'])) {
                    //funcion que me devuelve un pais
                    echo $this->getPaisByCode($_GET['codigo']);
                    return;
                }
                echo $this->getPaises();
                break;
            case "POST":
                echo $this->createPais($_POST);
                break;
            case "PUT":
                echo $this->updatePais();
                break;
            case "DELETE":
                echo $this->deletePais();
                break;
            default:
                echo $this->db->response(false, null, "Metodo no soportado", 400);
                break;

        }

    }

    function getPaises()
    {
        try {
            //instrucciones para obtener los paises
            $query = "SELECT * FROM Country";

            //preparar la consulta
            $stmt = $this->con->prepare($query);
            //la ejecución de la consulta
            $stmt->execute();

            //hacer un fetch de los datos
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

            //prerar la respuesta para el cliente
            return $this->db->response(true, $result, "Listado de paises");
        } catch (PDOException $e) {
            return $this->db->response(false, null, $e->getMessage(), 500);
        }

    }

    function getPaisByCode(string $code)
    {
        try {
            //instrucciones para obtener los paises
            $query = "SELECT * FROM Country Where Code = :code";

            //preparar la consulta
            $stmt = $this->con->prepare($query);

            //asignar los parametros
            $stmt->bindParam("code", $code);

            //la ejecución de la consulta
            $stmt->execute();

            //hacer un fetch de los datos
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

            //prerar la respuesta para el cliente
            return $this->db->response(true, $result, "Listado de paises");
        } catch (PDOException $e) {
            return $this->db->response(false, null, $e->getMessage(), 500);
        }

    }

    function createPais($infoPais)
    {
        //validaciones correspondientes
        //code: debe ser de 3 letras

        $query = "INSERT INTO country (Code, Name, Continent, Region, SurfaceArea, IndepYear, Population, LifeExpectancy, GNP, GNPOld, LocalName, GovernmentForm, HeadOfState, Capital, Code2) 
        VALUES (:Code, :Name, :Continent, :Region, :SurfaceArea, :IndepYear, :Population, :LifeExpectancy, :GNP, :GNPOld, :LocalName, :GovernmentForm, :HeadOfState, :Capital, :Code2);";

        $stmt = $this->con->prepare($query);
        $stmt->bindParam(":Code", $infoPais["Code"]);
        return $this->db->response(false, null, "Pais agregado", 201);

    }

    function updatePais()
    {
        //instrucciones para actualizar un pais

        return $this->db->response(false, null, "Pais actualizado", 200);
    }

    function deletePais()
    {
        //instrucciones para eliminar un pais
        return $this->db->response(false, null, "Pais eliminado", 200);

    }
}
