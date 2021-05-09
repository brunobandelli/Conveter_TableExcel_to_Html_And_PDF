var Reader = require("./Reader");
var Processor = require("./Processor");
var Table = require("./Table");

var leitor = new Reader();

async function main(){
    var dados = await leitor.Read("./user.csv");
    var dadosProcessados = Processor.Process(dados);
    var usuarios = new Table(dadosProcessados)

    console.log(usuarios.RowCount);
    console.log(usuarios.ColumnCount);

}



main();
