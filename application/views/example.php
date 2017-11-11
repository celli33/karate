<?php
foreach ($css_files as $file): ?>
	<link rel="stylesheet" type="text/css" href="<?php echo $file; ?>" />
<?php endforeach; ?>
<?php foreach ($js_files as $file): ?>
	<script src="<?php echo $file; ?>" ></script>
<?php endforeach; ?>
</head>
<body>
	<div style='height:20px;'></div>
	<div>
		<?php echo $output; ?>
	</div>
</body>
</html>
