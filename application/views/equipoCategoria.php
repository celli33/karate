<body>

<div class="container">
  <form action="<?php echo base_url();?>index.php/Welcome/insertaEC" method="POST">
  	<div>
	    <div class="form-group">
		    <label for="equipo">Selecciona un Equipo:</label>
			<select class="form-control" id="equipo" name="equipo">
				<?php foreach($equipos->result() as $fila) { ?>
				<option value="<?=$fila->id_Equipo?>"><?=$fila ->nombre_equipo?></option><?php } ?> 
			</select>
		</div>
		
		    <label for="competencia">Selecciona una Competencia:</label>
			<select class="form-control" id="competencia" name="competencia">
				<?php foreach($competencias->result() as $fila) { ?>
				<option value="<?=$fila->id_Competencia?>"><?=$fila ->nombre_competencia?></option><?php } ?> 
			</select>
		
		<div class="" id="categoria" name="categoria"></div>
	</div>
	<button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>