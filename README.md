# Informe PAC3

## Login UOC: **acordonv**

## Nom i cognoms: **Àlex Cordón Vila**

### **PAC3_Ej1**

#### **Breu descripció:** 
En aquest primer exercici s'ha redactat un document que explica les principals diferències i avantatges que té TypeScript respecte de JavaScript. Per fer-ho, s'ha fet una comparació entre dos scripts donats que presenten la mateixa funcionalitat, però un amb JS i l'altre amb TypeScript.

## Dificultats Trobades

He trobat dificultats per poder llegir els recursos teòrics sobre TS adjunts als continguts de la PAC. Els enllaços no funcionen correctament. He usat l'index d'aquests docuemtns per anar buscat altres fonts com O'reilly, documentació oficial, forums de comunitat i de la UOC per resoldre dubtes.

--------------------------

### **PAC3_Ej2**

#### **Breu descripció:** 
En aquest exercici s'han descarregat tres scripts de Typescript del contingut adjunt a la PAC. Cada script es presenta junt a una questió a resoldre:
    1. En el primer exercici calia modificar el codi donat per fer aparèixer un TypeError.
    2. En el segon exercici calia respondre diferents questions sobre el code2.ts i code3.ts


## Dificultats Trobades
En primer lloc es va haver de buscar què era un TypeError segons TypeScript. LLavors d'entre les diferents maneres de generar l'error `TypeError` es va optar per la manera més senzilla coemnçant per la primera linia de codi.

Per respondre les altres dues preguntes també s'ha hagut de recorrer a la teoría per ampliar i millorar els detalls de la resposta.

--------------------------

### **PAC3_Ej3**

#### **Breu descripció:** 

En aquest exercici s'ha treballat conceptualment el fitxer `tsconfig.json` i s'ha treballat damunt del codi Typescript per ampliar el codi existent per a resoldre la funcionalitat demanada.
S'entrega el codi compilat per mostrar que el resultat donat és l'esperat.

## Dificultats Trobades

Fins aquest moment no habia treballat mai amb Typescript i m'ha estat difícil el procés d'instalació dels paquets necesaris de typescript. (Node i TSC)

--------------------------

### **PAC3_Ej4**

#### **Breu descripció:** 

En aquest exercici s'ha transformat l'aplicació TODO proporcionada en JavaScript (de la PAC2) a TypeScript. S'ha treballat com transpilar usant TSC i Webpack.
Dins la carpeta PEC3_Ej4 hi ha un README_PEC3_Ej4.md on s'explica com transpilar el projecte.

## Dificultats Trobades

S'han trobat moltes dificultats en diferents estadis del desenvolupament. La principal dificultat però ha estat treballar amb els diferents tipus i estructures de dades i trobar com gestionar els errors de TypeScript. No s'ha seguit l'ordre proposat pels diferents punts de l'enunciat; s'ha anat desenvolupant per features. En primer lloc, s'ha traduït la classe del model i llavors la funcionalitat d'afegir TODO, després hem anat ampliant funcionalitats, la d'eliminar TODO, i finalment la d'editar i seleccionar el TODO. 

Al principi es va organitzar el projecte de manera que cada .ts anava al costat de cada .js. Per a poder-ho compilar correctament s'ha optat per crear una carpeta .src amb la mateixa estructura que el projecte original. El fixter index.html s'ha deixat a l'arrel.

 Ha calgut entendre bé l'arquitectura del projecte per ser transpilat tant per TSC com per WEBPACK. Per poder transpilar amb `Webpack`, s'ha hagut d'entendre com afegir imports i exports al codi. Fins a trobar la manera, no podia generar el projecte amb més d'un .ts; Webpack només em compilava el fitxer d'entrada, app.ts. També s'han trobat dificultats en entendre el fitxer de configuració de webpack.config.ts i, sobretot, treballar amb totes les dependències npm per generar un HTML i un CSS dins del bundle. Una de les dificultats per transpilar amb webpack també ha estat entendre el sistema d'errors de Webpack.
 Finalment s'ha pogut anar resolent cada problema pas a pas fins a poder entregar un bundle.js i un index.html de manera correcte.

--------------------------