function validade() {
  let login = document.getElementById("login").value;
  let senha = document.getElementById("senha").value;

  if (login == "" || senha == "") {
    alert("por favor, preencha todos os campos");
    return false;
  } else if (login == "portaria" && senha == "nivel2") {
    window.open("./indexLocal.html");
  } else if (login == "usuario" && senha == "acesso1") {
    window.open("./paginaUsuario.html");
  } else {
    alert("Nome de usuário ou senha incorretos");
    return false;
  }
}
