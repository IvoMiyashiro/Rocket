<?php

include_once '../../services/session.php';

if (isLoggedin()) {
   header('Location: ../dashboard');
}

$pageTitle = 'Login';
$pageScripts = array('../../js/loginForm.js');

?>

<!DOCTYPE html>
<html lang="en">
<?php include_once '../../components/head.php'; ?>
<?php include_once '../../components/login.php'; ?>

</html>