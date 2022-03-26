# Come installare Node.js

```bash
# Prima di capire come installare Node.js sul nostro coputer locale, bisogna considerare 
# che il gestore di pacchetti cambia in base alle diverse versioni di Linux, quindi questa 
# guida può funzionare bene per Ubuntu e Debian o derivati come Linux Mint,
# Elementary OS, bash su Windows e gli altri. Anzitutto cominciamo ad aprire 
# il terminale, se non sai come fare puoi aprire il menu, digitare "terminale" e 
# cliccare sull'icona che appare. Dopodiché eseguire i seguenti comandi :

sudo apt update
sudo apt install nodejs

# Per verificare che Node.js sia stato installato correttamente è sufficiente          
# digitare questo comando :

node --version
```

# Installare NPM

```bash
# NPM è un Package Manager per Node.js ( Node Package Manager ) necessario per     
# installare moduli e pacchetti da utilizzare con Node.js. Per installare npm dare i     
# seguenti comandi :

sudo apt update
sudo apt install npm

# Verificare la versione di npm installata :

npm --version
```
# Installazione dei moduli

```bash
# Affinché il programma delle monete possa funzionare correttamente sarà necessario installare i seguenti moduli :
# prompt-sync e sleep. Per farlo sarà sufficiente dare il seguente comando da terminale :

npm install

# Il comando deve essere eseguito nella stessa directory del progetto ( app/ ).
```


