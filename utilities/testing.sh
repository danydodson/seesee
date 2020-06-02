
#!/usr/bin/bash

VAR1=1
VAR2=2

BOOL1=true

if [ $BOOL1 ]
then
    echo 'the first if statement is true ...'
    echo 'first calculation =' $VAR1 + $VAR2
else
    echo 'the first if statement is false ...'
fi

exit