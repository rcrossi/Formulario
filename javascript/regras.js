class Endereco
{
  constructor(){

  }

  gravar(endereco){
   alert("teste1");

  }



  lerDados(){

    var endereco = {}
    endereco.Logradouro = document.getElementById('loradouro').value;
    endereco.Numero = document.getElementById('numero').value;
    endereco.Complemento = document.getElementById('complemento').value;
    return endereco;
  }


  validaCampo(endereco){
    let msg = ' ';

      if(endereco.Logradouro == ' '){
        msg += ' - Informe o logradouro \n ';
      }
      if(endereco.Numero == ' '){
        msg += '- Informe  o numero \n ';
      }
      if(endereco.Complemento == ' '){
        msg += '- Informe o complemento \n ';
      }
      if(msg != ' '){
        alert(msg);
        return false;
      }
      return true;
  }

  cancelar(){
    alert("teste 2");
  }
}





