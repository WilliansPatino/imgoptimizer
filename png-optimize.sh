#!/usr/bin/bash

IMG="~/444.img-web/"

echo "Optimizar imagenes en $IMG"



find . -type f -iname '*.png' \
-exec optipng -preserve  {} +