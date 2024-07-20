let livros =  [ 3 , 2 ,5 ,1, 9 ,4 ]
 let livro = livros[0]
let finish = []

for( let i = 0; i < livros.length; i++) {
    if(livros[i]> livro) {
        livro = livros[i]
         
    } if (livro  > livros[i]) {
        finish.unshift(livro)
    } else {
        finish.splice(1, 0, livro)
    }
}