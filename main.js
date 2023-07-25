
// const formulario = document.querySelector('[data-formulario]');

// formulario.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const listaRespostas = {
//         nome: e.target.elements["nome"].value,
//         email: e.target.elements["email"].value,
//         assunto: e.target.elements["assunto"].value,
//         mensagem: e.target.elements["mensagem"].value,
//     };

//     const params = new URLSearchParams();
//     params.append("subject", listaRespostas.assunto);
//     params.append(
//         "body",
//         `   Nome: ${listaRespostas.nome}
//             Email: ${listaRespostas.email}
//             Mensagem: ${listaRespostas.mensagem}`
//     );

//     const mailtoLink = `mailto:luma.mantelli123@gmail.com?${params.toString().replaceAll("+", " ")}`;

//     window.location.href = mailtoLink;
//     console.log(mailtoLink)
// })

$(function () {
    document.getElementById('contatoForm').addEventListener('submit', function () {
          var nome = this.querySelector('input[name=nome]'), nome = nome.value;
          var email = this.querySelector('input[name=email]'), email = email.value;
          var texto = 'Olá destinatário, \nMeu nome é '+ nome +' e meu email é '+ email;
          this.querySelector('input[name=Body]').setAttribute('value', texto);
      });
    });