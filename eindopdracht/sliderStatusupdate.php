
<?php
    //this script writes the value of the GET variable lightStatus to the file lightStatus.txt
    if (isset($_GET['sliderstatus'])) {
        $file = fopen("sliderStatus.txt", "w");
        fwrite($file, $_GET['sliderstatus']);
        fclose($file);
    }
    //return an empty JSON (to prevent a JavaScript fetch error)
    echo '{"sliderstatus":'.$_GET['sliderstatus']."}";
?>