/* Crie uma tabela em um banco de dados com o OMR Sequelize e delete dado nessa tabela. */


(async()=>{

    const database = require('./db');
    const Aluno = require('./aluno');
    await database.sync();
    
    const alunos = await Aluno.findByPk(3);
    await alunos.destroy(1);

})();