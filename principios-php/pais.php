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
                    echo $this->db->response(true, $_GET, "info de un pais");
                    return;
                }

                echo $this->getPaises();
                break;
            case "POST":
                $this->createPais($_POST);
                break;
            case "PUT":
                $this->updatePais();
                break;
            case "DELETE":
                $this->deletePais();
                break;
            default:
                echo $this->db->response(false, null, "Metodo no soportado", 400);
                break;

        }

    }

    function getPaises()
    {
        try {
            $query = "SELECT *FROM Country";
            $stmt = $this->con->prepare($query);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
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

    }

    function updatePais()
    {

    }

    function deletePais()
    {

    }
}

$pais = new Pais();

//detectar el metodo y llamar la funcion correspondiente
// echo $pais->getPaises();