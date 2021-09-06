var nome = prompt("Digite seu nome:");
var num  = parseInt(prompt("Olá "+nome+", agora digite um número para comparar com 'n'"));

if(!isNaN(num)){

    document.write("Seja bem vindo..: "+nome+"<br>");
    document.write("Você digitou o número..: "+"("+num+")"+"<br>");
    document.write("O retorno da comparação booleana é..: "+(num==num)+"<br>");
    document.write("A soma dos valores é..: "+(num+num)+"<br>");
    document.write("A subtração dos valores é..: "+(num-num)+"<br>");
    document.write("O resto da divisão é..: "+(num%num)+"<br>");
    document.write("O quadrado do número digitado é..: "+(num*num)+"<br>");

}else{

    while (isNaN(num)){

    alert("Você não digitou um número, tente novamente.");
    var num  = parseInt(prompt("Olá "+nome+", agora digite um número para comparar com 'n'"));
    }

    document.write("Seja bem vindo..: "+nome+"<br>");
    document.write("Você digitou o número..: "+"("+num+")"+"<br>");
    document.write("O retorno da comparação booleana é..: "+(num==num)+"<br>");
    document.write("A soma dos valores é..: "+(num+num)+"<br>");
    document.write("A subtração dos valores é..: "+(num-num)+"<br>");
    document.write("O resto da divisão é..: "+(num%num)+"<br>");
    document.write("O quadrado do número digitado é..: "+(num*num)+"<br>");
}