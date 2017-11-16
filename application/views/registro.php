<body>

<div class="container">
  <form action="<?php echo base_url();?>index.php/Welcome/insertaEquipo" method="POST">
  	<div>
	  	<div class="form-group">
	    	<label for="nombre">Nombre equipo:</label>
	        <input type="text" class="form-control" name="nombre" id="nombre" placeholder="Ingresa Nombre">
	    </div>

	    <div class="form-group">
		    <label for="dojo">Selecciona un Dojo:</label>
			<select class="form-control" id="dojo" name="dojo">
				<?php foreach($dojos->result() as $fila) { ?>
				<option value="<?=$fila->id_Dojo?>"><?=$fila ->nombre_dojo?></option><?php } ?> 
			</select>
		</div>
	</div>
	<button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>