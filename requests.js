
// //Async Example  with Promise API 
const getPuzzle =  async (wordCount) => {
     const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
     if(response.status === 200){
         const data  = await response.json()
         console.log(data.puzzle)
         return  data.puzzle// returns as data 
     }else{
        throw new Error('Failed Response')
    }

}



