<!DOCTYPE html>
<html>
<head>
  <title>Karate</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="<?php echo base_url();?>css/bootstrap.min.css">
  <link rel="stylesheet" href="<?php echo base_url();?>css/materialize.css">
  <link rel="stylesheet" href="<?php echo base_url();?>css/jquery.bracket.min.css">
  <link rel="stylesheet" href="<?php echo base_url();?>css/estilos.css">

  <script src="<?php echo base_url();?>js/popper.min.js"></script>
  <script src="<?php echo base_url();?>js/bootstrap.min.js"></script>
  <script src="<?php echo base_url();?>js/jquery.js"></script>
  <script src="<?php echo base_url();?>js/BDaDom.js"></script>
  <script src="<?php echo base_url();?>js/jquery.bracket.min.js"></script>
    <script src="<?php echo base_url();?>js/materialize.js"></script>

  <script type="text/javascript">
      $(document).ready(function() {
      $("#competenciaI").change(function() {
        $("#competenciaI option:selected").each(function() {
             competenciaI = $('#competenciaI').val();
             $.post("<?php echo base_url();?>index.php/Welcome/llenaCategoriaI", {
             competenciaI : competenciaI}, function(data) {
             $("#categoriaI").html(data); });
            });
         })
       });
   </script>

   <script type="text/javascript">
      $(document).ready(function() {
      $("#competenciaE").change(function() {
        $("#competenciaE option:selected").each(function() {
             competenciaE = $('#competenciaE').val();
             $.post("<?php echo base_url();?>index.php/Welcome/llenaCategoriaE", {
             competenciaE : competenciaE}, function(data) {
             $("#categoriaE").html(data); });
            });
         })
       });
   </script>

   <script type="text/javascript">
      $(document).ready(function() {
        $("#competencia").change(function() {
        $("#competencia option:selected").each(function() {
             competencia = $('#competencia').val();
             $.post("<?php echo base_url();?>karate/index.php/Welcome/llenaCategorias", {
             competencia : competencia}, function(data) {
             $("#categoria").html(data); });
            });
         })
       });
   </script>



</head>
