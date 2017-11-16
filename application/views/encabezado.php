<body>
<header>
  <div class="contenedor clearfix">
    <h1>Bienvenidos al sorteo del torneo</h1>
    <div class="competencia clearfix">
      <p>Seleccione la competencia de la que quiere hacer el sorteo:</p>
      <div class="botones clearfix">
        <div class="cont-boton">
          <a href="#" class="boton kata-ind"> kata individual</a>
        </div>
        <div class="cont-boton ">
          <a href="#" class="boton kumite-ind"> kumite individual</a>
        </div>
        <div class="cont-boton ">
          <a href="#" class="boton kata-parejas"> kata por parejas</a>
        </div>
        <div class="cont-boton ">
          <a href="#" class="boton kumite-equipo"> kumite por equipos</a>
        </div>
        <div class="cont-boton ">
          <a href="#" class="boton kata-selectivo"> kata selectivo</a>
        </div>
        <div class="cont-boton ">
          <a href="#" class="boton kumite-selectivo"> kumite selectivo</a>
        </div>
        <div class="cont-boton ">
          <a href="#" class="boton kata-equipo"> kata por equipo</a>
        </div>
				<div class="cont-boton ">
          <a href="<?php echo base_url();?>index.php/Welcome/consultas" class="boton consultas">consultas</a>
        </div>
        <div class="cont-boton ">
          <a href="http://127.0.0.1/karate/index.php/welcome/equipos" class="boton equipos"> equipos</a>
        </div>
        <div class="cont-boton ">
          <a href="http://127.0.0.1/karate/index.php/welcome/personas" class="boton personas"> personas</a>
        </div>
        <div class="cont-boton ">
          <a href="http://127.0.0.1/karate/index.php/welcome/dojos" class="boton dojos"> dojos</a>
        </div>
        <div class="cont-boton ">
          <a href="http://127.0.0.1/karate/index.php/welcome/competencias" class="boton competencias"> competencias</a>
        </div>
        <div class="cont-boton ">
          <a href="http://127.0.0.1/karate/index.php/welcome/categorias" class="boton categorias"> categorias</a>
        </div>
        <div class="cont-boton ">
          <a href="http://127.0.0.1/karate/index.php/welcome/equipocategoria" class=" boton equipo-categorias"> competencias por equipo</a>
        </div>
        <div class="cont-boton ">
          <a href="http://127.0.0.1/karate/index.php/welcome/personacategoria" class="boton persona-categorias"> competencias por persona</a>
        </div>
        <!--<div class="dropdown">
          <button class="dropbtn">Dropdown</button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>-->
        <div class="cont-boton">
          <form class="" method="post">
            <label for="categoria">Escriba código de la categoria</label>
            <input type="number" name="categoria" value="" class="categoria">
          </form>
        </div>


      </div><!--botones-->
    </div><!--competencia-->
  </div><!--contenedor-->
</header>
