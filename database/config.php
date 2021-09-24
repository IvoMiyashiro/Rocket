<?php

   function databaseConn() {
      $server = 'localhost';
      $username = 'root';
      $password = '';
      $database = 'rocket';
   
      $conn = new mysqli($server, $username, $password, $database);
   
      if ($conn -> connect_error) {
         die("Connection failed: " . $conn -> connect_error);
      }

      return $conn;
   }

   function databaseDis($conn) {
      $conn -> close();
   }
   
?>