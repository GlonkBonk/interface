<?php
    //this script reads the value of the file lightStatus.txt and returns that value as a valid JSON using an echo
    echo '{"bnamestatus":"'.file_get_contents("bnameStatusupdate.txt").'"}';
?>