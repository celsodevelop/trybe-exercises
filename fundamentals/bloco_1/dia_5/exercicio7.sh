# /bin/bash

if [ -d $1 ]
then
    echo "The $1 has $(ls $1 | wc -w) files"
else 
    echo "The parameter is NOT a directory"
fi