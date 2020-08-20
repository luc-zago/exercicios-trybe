#!/bin/bash

read -p "Escreva o caminho de um arquivo ou diretório:"

if [ -d $arq]
    then echo "Este é um diretório"
fi
if [ -f $arq ]
    then echo "Este é um arquivo"
else
    echo "Este é outro tipo de arquivo"
fi

ls -l $arq
