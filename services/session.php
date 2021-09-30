<?php

session_start();

function startLogin($id, $name) {
   $_SESSION['id'] = $id;
   $_SESSION['name'] = $name;
}

function isLoggedin() {
   if (!isset($_SESSION['id'])) {
      return false;
   } else {
      return true;
   }
}

