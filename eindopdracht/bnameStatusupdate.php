<?php
    //this script writes the value of the GET variable lightStatus to the file lightStatus.txt
    if (isset($_GET['bnamestatus'])) {
        $file = fopen("bnameStatusupdate.txt", "w");
        fwrite($file, $_GET['bnamestatus']);
        fclose($file);
    }
    //return an empty JSON (to prevent a JavaScript fetch error)
    echo '{"bnamestatus":'.$_GET['bnamestatus']."}";
?>