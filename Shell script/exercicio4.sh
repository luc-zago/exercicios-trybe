#!/bin/bash

echo "Programa que verifica se o caminho até um arquivo existe e, caso o caminho exista, verifica se você tem permissão para editar o arquivo"

echo "O caminho para qual diretório você gostaria de verificar?"
read arq
if [ "`pwd` $arq"=true ]
    then echo "O caminho para $arq está habilitado!"
else
    echo "O caminho para $arq não está habilitado."
fi

if [ -w $arq ]
    then echo "Você tem permissão para editar $arq"
else
    echo "Você NÃO foi autorizado a editar $arq"
fi