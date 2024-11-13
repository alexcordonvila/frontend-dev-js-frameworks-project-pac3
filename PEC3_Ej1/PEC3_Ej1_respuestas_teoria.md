### Enumera i explica els principals avantatges que aporta l'ús de TypeScript sobre JavaScript.

#### 1. Estructura de codi:
Podem veure que al codi que usa TypeScript s'ha definit una interfície anomenada Dog on s'especifiquen dues propietats amb el tipus de dada `string` i `number`. No passa el mateix amb el codi de Javascript on també s'ha definit una estructura de dades equivalent a partir de crear un objecte anomenat Dog on cada propietat no queda especificada per cap tipus. En aquest aspecte TypeScript dona una millor arquitectura de codi, més clara i visualment reconeixible pel desenvolupador.

#### 2. Detecció d'errors:
La diferència de tipat també dona avantatge a TypeScript a l'hora d'interpretar el codi. L'intèrpret de TS serà capaç de detectar i prevenir errors com ara assignar un valor boolean a una variable declarada com a tipus string (cas que podem veure al codi donat amb `kind: true`).
Un altre exemple d'avantatge en definir el tipat del codi el trobem a la definició de la funció `baby` on es passen dos paràmetres, `dog1` i `dog2`, però només amb TypeScript assegurem que aquests siguin de tipus `Dog`. 

#### 3. Log d'errors:
Si es produeixen errors com els que hem anomenat ens els punts anteriors Javascript els detectara, si ho fa, només en temps d'execució mentre que Typescript els detectara en el moment de compilar. Això afegeix una capa de fiabiliat i qualitat que javascript no ofereix.
