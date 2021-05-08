// const fs = require("fs");

// function modificarUsuario(nome, curso, categoria){
//     fs.readFile("./usuario.json", {encoding: 'utf-8'}, (erro, dados) => {

//         if(erro){
//             console.log("Um erro aconteceu!");
//         }else{
//             var conteudo = JSON.parse(dados);
    
//             conteudo.nome = nome,
//             conteudo.curso = curso,
//             conteudo.categoria = categoria
    
//             fs.writeFile("./usuario.json", JSON.stringify(conteudo),(erro) => {
//                 if(erro){
//                         console.log("Um erro aconteceu durante a escrita!")
//                 }
//             })
    
//             console.log(conteudo)
//         }
    
//     })
// }

modificarUsuario("Bandellão Brunão", "JS TA TÁ TRANKIS", "JARVISCRIPERTS")


// var conteudo;

// fs.writeFile("./bruno.bandelli", "Nome: Bruno Bandelli",(err) =>{

//     if(err){
//         console.log("Erro durante o salvamento...")
//     }
// });

// fs.readFile("./bruno.bandelli",{encoding: 'utf-8'},(erro, dados) => {

//     if(erro){
//         console.log("Ocorreu uma falha durante a leitura do arquivo!");
//     }else{
//         console.log(dados);
//     }
// })