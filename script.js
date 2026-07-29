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



let filmes = [];

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

limparFormulario();
mostrarTodos();
}


function limparFormulario() {
document.getElementById('input-nome').value = '';
document.getElementById('input-ano').value = '';
document.getElementById('input-nota').value = '';
document.getElementById('input-resenha').value = '';
document.getElementById('input-genero-cadastro').value = '';
}


function limparLista() {
filmes = []; 
mostrarTodos(); 
}


function mostrarTodos() {
document.getElementById('painel-filmes').innerHTML = ''; 

for(let i = 0; i < filmes.length; i++) {
document.getElementById('painel-filmes').innerHTML += `
  <div class="card-filme">
    <h2>${filmes[i].nome}</h2>
      <p>Ano: ${filmes[i].ano}</p>
      <p>Gênero: ${filmes[i].genero}</p>
      <p>Nota: ${filmes[i].nota}</p>
      <p>Resenha: ${filmes[i].resenha}</p>
   
    <button onclick="editarFilme(${i})">Editar</button>
    <button onclick="excluirFilme(${i})">Excluir</button>
  </div><br>`; 
}
}


function editarFilme(i) {
document.getElementById('input-nome').value = filmes[i].nome;
document.getElementById('input-ano').value = filmes[i].ano;
document.getElementById('input-nota').value = filmes[i].nota;
document.getElementById('input-resenha').value = filmes[i].resenha;
document.getElementById('input-genero-cadastro').value = filmes[i].genero;

filmes.splice(i, 1); 

mostrarTodos();
}


function excluirFilme(i) {
filmes.splice(i, 1);
mostrarTodos();
}


function recomendarFilmes() {

let painelDeRecomendacoes = [
  { titulo: "Scarface", genero: "Ação", imagem: "img/scarface.jpg" },
  { titulo: "Oldboy", genero: "Ação", imagem: "img/oldboy.webp" },
  { titulo: "O Cavaleiro das Trevas", genero: "Ação", imagem: "img/batman.jpg" },
  { titulo: "Os pecadores", genero: "Ação", imagem: "img/sinners.jpg" },
  { titulo: "Matrix", genero: "Ação", imagem: "img/matrix.jpg" },
        
  { titulo: "Superbad", genero: "Comédia", imagem: "img/superbad.jpg" }, 
  { titulo: "I'm a Cyborg, But That's OK", genero: "Comédia", imagem: "img/cyborg.jpg" }, 
  { titulo: "Todo Mundo Quase Morto", genero: "Comédia", imagem: "img/shaun.jpg" }, 
  { titulo: "Amélie", genero: "Comédia", imagem: "img/amelie.jpg" }, 
  { titulo: "Jovens, Loucos e Rebeldes", genero: "Comédia", imagem: "img/dazed.jpg" },
        
  { titulo: "Possessão", genero: "Terror", imagem: "img/possessao.jpg" }, 
  { titulo: "A Bruxa", genero: "Terror", imagem: "img/witch.jpg" }, 
  { titulo: "O Bebê de Rosemary", genero: "Terror", imagem: "img/rosemary.jpg" }, 
  { titulo: "Psicose", genero: "Terror", imagem: "img/psicose.jpg" }, 
  { titulo: "O Iluminado", genero: "Terror", imagem: "img/iluminado.jpg" }, 
        
  { titulo: "Brilho Eterno de uma Mente sem Lembranças", genero: "Romance", imagem: "img/eternalsunshine.webp" },
  { titulo: "Amor à Flor da Pele", genero: "Romance", imagem: "img/mood.webp" },
  { titulo: "Amores Expressos", genero: "Romance", imagem: "img/chungking.webp" }, 
  { titulo: "Diário de uma Paixão", genero: "Romance", imagem: "img/diario.webp" }, 
  { titulo: "Edward Mãos de Tesoura", genero: "Romance", imagem: "img/edward.jpg" }, 
        
  { titulo: "Coraline", genero: "Animação", imagem: "img/coraline.jpg" }, 
  { titulo: "Tá Dando Onda", genero: "Animação", imagem: "img/onda.jpg" }, 
  { titulo: "O Fantástico Senhor Raposo", genero: "Animação", imagem: "img/raposo.jpg" },
  { titulo: "101 Dáltamas", genero: "Animação", imagem: "img/101dalmata.jpg" }, 
  { titulo: "O Espanta Tubarões", genero: "Animação", imagem: "img/espanta.jpg" }, 
        
  { titulo: "Devoradores de Estrelas", genero: "Ficção Científica", imagem: "img/project.jpg" }, 
  { titulo: "Frankenstein", genero: "Ficção Científica", imagem: "img/frankenstein.webp" },
  { titulo: "Extermínio", genero: "Ficção Científica", imagem: "img/28days.jpg" }, 
  { titulo: "Blade Runner", genero: "Ficção Científica", imagem: "img/blade.jpg" }, 
  { titulo: "Donnie Darko", genero: "Ficção Científica", imagem: "img/donnie.jpg" },       

  { titulo: "Memórias de um Assassino", genero: "Drama", imagem: "img/memories.jpg" },
  { titulo: "Mistérios da Carne", genero: "Drama", imagem: "img/mysterious.jpg" },
  { titulo: "A caça", genero: "Drama", imagem: "img/caça.jpg" },
  { titulo: "Trainspotting", genero: "Drama", imagem: "img/trainspotting.jpg" },
  { titulo: "Crash", genero: "Drama", imagem: "img/crash.jpg" },

  { titulo: "Abracadabra", genero: "Fantasia", imagem: "img/hocus.jpeg" },
  { titulo: "Alice no País das Maravilhas", genero: "Fantasia", imagem: "img/alice.jpg" },
  { titulo: "A Ciência do Sono", genero: "Fantasia", imagem: "img/sleep.jpg" },
  { titulo: "A História Sem Fim", genero: "Fantasia", imagem: "img/neverending.webp" },
  { titulo: "O Labirinto do Fauno", genero: "Fantasia", imagem: "img/labirinto.jpg" }
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

for(let i = 0; i < filmesSelecionados.length; i++) {
painel.innerHTML += `
  <div class="card-recomendacao">
   <img src="${filmesSelecionados[i].imagem}" alt="Poster de ${filmesSelecionados[i].titulo}">
     <h4>${filmesSelecionados[i].titulo}</h4>
  </div>`;
}
}