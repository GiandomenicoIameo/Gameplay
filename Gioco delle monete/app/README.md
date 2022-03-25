# Gioco delle 7 monete : manuale di istruzioni

```bash
# 1. Scegliere 7 monete qualsiasi.
# 2. Si gioca in due, a turno.
# 3. al vostro turno, prendere una o due monete.
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

[ OK ] Turno CPU. 
[ *** ] Calcolo..
[ OK ] La CPU cattura una moneta.

Portafogli = [ 1¢, 2¢, 5¢, 10¢, 20¢, 50¢ ]

1) Prendi una moneta.
2) Prendi due monete.

[ OK ] Turno Player.
?- 2

Portafogli = [ 1¢, 2¢, 5¢, 10¢ ]

[ OK ] Turno CPU. 
[ *** ] Calcolo..
[ OK ] La CPU cattura una moneta.

Portafogli = [ 1¢, 2¢, 5¢ ]

1) Prendi una moneta.
2) Prendi due monete.

[ OK ] Turno Player.
?- 2

Portafogli = [ 1¢ ]

[ OK ] Turno CPU. 
[ *** ] Calcolo..
[ OK ] La CPU cattura una moneta.

Portafogli = [ ]
```

