<?php
foreach ($css_files as $file): ?>
	<link rel="stylesheet" type="text/css" href="<?php echo $file; ?>" />
<?php endforeach; ?>
  <link rel="stylesheet" href="<?php echo base_url();?>css/materialize.css">
	<link rel="stylesheet" href="<?php echo base_url();?>css/estilos.css">
<?php foreach ($js_files as $file): ?>
	<script src="<?php echo $file; ?>" ></script>
<?php endforeach; ?>
<script src="<?php echo base_url();?>js/materialize.js"></script>
</head>
<body>
	<div style='height:20px;'></div>
	<div class="contenedor registroPersonas">
		<?php echo $output; ?>
	</div>
</body>
</html>
