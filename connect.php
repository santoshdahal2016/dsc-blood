
<?php
/* Connect to a MySQL database using driver invocation */
$dsn = 'mysql:dbname=bloodincloud;host=bloodincloudsql.mysql.database.azure.com';
$user = 'santosh@bloodincloudsql';
$password = 'Bl00dcl0ud';

try {
    $dbh = new PDO($dsn, $user, $password);
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}

?>

