<div class="contenedor clearfix ">
  <h2>Seleccione Competencia y categoria para el equipo <?php echo $nombre?></h2>
</form>
<form action="<?php echo base_url();?>index.php/Welcome/insertaEC" method="POST">
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
          <input type="hidden" name="id_Equipo" value="<?php echo $id; ?>">
          <input type="hidden" name="nombre" value="<?php echo $nombre; ?>">
          <button type="submit" class="btn btn-primary">Insertar Competencia</button>
      </div>
    </div>
  </div>
</div>
</form>

</div>
