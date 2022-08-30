#!/usr/bin/python3
import sys
import re
 

#  Crear directorio sin espacio


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
     
print("\nGood day!")
