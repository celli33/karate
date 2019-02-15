  <main>

  <div class="contenedor">
    <a href="#" class="btn mostrar-datos"> Ocultar Datos de competidores</a><br><?php
    $i=0;
    if(isset($competidores)==false){
   		("Location: <?php echo base_url();?>index.php/welcome/");
   	}
    if(isset($competidores)){


    foreach($competidores->result() as $row) { ?>
      <form id="form<?php echo $i;?>" name="form<?php echo $i;?>" class="form-inline alert alert-info">
        <div class="form-group">
         <label for="nombre_persona<?php echo $i;?>">nombre:</label>
         <input type="text" style="text-align:center;" class="form-control texto-control nombre<?php echo $i;?>" readonly id="nombre_persona<?php echo $i;?>" name="nombre_persona<?php echo $i;?>" value="<?php echo $row->nombre_persona;?>">
         <label for="dojo<?php echo $i;?>">dojo:</label>
         <input type="text" style="text-align:center;" class="form-control texto-control  dojo<?php echo $i;?>" readonly id="dojo<?php echo $i;?>" name="dojo<?php echo $i;?>" value="<?php echo $row->nombre_dojo;?>">
         <label for="edad<?php echo $i;?>">edad:</label>
         <input type="text" style="text-align:center;" class="form-control texto-control edad<?php echo $i;?>" readonly id="edad<?php echo $i;?>" name="edad<?php echo $i;?>" value="<?php echo $row->edad;?>">
         <label for="edad<?php echo $i;?>">estatura:</label>
         <input type="text" style="text-align:center;" class="form-control texto-control estatura<?php echo $i;?>" readonly id="estatura<?php echo $i;?>" name="estatura<?php echo $i;?>" value="<?php echo $row->estatura;?>">
        </div>
      </form>
      <?php  $i++;}
    }else {?>
      <?php
      if(isset($equipos)){
      //  var_dump($equipos->result());
        foreach($equipos->result() as $row) { ?>
          <form id="form<?php echo $i;?>" name="form<?php echo $i;?>" class="form-inline alert alert-info">
            <div class="form-group">
             <label for="id_Equipo<?php echo $i;?>">nombre:</label>
             <input type="text" class="form-control texto-control nombreE<?php echo $i;?>" readonly id="nombre_equipo<?php echo $i;?>" name="id_equipo<?php echo $i;?>" value=<?php echo "$row->nombre_equipo"; ?>>
             <label for="dojo<?php echo $i;?>">dojo:</label>
             <input type="text" class="form-control texto-control dojoE<?php echo $i;?>" readonly id="dojo<?php echo $i;?>" name="dojo<?php echo $i;?>" value="<?php echo $row->nombre_dojo;?>">
            </div>
          </form>
          <?php  $i++;}
          ?>
          <label for="numeroCompetidores" >Numero de competidores:</label>
          <input type="text" class="form-control numeroCompetidores" readonly id="numeroCompetidores" name="numeroCompetidores" value="<?php echo $i;?>">
          <a href="#grafica-sorteo" class="btn sortearE"> sortear Equipo  <i class="material-icons right">send</i></a>
        <?php  }
      }?>


      <br>
      <?php if (isset($competidores)): ?>
        <label for="numeroCompetidores" >Numero de competidores:</label>
        <input type="text" class="form-control texto-control numeroCompetidores" style="text-align:center;" readonly id="numeroCompetidores" name="numeroCompetidores" value="<?php echo $i;?>">
        <a href="#grafica-sorteo" class="btn sortearI"> sortear <i class="material-icons right">send</i></a>

      <?php endif; ?>

  </div>



  <div class="contenedor">
    <div class="graficos" id="grafica-sorteo">

      <div class="demo">

      </div>
    </div>
    <div id="dataOutput">

    </div>
    <div id="saveOutput">

    </div>
    <div class="orden">
      <p class="escribir"></p>
    </div>
  </div>

</main>
