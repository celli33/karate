<body>
  <?php if($this->session->userdata('nivel')==1) {?>
<header>



  <div class="contenedor clearfix">




    <ul id="dropdown1" class="dropdown-content">
      <li><a href="<?php echo base_url();?>index.php/welcome/modificarPersona"> Modificar Competidores</a></li>
      <li><a href="<?php echo base_url();?>index.php/Welcome/consultas">Sorteo</a></li>
      <li><a href="<?php echo base_url();?>index.php/welcome/equipos"> Modificar equipos</a></li>
      <li><a href="<?php echo base_url();?>index.php/welcome/dojos"> dojos</a></li>
      <li><a href="<?php echo base_url();?>index.php/welcome/competencias"> competencias</a></li>
      <li><a href="<?php echo base_url();?>index.php/welcome/categorias" > categorias</a></li>
      <li><a href="<?php echo base_url();?>index.php/welcome/equipocategoria1" > competencias por equipo</a></li>
      <li><a href="<?php echo base_url();?>index.php/welcome/personacategoria" > competencias por persona</a></li>
      <li><a href="<?php echo base_url();?>index.php/welcome/verSorteos" > ver Sorteos</a></li>
      <li><a href="<?php echo base_url();?>index.php/welcome/cerrarSesion" > cerrar sesión</a></li>
      <li class="hide-on-med-and-up"><a href="<?php echo base_url();?>index.php/welcome/personas"> Agregar Competidores</a></li>
      <li class="hide-on-med-and-up"><a href="<?php echo base_url();?>index.php/welcome/registro" > Agregar Equipo</a></li>

    </ul>


    <nav>
    <div class="nav-wrapper clearfix">
      <a href="#" class="brand-logo left"> Sorteo </a>
      <ul id="nav-mobile" class="right ">
        <li class="hide-on-small-only"><a href="<?php echo base_url();?>index.php/welcome/personas"> Agregar Competidores</a></li>

        <li class="hide-on-small-only"><a href="<?php echo base_url();?>index.php/welcome/registro" > Agregar Equipo</a></li>


        <li class="hide-on-med-and-down"><a class="dropdown-trigger" href="#!" data-target="dropdown1">Opciones<i class="material-icons right">arrow_drop_down</i></a></li>
        <li><a href="#" data-target="slide-out" class="sidenav-trigger hide-on-large"><i class="material-icons">menu</i></a></li>
      </ul>
    </div>
  </nav>


  <ul id="slide-out" class="sidenav">
    <li><a href="<?php echo base_url();?>index.php/welcome/modificarPersona"> Modificar Competidores</a></li>
    <li><a href="<?php echo base_url();?>index.php/Welcome/consultas">Sorteo</a></li>
    <li><a href="<?php echo base_url();?>index.php/welcome/equipos"> Modificar equipos</a></li>
    <li><a href="<?php echo base_url();?>index.php/welcome/dojos"> dojos</a></li>
    <li><a href="<?php echo base_url();?>index.php/welcome/competencias"> competencias</a></li>
    <li><a href="<?php echo base_url();?>index.php/welcome/categorias" > categorias</a></li>
    <li><a href="<?php echo base_url();?>index.php/welcome/equipocategoria1" > competencias por equipo</a></li>
    <li><a href="<?php echo base_url();?>index.php/welcome/personacategoria" > competencias por persona</a></li>
    <li><a href="<?php echo base_url();?>index.php/welcome/verSorteos" > ver sorteos</a></li>
    <li><a href="<?php echo base_url();?>index.php/welcome/personas"> Agregar Competidores</a></li>
    <li ><a href="<?php echo base_url();?>index.php/welcome/registro" > Agregar Equipo</a></li>
    <li ><a href="<?php echo base_url();?>index.php/welcome/cerrarSesion" > cerrar sesión</a></li>
  </ul>









    <div class="title clearfix">
      <h1 class="titulo">Bienvenidos al sorteo del torneo</h1>
      <img class="logo"src="<?php echo base_url();?>image/karateca.png" alt="karateca">
    </div>


  </div><!--contenedor-->
</header>
<?php }
else
    redirect('/Welcome/index/', 'location');
?>
