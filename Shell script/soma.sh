#!/bin/bash

echo "Este programa soma números"
read -p "Digite um número:" nb1
read -p "Digite outro número:" nb2
rs=`expr $nb1 + $nb2`
echo "A soma dos números $nb1 e $nb2 é $rs"