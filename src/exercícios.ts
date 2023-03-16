/**
 * EXERCÍCIOS
 *
 * Antes de começar, certifique-se de instalar as
 * dependências do projeto utilizando "npm install"
 *
 * Você pode executar o arquivo dos exercícios usando F5, e pode colocar breakpoints no lado esquerdo da linha
 *
 * 1- Crie um tipo para representar um objeto que contenha as suas informações de
 * nome, profissão, idade e uma lista de assuntos de seu interesse.
 *
 * 2 - Crie um objeto utilizando o tipo criado no exercício 1 e o popule de acordo com suas informações.
 *
 * 3 - Faça uma função que receba como argumento um objeto do tipo do exercício 1,
 * e retorne somente a lista de assuntos do objeto.
 *
 * 4 - Coloque a tipagem tanto no argumento da função do exercício 3 quanto no tipo de retorno dela.
 *
 * 5 - Crie um enum para representar as Matérias do curso (Angular, Typescript e Git)
 *
 * 6 - Crie mais um tipo para representar os professores, contendo nome e uma lista das materias de cada um.
 *
 * 7 - Crie os objetos Alan e Nathan utilizando os tipos dos exercícios 5 e 6.
 * Nathan = Angular e Git, Alan = Angular, Typescript e Git
 *
 * 8 - Declare e popule um array com os objetos do exercício 7.
 *
 * 9 - Faça uma função que receba um argumento de array de Professor
 * e retorne um novo array de strings contendo somente os nomes dos professores.
 *
 * 10 - Faça uma função que receba um argumento de array de Professores e retorne um array de materias.
 *
 * 11 - Faça uma função que receba um argumento de array de Professores e
 * retorne o primeiro Professor encontrado que dê aula de Typescript.
 *
 */


//----------------------------------------------------01----------------------------------------------------//

interface IPerfil {
  name: string;
  profession: string;
  year: number;
  interest: string[];
}
//----------------------------------------------------02----------------------------------------------------//

const perfil: IPerfil = {
  name: "Naiane Pinheiro Reis",
  profession: "web developer",
  year: 27,
  interest: ["Viagens", "jogos", "culinária", "tecnologia", "arte"],
};

//----------------------------------------------------03 e 04----------------------------------------------------//

type IPerfilFunction = (perfil: IPerfil) => string[];

const perfilFunction: IPerfilFunction = (perfil) => {
  return perfil.interest;
};

//----------------------------------------------------05----------------------------------------------------//

enum courseMaterial {
  Angular = "Angular",
  TypeScript = "TypeScript",
  Git = "Git",
}

//----------------------------------------------------06----------------------------------------------------//

interface ITeacher {
  name: string;
  courseMaterial: courseMaterial[];
}

//----------------------------------------------------07----------------------------------------------------//
const teacher1: ITeacher = {
  name: "Alan",
  courseMaterial: [courseMaterial.TypeScript, courseMaterial.Git],
};

const teacher2: ITeacher = {
  name: "Nathan",
  courseMaterial: [courseMaterial.Angular, courseMaterial.Git],
};

//----------------------------------------------------08----------------------------------------------------//


const arrayTeachers: ITeacher[] = [teacher1, teacher2];

//----------------------------------------------------09----------------------------------------------------//


type ITeacherFunction = (array: ITeacher[]) => string[];

const teacherFunction: ITeacherFunction = (array) => {
  return array.map((ele) => ele.name);
};

//----------------------------------------------------10----------------------------------------------------//

type ICourseFunction = (array: ITeacher[]) => courseMaterial[];

const courseFunction: ICourseFunction = (array) => {
  const result: courseMaterial[] = [];
  array.forEach((ele) =>
    ele.courseMaterial.forEach((course) => result.push(course))
  );
  return result;
};

//----------------------------------------------------11----------------------------------------------------//

type IFindTeacher = (array: ITeacher[]) => ITeacher | undefined;

const findTeacher: IFindTeacher = (array) => {
  const teacher = array.find((ele) =>
    ele.courseMaterial.find((course) => course == courseMaterial.TypeScript)
  );
  return teacher;
};
