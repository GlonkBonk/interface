


<?php
    //this script reads the value of the file lightStatus.txt and returns that value as a valid JSON using an echo
    echo '{"joy1Direction":"'.file_get_contents("joyStatus.txt").'"}';

?>