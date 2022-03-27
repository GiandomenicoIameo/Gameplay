# Come installare Node.js

![\sum_{\forall i}{x_i^{2}}](https://latex.codecogs.com/svg.latex?%5Csum_%7B%5Cforall+i%7D%7Bx_i%5E%7B2%7D%7D)

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

# Gioco delle 7 monete : manuale di istruzioni

```bash
# 1. Scegliere 7 monete qualsiasi.
# 2. Si gioca in due, a turno.
# 3. Al vostro turno, prendete una o due monete.
# 4. Chi prende l'ultima moneta vince.
```

# Dimostrazione del gioco

```bash
# Per avviare il gioco è sufficiente digitare da terminale il seguente comando :
node money.js

1) Gioca.
2) Esci.

?- 1

1) Il giocatore gioca per primo.
2) La CPU gioca per primo.
3) Esci.

?- 2

Portafogli = [ 1¢, 2¢, 5¢, 10¢, 20¢, 50¢, 1€ ]

[ OK ] Turno CPU.. 
[ *** ] Calcolo..
[ OK ] La CPU cattura una moneta.

Portafogli = [ 1¢, 2¢, 5¢, 10¢, 20¢, 50¢ ]

1) Prendi una moneta.
2) Prendi due monete.

[ OK ] Turno Player.
?- 2

Portafogli = [ 1¢, 2¢, 5¢, 10¢ ]

[ OK ] Turno CPU.. 
[ *** ] Calcolo..
[ OK ] La CPU cattura una moneta.

Portafogli = [ 1¢, 2¢, 5¢ ]

1) Prendi una moneta.
2) Prendi due monete.

[ OK ] Turno Player.
?- 2

Portafogli = [ 1¢ ]

[ OK ] Turno CPU.. 
[ *** ] Calcolo..
[ OK ] La CPU cattura una moneta.

Portafogli = [ ]
```
