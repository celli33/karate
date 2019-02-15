<body>

<div class="contenedor">
  <h2>Consultas</h2>
	<form action="<?php echo base_url();?>index.php/Welcome/llenaCompetidoresI" method="POST">
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
              <button type="submit" class="btn btn-primary">Realizar consulta</button>
          </div>
        </div>
      </div>
      </div>
    </form>
    <form action="<?php echo base_url();?>index.php/Welcome/llenaCompetidoresE" method="POST">
    <div id="accordion">
      <div class="card">
        <div class="card-header">
          <a class="collapsed card-link" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
            Competencias en Equipo
          </a>
        </div>
        <div id="collapseTwo" class="collapse">
          <div class="card-block">
              <label for="medio">Selecciona una competencia:</label>
              <select class="form-control" id="competenciaE" name="competenciaE">
                <option value="" disabled selected>click aquí</option>
                <?php foreach($competenciaE->result() as $fila) {?>
                  <option value="<?=$fila -> id_Competencia ?>"><?=$fila -> nombre_competencia?></option>
                <?php } ?>
              </select>
              <div class="" id="categoriaE" nombre="categoriaE"></div>
              <br>
              <button type="submit" class="btn btn-primary">Realizar consulta</button>
          </div>
        </div>
      </div>
    </div>
    </form>


</div>
</body>
