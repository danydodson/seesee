export ZSH="/home/node/.oh-my-zsh"

ZSH_THEME=robbyrussell

plugins=(git)

autoload -Uz compinit && compinit -d "~/.cache/zsh-dump"

source /home/node/.oh-my-zsh/oh-my-zsh.sh
