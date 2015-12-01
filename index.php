<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>CP3 Eindopracht</title>
	<link rel="stylesheet" type="text/css" href="css/screen.css">
</head>
<body>
	<?php
		require_once "php/database/database.php";
		require_once "php/getscores.php";
		require_once "php/postscores.php";
	?>
	<table id="scoretable">
		<tr>
			<th class="score">Score</th>
			<th>Name</th>
		</tr>
		<?php
			foreach($results as $result){
				echo "<tr>";
				echo "<td class="."score".">" . $result['score'] . "</td>";
				echo "<td>" . $result['name'] . "</td>";
				echo "</tr>";
			}
		?>
	</table>
	<script src="js/vendors/phaser.min.js"></script>
	<script src="js/script.js"></script>
</body>
</html>