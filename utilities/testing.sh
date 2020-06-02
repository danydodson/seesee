
#!/usr/bin/zsh

BOOL=true
VAR1=1
VAR2=2
VAR3=3

if [ $BOOL ] 
then
    echo 'the first if statement is true ...'
    echo 'first calculation =' $VAR1 + $VAR2
else
    echo 'the first if statement is false ...'
fi

exit