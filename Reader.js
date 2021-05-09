
const fs = require("fs")
const util = require("util")


class Reader{

    constructor(){
        this.reader = util.promisify(fs.readFile)
    }

    async Read(filepath){
        try{
        return this.reader(filepath, "utf8")
        }catch(err){
            return undefined;
        }

        // fs.readFile(filepath,"utf8", (err,data) =>{
        // if(err){
        //     console.log(err)
        // }else{
        //     console.log(data)
        // }

        // })
        

    }
}

module.exports = Reader