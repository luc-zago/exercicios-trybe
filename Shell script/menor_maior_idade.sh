#!/bin/bash

read -p "Qual o seu nome?" name

echo "Muito prazer, $name!"

read -p "Qual a sua idade?" id
if [ $id -lt 18 ]
then
    echo "Você é menor de idade, ainda não pode beber"
else
    echo "Você já é maior de idade, pode beber uma cervejinha"
fi