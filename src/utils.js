export function getProducts (){
    console.log("GET PRODUCTS")
 
    return fetch('https://652bc16bd0d1df5273eeabf8.mockapi.io/empanadaslist')

    .then((respuesta)=>{
    console.log(respuesta)
    if(respuesta.status < 400){
        console.log("termino el pedido bien")
    } else {
        console.log("termino el pedido mal")
    }
    const datos = respuesta.json() // esto lo que hace es transformar lo de la url en json y cuando se cumple, lo pasa a la segunda promesa then
    return datos 
      
    })
    .then ((respuesta)=>{
     return respuesta
    })
   
.catch((error)=>{
    console.log("termino el pedido mal")
    console.log(error)
    })
}
  

    console.log("Ultimo de todos")