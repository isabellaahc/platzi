/*los navegadores podrían soportar o no las promesas
las promesas son valores que aún no conocemos, es la promesa de que ahí habrá un valor cuando una accion asyncrona suceda.
Estas pueden tener 3 estados:
- pending: al crear las promesas se inician en este estado
- fullfilled: cuando la promesa se resuelve correctamente
- rejected: cuando la promesa tienen algun error en la ejecución

¿como podemos obtener el valor de las promesas?

        -> resolve -> fullfilled -> .then(val =>)
pending
        -> reject -> rejected -> .catch(err =>)


*/