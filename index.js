const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection,callB) { 
      let coll= (Array.isArray(collection))? collection.slice(): Object.values(collection)
      for (let index=0; index<coll.length; index++)
      callB(coll[index])
      return collection
    },

    map: function(collection,callB) {
      if (!(Array.isArray(collection)))
         collection=Object.values(collection)
      const newarray=[];
      
      for (let i=0; i<collection.length; i++)
      newarray.push(callB(collection[i]));
      return newarray;
    
    },

    reduce: function(arr=[], callB = () => {}, acc) {
        if(!acc)
        acc = collection[0]
        
        for (let elt of arr){
          acc= CallB(acc,elt)
        }
        return acc;
    },

    filter: function(array, test) {
         let passed = [];
         for (let element of array) {
         if (test(element)) {
         passed.push(element);
           }
       }
     return passed;
    
    },


  }
})()

fi.libraryMethod()
