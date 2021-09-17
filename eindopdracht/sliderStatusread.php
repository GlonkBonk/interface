<?php
    //this script reads the value of the file lightStatus.txt and returns that value as a valid JSON using an echo
    echo '{"sliderstatus":"'.file_get_contents("sliderStatus.txt").'"}';
?>
