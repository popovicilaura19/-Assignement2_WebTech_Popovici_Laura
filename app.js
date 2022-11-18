function addTokens(input, tokens){
    if(typeof input !== "string"){
        throw new Error("Input should be a string");
   }
   if(input.length < 6){
        throw new Error("Input should have at least 6 characters");
   }
   tokens.forEach(token=>{
        if(typeof token.tokenName !== "string" ){
             throw new Error("Invalid array format");
        }
   });
   if(!input.includes("...")){
        return input;
   } else {
        tokens.forEach(token=>{
             input = input.replace("...", "${"+token.tokenName+"}");
        })
        return input;
   }
}

const app = {
    addTokens: addTokens
}

module.exports = app;



 
