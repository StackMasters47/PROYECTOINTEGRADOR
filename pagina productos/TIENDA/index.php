<?php
require 'global/conexion.php';


?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tienda</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <a class="nav-brand" href="#">Sicarú</a>
        <!-- boton para cuando la pantalla sea mas pequeña-->
        <button class="navbar-toggler" data-target="#my-nav" data-toggle="collapse" aria-controls="my-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div id="my-nav" class="collapse navbar-collapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Carrito(0)</a>
                </li>
            </ul>
        </div>
    </nav>
    <br />
    <br />
    <div class="container">
        <br>
        <div class="alert alert-success">
            pantalla de mensaje...
            <a href="#" class="badge badge-">Ver carrito</a>
        </div>
        <div class="row">
            <?php
            try {
                $pdo = new PDO('mysql:host=localhost;dbname=tienda', 'root', '');
                $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                $pdo->exec('SET NAMES UTF8');
              
                $sentencia = $pdo->prepare("SELECT * FROM `tblproductos`");
                $sentencia->execute();
                $listaProductos = $sentencia->fetchALL(PDO::FETCH_ASSOC);
                print_r($listaProductos);
            } catch (PDOException $e) {
                echo 'Error' . $e->getMessage();
            }
            ?>
            <div class="col-3">
                <div class="card">
                    <img title="Título del producto" alt="Título" class="card-img-top" src="/pagina productos/IMG/fondoPajaro.png">
                    <div class="card-body">
                        <span>Título del producto</span>
                        <h5 class="card-title">$800.00</h5>
                        <p class="card-text">Descripción</p>
                        <button class="btn btn-primary" name="btAccion" value="Agregar-" type="submit">Agregar al carrito</button>
                    </div>
                </div>
            </div>
            <!-- Repetir el bloque anterior para otros productos -->
            <div class="col-3">
                <div class="card">
                    <img title="Título del producto" alt="Título" class="card-img-top" src="/pagina productos/IMG/fondoPajaro.png">
                    <div class="card-body">
                        <span>Título del producto</span>
                        <h5 class="card-title">$800.00</h5>
                        <p class="card-text">Descripción</p>
                        <button class="btn btn-primary" name="btAccion" value="Agregar-" type="submit">Agregar al carrito</button>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card">
                    <img title="Título del producto" alt="Título" class="card-img-top" src="/pagina productos/IMG/fondoPajaro.png">
                    <div class="card-body">
                        <span>Título del producto</span>
                        <h5 class="card-title">$800.00</h5>
                        <p class="card-text">Descripción</p>
                        <button class="btn btn-primary" name="btAccion" value="Agregar-" type="submit">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
</body>

</html>