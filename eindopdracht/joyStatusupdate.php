<?php
    //this script writes the value of the GET variable lightStatus to the file lightStatus.txt
    if (isset($_GET['joy1Direction'])) {
        $file = fopen("joyStatus.txt", "w");
        fwrite($file, $_GET['joy1Direction']);
        fclose($file);
    }
    //return an empty JSON (to prevent a JavaScript fetch error)
    echo '{"joy1Direction":'.$_GET['joy1Direction']."}";
?>
