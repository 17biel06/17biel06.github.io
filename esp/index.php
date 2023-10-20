<!DOCTYPE html>
<html>
<head>
	<title>ReNomIt!</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<style type="text/css">
		body {
			background-color: #1E1E1E;
			color: white;
			font-family: Arial;
			font-size: 48px;
			text-align: center;
		}

		button {
			background-color: #FA8072;
			color: white;
			font-family: Arial;
			font-size: 24px;
			border: none;
			padding: 20px;
			cursor: pointer;
			border-radius: 10px;
            margin-top: 20px;
            width: 200px; 
            display:block; 
            margin-left:auto; 
            margin-right:auto; 
		}

		button:hover {
			background-color: #FF6347;
		}

		.container {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			height: 100vh;
			width: 100vw;
            text-align:center; 
            margin:auto; 
            position:absolute; 
            top:0; 
            right:0; 
            bottom:0; 
            left:0; 
		}

        @media only screen and (max-width: 600px) {
            body {
                font-size: 24px;
            }
            button {
                font-size: 18px;
                padding: 10px;
                width: 150px; 
            }
        }
	</style>
</head>
<body>
    <div class="container">
        <h1>ReNomIt!</h1>
        <p id="palabra"><?php echo generar_palabra(); ?></p>
        <button onclick="window.location.reload()">Generar</button>
        <button onclick="window.location.href='/'">Inicio</button>
    </div>
    <?php
    function generar_palabra() {
        $verbos = file("verbos.txt");
        $sustantivos = file("sustantivos.txt");
        
        $palabra1 = trim($verbos[array_rand($verbos)]);
        $palabra2 = trim($sustantivos[array_rand($sustantivos)]);
        
        $palabra_generada = $palabra1 . " " . $palabra2;
        
        return $palabra_generada;
    }
    ?>
</body>
</html>
