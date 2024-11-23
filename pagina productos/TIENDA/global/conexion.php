
<?php

class conexion{

    private $user="root";
    private $pass="";
    
    function conectar(){
        try{
            $pdo=new PDO('mysql:host=localhost;dbname=tienda', $this->user, $this->pass);
        
            echo "<script>alert('Conexion correcta :D')</script>";
        }catch(PDOException $error){

        
            echo '<script type="text/javascript">alert("No me pude conectar :c'. $error->getMessage() . '")</script>';

        }
    

    }
}
$nuevaconexion = new conexion();
$nuevaconexion->conectar();
?>

<?php
function pdo_connect_mysql() {
    try {
     return new PDO('mysql:host=' . DATABASE_HOST . ';dbname=' . DATABASE_NAME . ';charset=utf8', DATABASE_USER, DATABASE_PASS, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false
          ]);
    } catch (PDOException $exception) {
     // If there is an error with the connection, stop the script and display the error.
     die ('Failed to connect to database!');
    }
}

$pdo = pdo_connect_mysql();

?>