<?php

	require_once("action/indexAction.php");
	

	require_once("partial/header.php");

	

	if(!empty($_GET["Psoeudonyme"])){
		header("location:chat.php?mot=" . $_GET["Psoeudonyme"]);
		exit;
	}

?>

	<div id="menu">

		<h3>Bienvenue!</h3>

		<form action="index.php" methode="get">

			Psoeudonyme : 
			<input id="id" type="text" name="Psoeudonyme" /><br />
			Theme souhaite : 
			<select name="theme">
				<option value="1">Theme 1</option>
				<option value="2">Theme 2</option>
				<option value="3">Theme 3</option>
			</select>
			<br />
			<input id="bouton" type="submit" value="Entrer dans le Chat!" />

		</form>


	</div>
		
	


		


<?php
	require_once("partial/footer.php");
