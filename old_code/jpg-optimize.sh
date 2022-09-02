#!/usr/bin/bash

NEWDIR='NEW'
export IMG=~/444.img-webs

echo "Optimizar imagenes en $IMG"

# find . -type f -iname '*.jpg' -exec jpegoptim --size=65% \
# -o7 -p --strip-all {} +; 
# 

# opcion 2
#find . -type f -iname '*.jpg' | xargs jpegoptim -m 80 -t


if [ -d $NEWDIR ] 
then
    echo "OK  "+$NEWDIR 
else
    mkdir $NEWDIR
fi
echo "OK Nueva foto copiadas en "+$NEWDIR 

# opcion #3
for img in ` find -type f -iname '*.jpg' `; 
  do jpegtran -copy none -optimise \
  -outfile $(date +%F).$img  $img; 
done

