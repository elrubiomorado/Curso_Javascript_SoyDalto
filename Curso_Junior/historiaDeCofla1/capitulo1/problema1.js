//Problema
/*
3 Chicos de 23 años perfectamente normales entran a una heladeria a comprar un helado pero hay un problema: los precios no estan al lado de cada estante con su respectivo helado.
Ellos quieren comprar el Helado mas caro que puedan con el dinero que tiene, así que.. veamos como podemos ayudarles.

Roberto tiene $1.5 dolares
Pedro tiene $1.70 dolares 
Cofla tiene $3 dolares

Los precios de helados son los siguientes:
Palito de helado de agua: $0.6 dolares
Palito de helado de crema: $1 dolar
Bombón helado marca heladix: $1.6 dolares
Bombón helado marca heladovich: $1.7 dolares
Bombón helado marca helardo: $1.8 dolares
Potecito de helado con confites: $2.9 dolares
Pote de 1/4 KG -> $2.9 dolares

Crear Soluciones:
-Pedirles que ingresen el monto que tiene y mostrarles el helado mas caro que puedan comprar
-Si hay 2 o mas con el mismo precio, mostrar ámbos.
-Cofla quiere saber cuanto les sobra
*/

//Parte de pedirles cuanto dinero tienen
let dineroRoberto = prompt("Cuanto dinero tienes Roberto?");
let dineroPedro = prompt("Cuanto dinero tienes Pedro?");
let dineroCofla = prompt("Cuanto dinero tienes Cofla?");

//Parte de mostrarles lo que pueden comprar

//Roberto
console.log(`Roberto puedes comprar los siguientes helados con tu presupuesto de $${dineroRoberto}`);
if(dineroRoberto >= 0.6 && dineroRoberto < 1){
    console.log(`Solo te alcanza para el palito de helado de agua y te sobraria $${dineroRoberto - 0.6}`);
}else if(dineroRoberto >= 1 && dineroRoberto < 1.6){
    console.log(`Solo te alcanza para el palito de helado de crema y te sobra $${dineroRoberto - 1}`);
}else if(dineroRoberto >= 1.6 && dineroRoberto < 1.7){
    console.log(`Solo te alcanza para el Bombón marca heladix y te sobrarian $${dineroRoberto - 1.6}`);
}else if(dineroRoberto >= 1.7 && dineroRoberto < 1.8){
    console.log(`Solo te alcanza para el Bombón marca heladovich y te sobrarian $${dineroRoberto - 1.7}`);
}else if(dineroRoberto >= 1.8 && dineroRoberto < 2.9){
    console.log(`Solo te alcanza para el Bombón marca helardo y te sobrarian $${dineroRoberto - 1.8}`);
}else if(dineroRoberto >= 2.9){
    console.log(`Te alcanza para los 2 helados mas caros que son Potecito de helado con confites
    o 
    El pote de 1/4 KG y te sobrarian $${dineroRoberto-2.9}`);
}
else{
    console.log(`Lo siento no te alcanza para ningun helado Roberto`);
}
//Pedro
console.log(`Pedro puedes comprar los siguientes helados con tu presupuesto de $${dineroPedro}`);
if(dineroPedro >= 0.6 && dineroPedro < 1){
    console.log(`Solo te alcanza para el palito de helado de agua y te sobraria $${dineroPedro - 0.6}`);
}else if(dineroPedro >= 1 && dineroPedro < 1.6){
    console.log(`Solo te alcanza para el palito de helado de crema y te sobra $${dineroPedro - 1}`);
}else if(dineroPedro >= 1.6 && dineroPedro < 1.7){
    console.log(`Solo te alcanza para el Bombón marca heladix y te sobrarian $${dineroPedro - 1.6}`);
}else if(dineroPedro >= 1.7 && dineroPedro < 1.8){
    console.log(`Solo te alcanza para el Bombón marca heladovich y te sobrarian $${dineroPedro - 1.7}`);
}else if(dineroPedro >= 1.8 && dineroPedro < 2.9){
    console.log(`Solo te alcanza para el Bombón marca helardo y te sobrarian $${dineroPedro - 1.8}`);
}else if(dineroPedro >= 2.9){
    console.log(`Te alcanza para los 2 helados mas caros que son Potecito de helado con confites
    o 
    El pote de 1/4 KG y te sobrarian $${dineroPedro-2.9}`);
}
else{
    console.log(`Lo siento no te alcanza para ningun helado Pedro`);
}
//Cofla
console.log(`Roberto puedes comprar los siguientes helados con tu presupuesto de $${dineroCofla}`);
if(dineroCofla >= 0.6 && dineroCofla < 1){
    console.log(`Solo te alcanza para el palito de helado de agua y te sobraria $${dineroCofla - 0.6}`);
}else if(dineroCofla >= 1 && dineroCofla < 1.6){
    console.log(`Solo te alcanza para el palito de helado de crema y te sobra $${dineroCofla - 1}`);
}else if(dineroCofla >= 1.6 && dineroCofla < 1.7){
    console.log(`Solo te alcanza para el Bombón marca heladix y te sobrarian $${dineroCofla - 1.6}`);
}else if(dineroCofla >= 1.7 && dineroCofla < 1.8){
    console.log(`Solo te alcanza para el Bombón marca heladovich y te sobrarian $${dineroCofla - 1.7}`);
}else if(dineroCofla >= 1.8 && dineroCofla < 2.9){
    console.log(`Solo te alcanza para el Bombón marca helardo y te sobrarian $${dineroCofla - 1.8}`);
}else if(dineroCofla >= 2.9){
    console.log(`Te alcanza para los 2 helados mas caros que son Potecito de helado con confites
    o 
    El pote de 1/4 KG y te sobrarian $${dineroCofla-2.9}`);
}
else{
    console.log(`Lo siento no te alcanza para ningun helado Cofla`);
}