<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="../../css/styles.css">

   <?php foreach ($pageScripts as $script) :; ?>
      <script type="text/javascript" src='<?php echo $script ?>'></script>
   <?php endforeach ?>

   <title> <?php echo $pageTitle ?> | Rocket </title>
</head>