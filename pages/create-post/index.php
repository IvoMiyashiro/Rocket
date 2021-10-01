<?php

include_once '../../services/session.php';

if (!isLoggedin()) {
   header('Location: ../login');
}

$pageTitle = 'Dashboard';
$pageScripts = array('../../js/dashboard-nav.js', '../../js/dashboard-create-pub.js');

?>

<!DOCTYPE html>
<html lang="en">

<?php include_once '../../components/head.php'; ?>
<?php include_once '../../components/create-post.php'; ?>

</html>