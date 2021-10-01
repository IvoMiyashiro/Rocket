<?php

include_once '../../services/session.php';

if (isLoggedin()) {
   header('Location: ../dashboard');
}

$pageTitle = 'Signup';
$pageScripts = array('../../js/signupForm.js');

?>

<!DOCTYPE html>
<html lang="en">
<?php include_once '../../components/head.php'; ?>
<?php include_once '../../components/signup.php'; ?>

</html>