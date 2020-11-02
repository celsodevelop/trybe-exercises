# /bin/bash

# Eu sou Tryber e vou aprender a desenvolver sistemas para Web. Vou ter muito sucesso na programação!

RENAME_FILES=$(find $1 -name "*.${2,,}" -printf "%f \n" )

echo "We've found $(echo "$RENAME_FILES" | wc -w) $2 files able to rename." $'\n'
if [ ${#RENAME_FILES} -ne 0 ]
then
    for FILEREN in $RENAME_FILES
    do
        echo "The file $FILEREN is going to be renamed as $(date --date= +%F)-$FILEREN "
        mv $FILEREN $(date --date= +%F)-$FILEREN
    done
else
    echo "We have NOT found $2 extension files"
fi
