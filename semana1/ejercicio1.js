const subCadena  = (cadena) => {
	let pila = [];
  let len = cadena.length;
  
  for(let i=0;i<len;i++){
  
  	if(pila.length === 0){
    	pila.push(cadena.charAt(i))
    }else{
    	if( pila.join().indexOf(cadena.charAt(i)) <=-1 ){
      	pila.push(cadena.charAt(i))
      }
    }
    
  }
  
  console.log(pila.length,'---tamaño')
  console.log(pila.join(''),'---cadena mas grande')
  
}

subCadena('abcabccbb')