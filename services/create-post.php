<?php

@include '../database/config.php';

if (isset($_POST['values'])) {
   $request = json_decode($_POST['values']);

   echo $request->{'titulo'};
}