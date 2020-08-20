#!/bin/bash

if [ -d $* ]
    then echo "Este é um diretório"
fi
if [ -f $* ]
    then echo "Este é um arquivo"
else
    echo "Este é outro tipo de arquivo"
fi

ls -l $*
