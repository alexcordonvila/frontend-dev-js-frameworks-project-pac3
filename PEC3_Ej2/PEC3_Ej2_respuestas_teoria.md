### Modifica el codi per aconseguir que aparegui una línia vermella d'error a l'IDE avisant-te que s'està disparant un TypeError. Explica per què s'ha produït això i quins avantatges té.

#### Explicació:
Hem modificat la variable `a` perquè sigui un string en comptes d'un number.

Ara `b` és el resultat de concatenar un string amb el valor enter 3. Això fa que ara `b` sigui també un string, amb el valor "apple3".

L’objecte `c` té dues propietats (apple i banana), totes dues de tipus string seguint la nostra modificació.

Quan s'intenta fer el càlcul de c.apple * 4, TypeScript detecta un problema perquè c.apple és un string (amb el valor "apple") i no es pot multiplicar per un enter 4. Això genera un TypeError en temps de compilació, indicat amb una línia vermella, i es mostra a l'IDE com:

![Text alternatiu](./capturaIDE.png)