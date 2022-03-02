/*

 Buscando e contando dados em Arrays

Beaseado no Array de Livros por Categoria abaixo, faça os seguintes desafios

 *Contar o n´~umero de categorias e o número de livros em cada categoria
 *Contar o número de autores
 *Mostrar livros do autor Augusto Cury
 *Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor

*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos de pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const countCategoriesAndBooks = (object) => {
    console.log('Número de categorias: ' + object.length);
    for(let category of object){
        console.log(`Total de livros categoria ${category.category}:`);
        console.log(category.books.length);
    }
}

countCategoriesAndBooks(booksByCategory);


const countAuthors = (array) => {
    let authors = [];
  for(let category of array){
      for(let book of category.books){
          const includeAuthor = authors.includes(book.author) ? '' : authors.push(book.author);
      }
  }
  console.log('Total de autores: ', authors.length);
}

countAuthors(booksByCategory);

const booksOfAuthor = (array, author) => {
    let books = [];

    for(let category of array){
        for(let book of category.books){
            if(book.author === author){
                books.push(book.title);
            }
        }
    }
    console.log('Livros do autor: ', books);
}

booksOfAuthor(booksByCategory,'Stephen R. Covey');



