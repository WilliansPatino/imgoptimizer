#!/usr/bin/env python3
import sys
import re
import os
 


# valida argumentos 
""" def uso(mensaje, codigo = 1):
    print(mensaje)
    print("%s: Nombre-Nuevo-Directorio directorio_destino" % sys.argv[0])
    sys.exit(codigo)

if len(sys.argv) != 2:
    uso("Se requieren 1 argumentos, usted introdujo %d" % (len(sys.argv) - 1))
elif not os.path.isdir(sys.argv[1]):
    uso("Directorio de origen no válido")
elif not os.path.isdir(sys.argv[2]):
    uso("Directorio destino no válido") """


# total arguments
n = len(sys.argv)
print("Total arguments passed:", n)
 
# Arguments passed
print("\nName of Python script:", sys.argv[0])
 
result=""
print("\nArguments passed:", end = " ")
for i in range(1, n):
    print(sys.argv[i], end = " ")
    result += sys.argv[i]+"-"
    
# print(concatenate(sys.argv))
print("\nResultado: ",result)
     


#  Crear directorio sin espacio
path = result[:-1]

try:
    os.mkdir(path)
except OSError:
    print ("Creation of the directory has failed")
else:
    print ("Successfully created the directory:  %s " % path)


print("\nHappy coding!")