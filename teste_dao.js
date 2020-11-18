const AlunoDao = require('./dao/aluno-dao');

let dao = new AlunoDao();

dao.findById(1).then((result) => {
    
    if (result.length > 0){
        console.log('----------------------');
        aluno = result[0]
        console.log(aluno);
        console.log(aluno.nome);
    }else{

        console.log('Não foi encontrado resultado!')
    }

}).catch( (err) => {
    console.log(err);
});