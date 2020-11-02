# /bin/bash

for i in $*
do
    if [ -e $i ]
    then
        if [ -d $i ]
        then
            echo "The path $i is for a directory"
        elif [ -f $i ]
        then
            echo "The path $i is for a file"
        else
            echo "The path $i is for another type of file"
        fi
    echo $'\n More information \n'
    echo "$(ls -la $i | tail -n 5)"
    else
        echo "The path $i is invalid"
    fi
done