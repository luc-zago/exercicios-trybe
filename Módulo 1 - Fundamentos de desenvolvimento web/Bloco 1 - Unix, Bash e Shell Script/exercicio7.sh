#!/bin/bash

var=`ls -l $* |grep -e "^-"| wc -l`

if [ -d $* ]
    then echo "O $* tem $var arquivos"
else
    echo "O argumento não é um diretório"
fi