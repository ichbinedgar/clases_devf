const encontrarDuplicado  = (arr) => {
	let pila = [];
  let len = arr.length;
  
  for(let i=0;i<len;i++){
  
  	if(pila.length === 0){
    	pila.push(arr[i]);      
    }else{
    	let found = false;
    	pila.forEach((e) => {
      	if(e === arr[i]){
        	console.log('el numero duplicado fue '+e)
        	found = true;
        }
      })
      if(found) return;
      pila.push(arr[i])
    } 
    
  }  
  
  console.log('el duplicado no fue encontrado')
}

encontrarDuplicado([1,3,4,10,4,7,8,11,30])