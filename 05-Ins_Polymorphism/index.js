const PolyFunction = function(){
  this.stringBinder = function(string1, string2){
    if(!string1 && !string2){
      console.log("Invalid inputs")
      return
    }
    if(!string2){
      console.log(string1);
      return
    } else {
      console.log(string1+string2);
      return
    }
  }
}

const polyInstance1 = new PolyFunction();

polyInstance1.stringBinder(null, " more data");