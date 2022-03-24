# Come installare Node.js

```bash
# Prima di capire come installare Node.js sul nostro coputer locale, bisogna considerare 
# che il gestore di pacchetti cambia in base alle diverse versioni di Linux, quindi questa 
# guida può funzionare bene per Ubuntu e Debian o derivati come Linux Mint,
# Elementary OS, bash su Windows e gli altri. Anzitutto cominciamo ad aprire 
# il terminale, se non sai come fare puoi aprire il menu, digitare "terminale" e 
# cliccare sull'icona che vi appare. Dopodiché eseguire i seguenti # comandi :

sudo apt update
sudo apt install nodejs
```

```bash
# Per verificare che Node.js sia stato installato correttamente è sufficiente          
# digitare questo comando :

node -v
```

# Installare NPM

```bash
# NPM è un Package Manager per Node.js ( Node Package Manager ) necessario per     
# installare moduli e pacchetti da utilizzare con Node.js. Per installare *npm* dare i     
# seguenti comandi :

sudo apt update
sudo apt install npm
```

```bash
# Verificare la versione di npm installata :
npm -v
```
# Installazione dei moduli *sync-prompt* e *sleep*

```bash
# Affichè il programma del gioco delle monete possa funzionare correttamente, sarà necessario installare
# i moduli : sync-prompt e sleep. Per farlo saranno sufficienti i seguenti comandi da terminale :

npm install sync-prompt
npm install sleep
```




