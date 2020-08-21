# /bin/bash


if [ -e $1 ]
then
    if [ -d $1 ]
    then
        echo "The path $1 is for a directory"
    elif [ -f $1 ]
    then
        echo "The path $1 is for a file"
    else
        echo "The path $1 is for another type of file"
    fi
echo $'\n More information \n'
echo "$(ls -la $1 | tail -n 5)"
else
    echo "The path $1 is invalid"
fi