#!/bin/bash

#v=`ls -l | grep -e .png*`

#v= find -name "*.png"

for x in *.png
do
    y="`date -I`-$x"
    mv $x $y
done