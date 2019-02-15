<div class="contenedor center-align">
  <h2>Inserción exitosa</h2>
  <div class="contenedor clearfix row ">
    <?php $id=$data['equipo'];
          $nombre=$data['nombre_equipo'];
     ?>
    <form class="col s12  " action="<?php echo base_url();?>index.php/Welcome/seleccionaCompetenciasPorEquipo?id=<?php echo $id ?>&nombre=<?php echo $nombre ?>"method="post">
      <div class=" col s12 center-align">
        <button class="btn waves-effect waves-light" type="submit" name="action">Insertar otro Categoria para <?php echo $nombre ?>
          <i class="material-icons right">send</i>
        </button>
      </form>
      <br><br>
      <form class="col s12  " action="<?php echo base_url();?>index.php/Welcome/registro"method="post">

        <div class=" col s12">
          <button class="btn waves-effect waves-light" type="submit" name="action">Terminado
            <i class="material-icons right">send</i>
          </button>
          </form>
        </div>
      </div>
    </div>
</div>
