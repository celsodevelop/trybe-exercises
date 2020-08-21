# /bin/bash

if [ -e $1 ] 
    then 
       echo "The file path $1 is valid"
       if [ -w $1 ]
            then
                echo "You have write permission for $1"
            else
                echo "You do NOT have write permission for $1"
        fi
    else 
        echo "The file path $1 is invalid"
fi
             