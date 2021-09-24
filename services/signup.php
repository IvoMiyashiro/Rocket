<?php

   @include '../database/config.php';

   $name = $_POST["name"];
   $email = $_POST['email'];
   $password = $_POST["password1"];
   $address = $_POST["address"];
   $dpto = $_POST["dpto"];
   $province = $_POST["province"];
   $locality = $_POST["locality"];
   $zip = $_POST["zip"];
   $phone = $_POST["phone"];
   
   print($name);
   // Me conecto con la base de datos
   
   $conn = databaseConn();
   $sql = "INSERT INTO 
            user (name, email, password, address, dpto, province, locality, zip, phone) 
            VALUES ('Pepito', '$email', '$password', '$address', '$dpto', '$province', '$locality', '$zip', '$phone');";
   
   if ($result = mysqli_query($conn, $sql)) {
      echo "Query hecho";
   } else {
      echo("Error desc: " . mysqli_error($conn));
   }

   databaseDis($conn);

?>