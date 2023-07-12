# Youtube Toolbox

Este repositório foi criado como parte de um desafio técnico. O objetivo era escolher um site favorito, em que nesse caso foi o **Youtube** e desenvolver uma extensão com 3 funcionalidades.
"Youtube Toolbox" é uma extensão para o navegador Google Chrome, criada para aprimorar a experiência do usuário ao utilizar o YouTube. Ela oferece três funcionalidades úteis que visam facilitar a busca de vídeos relacionados a um determinado texto selecionado, acessar rápidamente as páginas do Youtube e também gravar o histórico dessas buscas.

## Funcionalidades

1. **Pesquisar no YouTube:** Ao clicar com o botão direito do mouse em um texto selecionado em qualquer página da web e selecionar a opção "Search Youtube for 'exemplo'", a extensão irá abrir uma nova guia no navegador com os resultados da pesquisa no YouTube para a palavra selecionada.
   
2. **Menu com opções:** Menu com opções para acesso rápido às principais seções do YouTube. As opções disponíveis são:
   - [Homepage do YouTube](https://www.youtube.com/): Redireciona para a página inicial do YouTube.
   - [Inscrições](https://www.youtube.com/feed/subscriptions): Leva à página de inscrições do YouTube.
   - [Biblioteca](https://www.youtube.com/feed/library): Acessa a biblioteca de vídeos do YouTube.
   - [Histórico](https://www.youtube.com/feed/history): Mostra o histórico de vídeos assistidos no YouTube.
   - [Assistir Mais Tarde](https://www.youtube.com/playlist?list=WL): Abre a lista "Assistir Mais Tarde" do YouTube.
   - [YouTube Shorts](https://www.youtube.com/shorts): Navega pelos vídeos curtos populares no YouTube.

3. **Histórico de busca:** A extensão também possui um histórico de busca, que grava todas as pesquisas realizadas através do menu com opções. Você pode visualizar o histórico no menu da extensão **somente quando alguma pesquisa foi feita com a primeira funcionalidade**.
   - Para limpar todo o histórico de busca, utilize o botão "Limpar", ao limpar o **histórico de busca some**.

## Como usar

Para começar a usar a extensão "Youtube Toolbox", siga as etapas abaixo:

1. Clone o repositório da extensão do GitHub.
2. Use o comando `pnpm install`.
3. Use o comando `pnpm dev`.
4. Abra seu navegador e vá para a página de extensões.
5. Ative o modo de desenvolvedor.
6. Carregue a extensão selecionando "Load unpacked" e selecione a paste criada em build pelo comando pnpm dev.
7. Agora, a extensão "Youtube Toolbox" estará disponível na barra de extensões do navegador.


