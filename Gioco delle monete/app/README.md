# Gioco delle 7 monete : manuale di istruzioni

```bash
# 1. Scegliere 7 elementi qualsiasi.
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

{ 1 cent, 2 cent, 5 cent, 10 cent, 20 cent, 50 cent, 1 euro }
[ OK ] Turno CPU. 
[ *** ] Calcolo..
[ OK ] La CPU ne cattura 1

{ 1 cent, 2 cent, 5 cent, 10 cent, 20 cent, 50 cent }

1) Scegli un elemento.
2) Scegli due elementi.

[ OK ] Turno Player
?- 2

{ 1 cent, 2 cent, 5 cent, 10 cent }
[ OK ] Turno CPU. 
[ *** ] Calcolo..
[ OK ] La CPU ne cattura 1

{ 1 cent, 2 cent, 5 cent }

1) Scegli un elemento.
2) Scegli due elementi.

[ OK ] Turno Player
?- 2

{ 1 cent }
[ OK ] Turno CPU. 
[ *** ] Calcolo..
[ OK ] La CPU ne cattura 1

{ }
```


