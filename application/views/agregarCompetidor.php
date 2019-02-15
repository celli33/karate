<div class="contenedor clearfix row ">
  <form class="col s12  " action="<?php echo base_url();?>index.php/Welcome/insertaPersona"method="post">

      <div class="row">
        <div class="input-field col s12">
          <input  type="text" name="nombre" value=""  class="validate" required>
          <label for="nombre" class="active">Nombre</label>
        </div>
      </div>


      <div class="row">
        <div class="input-field col s12">
         <input placeholder="Placeholder" name="f_nacimiento" type="date" class="validate">
         <label for="f_nacimiento">fecha de nacimiento</label>
       </div>
      </div>
      <div class="row">
        <div class="input-field col s12 ">
          <select name="sexo" required>
            <option value="" disabled selected>Escoge una opción</option>
            <option value="masculino">masculino</option>
            <option value="femenino">femenino</option>
          </select>
          <label for="sexo">Sexo</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input  type="number" name="edad" value="" min="3"  class="validate" required>
          <label for="edad" class="active">Edad</label>
        </div>

      </div>
      <div class="row">
        <div class="input-field col s12">
          <input  type="text" name="grado" value=""  class="validate" required>
          <label for="grado" class="active">grado</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input  type="number" name="peso" value="" min="0" max="150"  class="validate" required>
          <label for="peso" class="active">Peso</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input  type="number"  placeholder="cm." name="estatura" value="" min="0" max="250"  class="validate" required>
          <label for="estatura" class="active">Estatura</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s12 ">
          <select name="dojo" required>
            <option value="" disabled selected>Escoge una opción</option>
            <?php foreach($dojos->result() as $fila) { ?>
    				<option value="<?=$fila->id_Dojo?>"><?=$fila ->nombre_dojo?></option><?php } ?>
          </select>
          <label for="dojo">Dojo</label>
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


<?php




 ?>
