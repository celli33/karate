<body>

<div class="contenedor">
  <h3>Seleccione competencia y categoria para <?php echo $nombre ?></h3>
	<form action="<?php echo base_url();?>index.php/Welcome/insertaCompetenciaPorPersona" method="POST">
  	<div id="accordion">
      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
            Competencias Individuales
          </a>
        </div>
        <div id="collapseOne" class="collapse">
          <div class="card-block">
              <label for="medio">Selecciona una competencia:</label>
              <select class="form-control" id="competenciaI" name="competenciaI">
                <option value="" disabled selected>click aquí</option>
                <?php foreach($competenciaI->result() as $fila) {?>
                  <option value="<?=$fila -> id_Competencia ?>"><?=$fila -> nombre_competencia?></option>
                <?php } ?>
              </select>
              <div class="" id="categoriaI" nombre="categoriaI"></div>
              <br>
              <input type="hidden" name="id_Persona" value="<?php echo $id; ?>">
              <input type="hidden" name="nombre" value="<?php echo $nombre; ?>">
              <button type="submit" class="btn btn-primary">insertar Competencia</button>
          </div>
        </div>
      </div>
      </div>
    </form>



</div>
</body>
