<?php

@include '../database/config.php';
@include './session.php';

if (isset($_POST['values'])) {
   $request = json_decode($_POST['values']);

   $email = $request->{'email'};
   $password = $request->{'password'};

   // Me conecto con la base de datos
   $conn = databaseConn();
   $sql = "SELECT id, name, email, password FROM user WHERE email='$email'";

   if (!$result = mysqli_query($conn, $sql)) {
      echo ("Error desc: " . mysqli_error($conn));
   } else {
      while ($row = $result->fetch_assoc()) {
         if (password_verify($password, $row['password'])) {
            startLogin($row['id'], $row['name']);
            echo true;
         } else {
            echo false;
         };
      }
   }


   databaseDis($conn);
}
