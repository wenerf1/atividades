function cadastro(){
    let nome = prompt('Digite o nome');
    let email = prompt('Digite seu e-mail');
    let telefone = prompt('Digite seu telefone');
 
    console.log('Nome: ' + nome);
    console.log('E-mail: ' + email);
    console.log('Telefone: ' + telefone);
 
    document.write('Nome: ' + nome + '<br>');
    document.write('E-mail: ' + email + '<br>');
    document.write('Telefone: ' + telefone + '<br>');
 
}
 
cadastro();

