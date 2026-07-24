// C >> Create  >> Cadastrar
// R   >> Read   >> Ler
// U   >>  Update  >> alterar/atualizar/editar/fuçar/mudar
// D   >>  Delete  >> Apagar/deletar/excluir

// um site pra logar filmes, dar nota, fazer review, 
// e recbeer recomendaçao de 5 filmes baseado em um genero escolhido

// id: Um identificador único ( Date.now()).

// titulo: O nome do filme (texto).

// ano: ano de lançamento (numero).).

// nota: A avaliação de 1 a 5 estrelas (número).

// resenha: A opinião/comentário do usuário sobre o filme (texto longo).

let filmes = []

function cadastrarFilme() {
const novoFilme = {
nome: document.getElementById('input-nome').value,
ano: Number(document.getElementById("input-ano").value),
nota: Number(document.getElementById("input-nota").value),
resenha: document.getElementById("input-resenha").value,
genero: document.getElementById("input-genero-cadastro").value
}
filmes.push(novoFilme);

console.log(filmes);

limparFormulario()
mostrarTodos()
}

function limparFormulario() {
document.getElementById('input-nome').value = ''
document.getElementById('input-ano').value = ''
document.getElementById('input-nota').value = ''
document.getElementById('input-resenha').value = ''
document.getElementById('input-genero-cadastro').value = ''
}

function mostrarTodos(){
document.getElementById('painel-filmes').innerHTML = '' 

for(let i=0; i<filmes.length; i++){
document.getElementById('painel-filmes').innerHTML += `<div class="card-filme">
 <h2>${filmes[i].nome}</h2>
 <p>ano: ${filmes[i].ano}</p>
 <p>gênero: ${filmes[i].genero}</p>
 <p>nota: ${filmes[i].nota}</p>
 <p>resenha: ${filmes[i].resenha}</p>
    </div>` 
}
}

function recomendarFilmes(){
let painelDeRecomendacoes = [
  { 
    titulo: "Scarface", 
    genero: "Ação",
    imagem: " " 
  },
  { 
    titulo: "Tropa de Elite", 
    genero: "Ação",
    imagem: " " 
  },
  { 
    titulo: "O Cavaleiro das Trevas", 
    genero: "Ação",
    imagem: " " 
  },
  { 
    titulo: "John Wick", 
    genero: "Ação",
    imagem: " " 
  },
  { 
    titulo: "Matrix", 
    genero: "Ação",
    imagem: " " 
  },
  { 
    titulo: "Superbad", 
    genero: "Comédia",
    imagem: " " 
  },
  { 
    titulo: "i'm a cyborg but that's ok", 
    genero: "Comédia",
    imagem: " " 
  },
  { 
    titulo: "Shaun of the dead", 
    genero: "Comédia",
    imagem: " " 
  },
  { 
    titulo: "Amélie", 
    genero: "Comédia",
    imagem: " " 
  },
  { 
    titulo: "Dazed and confused", 
    genero: "Comédia",
    imagem: " " 
  },
  
  { 
    titulo: "Possessão", 
    genero: "Terror",
    imagem: " " 
  },
  { 
    titulo: "A bruxa", 
    genero: "Terror",
    imagem: " " 
  },
  { 
    titulo: "Bebê de Rosemary", 
    genero: "Terror",
    imagem: " " 
  },
  { 
    titulo: "Psicose", 
    genero: "Terror",
    imagem: " " 
  },
  { 
    titulo: "O Iluminado", 
    genero: "Terror",
    imagem: " " 
  },
  { 
    titulo: "Brilho Eterno de uma Mente sem Lembranças", 
    genero: "Romance",
    imagem: " " 
  },
  { 
    titulo: "In the mood of love", 
    genero: "Romance",
    imagem: " " 
  },
  { 
    titulo: "Chungking express", 
    genero: "Romance",
    imagem: " " 
  },
  {
    titulo: "Diario de uma paixão", 
    genero: "Romance",
    imagem: " " 
  },
  { 
    titulo: "Edward mãos de tesoura", 
    genero: "Romance",
    imagem: " " 
  },
  { 
    titulo: "Coraline", 
    genero: "Animação",
    imagem: " " 
  },
  { 
    titulo: "Tá dando onda", 
    genero: "Animação",
    imagem: " " 
  },
  { 
    titulo: "O Fantastico senhor raposo", 
    genero: "Animação",
    imagem: " " 
  },
  {
    titulo: "Rango", 
    genero: "Animação",
    imagem: " " 
  },
  { 
    titulo: "O espanta tubarões", 
    genero: "Animação",
    imagem: " " 
  },
  { 
    titulo: "Project Hail Mary", 
    genero: "Ficção Científica",
    imagem: " " 
  },
  { 
    titulo: "Frankenstein", 
    genero: "Ficção Cientifica",
    imagem: " " 
  },
  { 
    titulo: "28 Dias depois", 
    genero: "Ficção Cientifica",
    imagem: " " 
  },
  { 
    titulo: "Matrix", 
    genero: "Ficção Cientifica",
    imagem: " " 
  },
  { 
    titulo: "Donnie Darko", 
    genero: "Ficção Cientifica",
    imagem: " " 
  },
  { 
    titulo: "Memories of a murder", 
    genero: "Drama",
    imagem: " " 
  },
  { 
    titulo: "Mysterious skin", 
    genero: "Drama",
    imagem: " " 
  },
  { 
    titulo: "The Elephant man", 
    genero: "Drama",
    imagem: " " 
  },
  {
    titulo: "Trainspotting", 
    genero: "Drama",
    imagem: " " 
  },
  { 
    titulo: "Crash", 
    genero: "Drama",
    imagem: " " 
  },
  { 
    titulo: "Hocus Pocus", 
    genero: "Fantasia",
    imagem: " " 
  },
  { 
    titulo: "Alice no pais das maravilhas", 
    genero: "Fantasia",
    imagem: " " 
  },
  { 
    titulo: "The science of sleep", 
    genero: "Fantasia",
    imagem: " " 
  },
  { 
    titulo: "História sem fim", 
    genero: "Fantasia",
    imagem: " " 
  },
  { 
    titulo: "Labirinto do Fauno", 
    genero: "Fantasia",
    imagem: "" 
  }
];

let generoEscolhido = document.getElementById('filtro-recomendacao').value;
let painel = document.getElementById('painel-recomendacoes');
  
painel.innerHTML = '';

if (generoEscolhido === "") {
painel.innerHTML = '<p>Por favor, selecione um gênero.</p>';
return;
}

let filmesSelecionados = painelDeRecomendacoes.filter(function(filme){
return filme.genero === generoEscolhido;
});

}