# /bin/bash

RENAME_FILES=$(find . -name "*.png" -printf "%f \n" )

echo "We've found $(echo "$RENAME_FILES" | wc -w) PNG files able to rename." $'\n'
if [ ${#RENAME_FILES} -ne 0 ]
then
    for FILEREN in $RENAME_FILES
    do
        git mv $FILEREN $(date --date= +%F)-$FILEREN
    done
else
    echo "We have NOT found *.png files"
fi