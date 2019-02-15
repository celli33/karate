<body>

<div class="contenedor ">
  <form action="<?php echo base_url();?>index.php/Welcome/insertaEquipo" method="POST">
  	<div class="row">
	  	<div class="input-field ">
	    	<label class="active"for="nombre">Nombre equipo:</label>
	        <input type="text" class="form-control" name="nombre" id="nombre" required>
	    </div>

	    <div class="form-group">
		    <label for="dojo">Selecciona un Dojo:</label>
			<select class="form-control" id="dojo" name="dojo" required>
        <option value="" disabled selected>Escoge un dojo</option>
				<?php foreach($dojos->result() as $fila) { ?>
				<option value="<?=$fila->id_Dojo?>"><?=$fila ->nombre_dojo?></option><?php } ?>
			</select>
		</div>
	</div>
  <div class="row">
    <div class=" col s12">
      <button class="btn waves-effect waves-light" type="submit" name="action">Enviar
        <i class="material-icons right">send</i>
      </button>
    </div>
  </div>
  </form>
</div>
