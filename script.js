// Função responsável por alternar o modo do site (claro <-> escuro)
// e também trocar a imagem do perfil de acordo com o tema.
function togglemode() {
  // 1️⃣ Pega o elemento raiz do documento HTML
  // `document.documentElement` representa a tag <html>
  // Isso é útil porque ao mudar a classe dessa tag,
  // todo o site pode mudar de aparência usando CSS.
  const html = document.documentElement;

  // 2️⃣ Alterna (liga/desliga) a classe "light" no elemento <html>
  // - Se a classe "light" NÃO existir, ela é adicionada.
  // - Se ela JÁ existir, ela é removida.
  // Isso permite alternar o tema entre escuro e claro.
  html.classList.toggle("light");

  // 3️⃣ Seleciona a imagem dentro do elemento que tem id="profile"
  // O seletor "#profile img" significa:
  // "Pegue a tag <img> que está dentro de um elemento com o id 'profile'"
  const img = document.querySelector("#profile img");

  // 4️⃣ Verifica se a classe "light" está presente no <html>
  // Isso indica que o tema claro está ativado.
  if (html.classList.contains("light")) {
    // 5️⃣ Se o modo claro estiver ativo,
    // muda a imagem do perfil para a versão "clara"
    // usando o método setAttribute() para alterar o atributo 'src' da imagem.
    img.setAttribute("src", "./assets/avatar-light.png");
  } else {
    // 6️⃣ Caso contrário (modo escuro),
    // muda a imagem de volta para a versão "escura" padrão.
    img.setAttribute("src", "./assets/avatar.png");
  }
}
