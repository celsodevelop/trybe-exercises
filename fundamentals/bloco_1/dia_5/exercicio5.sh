# /bin/bash

read -p "Testing path: " TST
if [ -e $TST ]
then
    if [ -d $TST ]
    then
        echo "The path $TST is for a directory"
    elif [ -f $TST ]
    then
        echo "The path $TST is for a file"
    else
        echo "The path $TST is for another type of file"
    fi
echo $'\n More information \n'
echo "$(ls -la $TST | tail -n 5)"
else
    echo "The path $TST is invalid"
fi
