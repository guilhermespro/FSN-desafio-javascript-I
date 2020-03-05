// Base a ser utilizada
const alunosDaEscola=[{nome:"Henrique",notas:[],cursos:[],faltas:1},{nome:"Edson",notas:[],cursos:[],faltas:2},{nome:"Bruno",notas:[10,9.8,9.6],cursos:[],faltas:0},{nome:"Guilherme",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"Full Stack",dataMatricula:new Date}],faltas:0},{nome:"Carlos",notas:[],cursos:[],faltas:0},{nome:"Lucca",notas:[10,9.8,9.6],cursos:[{nomeDoCurso:"UX",dataMatricula:new Date}],faltas:0}];
listarAlunos();
var aluno = buscarAluno("Henrique");
console.log(aluno.faltas);
matricularAluno(aluno, "Fotografia");
aplicarFalta({nome:"Henrique"});
console.log(aluno.faltas);
aplicarNota(aluno);
aplicarNota(aluno);
aplicarNota(aluno);
aprovarAluno(aluno);
// implementação

const adicionarAluno = (nomeAluno) => {
   if(String(aluno).length > 0) {
      alunosDaEscola.push({nome:nomeAluno,notas:[],cursos:[],faltas:5});
      return "Aluno incluido com sucesso.";
   }else {
      return "Aluno invalido. Verifique e tente novamente.";
   }
}

function listarAlunos() {
   var stringBuilder = "";
   for (const aluno of alunosDaEscola) {
      stringBuilder += "Nome: " + aluno.nome + "\n";
      //NOTAS
      for(var i=0; i < aluno.notas; i++) {
         stringBuilder += "Nota" + i + ": " + aluno.notas[i];
         if(i == aluno.notas.length - 1) {
            stringBuilder += ". \n";
         }else {
            stringBuilder += ",";
         }
      }
      //CURSOS
      for(var i=0; i < aluno.cursos; i++) {
         stringBuilder += "Curso" + i + ": " + aluno.cursos[i];
         if(i == aluno.cursos.length - 1) {
            stringBuilder += ". \n";
         }else {
            stringBuilder += ",";
         }
      }
      //FALTAS
      stringBuilder += "Faltas: " + aluno.faltas + "\n";

      console.log(stringBuilder);
   }
}

function buscarAluno(nomeAluno) {
   var alunoEncontrado = alunosDaEscola.filter(function(aluno) {
      if(aluno.nome == nomeAluno) {
         return aluno;
      }
    });

   if(alunoEncontrado.length > 0) {
      console.log("Aluno: " + nomeAluno + " encontrado.");
      return alunoEncontrado[0];
   } else {
      console.log("Aluno nao encontrado." );
       return alunoEncontrado;
   }
}

function matricularAluno(aluno, curso) {
   let indexOfAluno = alunosDaEscola.map(function(e) {return e.nome}).indexOf(buscarAluno(aluno.nome).nome);
   if(indexOfAluno != - 1) {
      alunosDaEscola[indexOfAluno].cursos.push({nomeDoCurso: curso, dataDeMatricula: getDateNowString()});
      console.log("Aluno: " + aluno.nome + " foi matriculado no curso " + curso + " com sucesso.");
   } else {
      console.log("Aluno nao encontrado. Erro ao realizar matricula");
   }
}

function getDateNowString() {
   const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    let dateObj = new Date();
    let month = monthNames[dateObj.getMonth()];
    let day = String(dateObj.getDate()).padStart(2, '0');
    let year = dateObj.getFullYear();
    return day  + '/'+ month  + '/' + year;
}

function aplicarFalta(aluno) {
/*
  Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá incrementar uma falta ao aluno. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar falta em aluno se o mesmo tiver matriculado em um curso.
 */

   let indexOfAluno = alunosDaEscola.map(function(e) {return e.nome}).indexOf(buscarAluno(aluno.nome).nome);
   if(indexOfAluno != - 1) {
      var aluno = alunosDaEscola[indexOfAluno];
      if(aluno.cursos.length > 0) {
         aluno.faltas++;
      } else {
         console.log("Este aluno nao esta matriculado em nenhum curso.");
      }
   } else {
      console.log("Aluno nao encontrado. Nao foi possivel aplicar a falta.");
   }
}

function aplicarNota(aluno) {
/*
  Ao receber um aluno devidamente cadastrado em nossa lista. Você deverá adicionar uma nota ao aluno na sua lista de notas. Você deverá dar um feedback ao concluir a tarefa. Só poderá aplicar nota em aluno se o mesmo tiver matriculado em um curso.
 */
   let indexOfAluno = alunosDaEscola.map(function(e) {return e.nome}).indexOf(buscarAluno(aluno.nome).nome);
   if(indexOfAluno != - 1) {
      var aluno = alunosDaEscola[indexOfAluno];
      if(aluno.cursos.length > 0) {
         aluno.notas.push(8);
         console.log("Foi aplicada a nota 8 " + "para: " + aluno.nome);
      } else {
         console.log("Este aluno nao esta matriculado em nenhum curso.");
      }
   } else {
      console.log("Aluno nao encontrado. Nao foi possivel aplicar a nota.");
   }
}

function aprovarAluno(aluno) {
/* 
  Ao receber um aluno devidamente cadastrado em nossa lista, deverá dizer se o mesmo está aprovado ou não. Os critérios de aprovação são: ter no máximo 3 faltas e média 7 em notas.
  Só o aluno só poderá ser aprovado se o mesmo tiver matriculado em um curso.
  */
   let indexOfAluno = alunosDaEscola.map(function(e) {return e.nome}).indexOf(buscarAluno(aluno.nome).nome);
   if(indexOfAluno != - 1) {
      var aluno = alunosDaEscola[indexOfAluno];
      if(aluno.cursos.length > 0) {
         const soma = aluno.notas.reduce((a, b) => a + b, 0);
         const media = (soma / aluno.notas.length) || 0;
         if(aluno.faltas < 4 && media >= 7) {
            console.log("Aluno: " + aluno.nome + " foi aprovado!");
         }else {
            console.log("Aluno: " + aluno.nome + " foi reprovado!");
         }
      } else {
         console.log("Este aluno nao esta matriculado em nenhum curso.");
      }
   } else {
      console.log("Aluno nao encontrado. Nao foi possivel aprovar aluno.");
   }
}