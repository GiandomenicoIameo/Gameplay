# Come installare Node.js

Prima di capire come installare Node.js sul nostro coputer locale, bisogna considerare che il gestore di pacchetti cambia in base alle diverse versioni di Linux, quindi questa guida può funzionare bene per **Ubuntu** e **Debian** o derivati come **Linux Mint**, **Elementary OS**, bash su **Windows** e gli altri.
Anzitutto cominciamo ad aprire il terminale, se non sai come fare puoi aprire il menu, digitare "terminale" e cliccare sull'icona che vi appare. Dopodiché eseguire i seguenti comandi :

```bash
sudo apt update
sudo apt install nodejs
```

Per verificare che **Node.js sia stato installato correttamente**, è sufficiente digitare questo comando :

```bash
node -v
```

Con questo comando verrà mostrata la versione di Node.js appena installata.

# Installare NPM

**NPM** è un Package Manager per Node.js ( **Node Package Manager** ) necessario per installare moduli e pacchetti da utilizzare con Node.js. Per installare *npm* dare i seguenti comandi :

```bash
sudo apt update
sudo apt install npm
```

Verificare la versione di *npm* installata :

```bash
npm -v
```





