# Haversine
Uma aplicação simples para realizar a fórmula de Haversine e retornar a distância em Km de duas coordenadas com Latitude e Longitude

> A fórmula de haversine é uma importante equação usada em navegação, fornecendo distâncias entre dois pontos de uma esfera a partir de suas latitudes e longitudes. É um caso especial de uma fórmula mais geral de trigonometria esférica, a lei dos haversines, que relaciona os lados e ângulos de um triângulo contido em uma superfície esférica.

```javascript
import haversine from "./haversine.js";

var initial_point = [-43.5277437,-46.3723508];
var final_point = [-43.5288566,-46.3690734];

console.log(haversine.getDistance(initial_point, final_point));
// returns 0.2859238416035219
```