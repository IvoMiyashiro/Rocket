<?php

@include '../database/config.php';

if (isset($_POST['values'])) {
   $request = json_decode($_POST['values']);

   $name = $request->{'name'};
   $email = $request->{'email'};
   $password = $request->{'password1'};
   $address = $request->{'address'};
   $dpto = $request->{'dpto'};
   $province = $request->{'province'};
   $locality = $request->{'locality'};
   $zip = $request->{'zip'};
   $phone = $request->{'phone'};

   // Hasheo la contraseña
   $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
   
   // Me conecto con la base de datos
   $conn = databaseConn();
   $sql = "INSERT INTO
            user (name, email, password, address, dpto, province, locality, zip, phone)
            VALUES ('$name', '$email', '$hashedPassword', '$address', '$dpto', '$province', '$locality', '$zip', '$phone');";

   if (!$result = mysqli_query($conn, $sql)) {
      echo("Error desc: " . mysqli_error($conn));
   }

   databaseDis($conn);
}
?>