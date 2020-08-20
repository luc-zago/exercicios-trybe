#!/bin/bash

echo "Programa que renomeia os arquivos de uma determinada extensão e de uma determinada pasta adicionando a data atual como prefixo dos arquivos"

read -p "Qual é a pasta onde estão os arquivos que devem ser modificados? " a
read -p "Qual é a extensão dos arquivos que devem ser modificados? " b

cd $a

var=`find -type f -name "$b" | wc -l`

if [ $var -ge 1 ]
    then for c in $b
        do
        echo "`date -I`-$c"
        done

        read -p "Confirma alteração? (s/n) " d
        if [ $d = "s" ]
            then for c in *.png
                do y="`date -I`-$c"
                mv $c $y
                done
                echo "Arquivos alterados com sucesso"
            else echo "Os arquivos não foram alterados"
        fi
    else echo "Nenhum arquivo $b encontrado"
fi