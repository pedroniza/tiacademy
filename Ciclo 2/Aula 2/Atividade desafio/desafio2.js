var nome = prompt("Digite seu nome:");
let num  = prompt("Olá "+nome+", agora digite um número para comparar com 'n'");
    alert("A informação digitada é um(a) "+typeof(num));

if(num == Number){
    document.write("Seja bem vindo..: "+nome+"<br>");
    document.write("Você digitou o número..: "+"("+num+")"+"<br>");
    document.write("O retorno da comparação booleana é..: "+(num==num)+"<br>");
    document.write("A soma dos valores é..: "+(num+num)+"<br>");
    document.write("A subtração dos valores é..: "+(num-num)+"<br>");
    document.write("O resto da divisão é..: "+(num%num)+"<br>");
    document.write("O quadrado do número digitado é..: "+(num*num)+"<br>");

}else{
    alert("A string será convertida para número");
    var conv  = parseInt(num);
    document.write("Seja bem vindo....: "+nome+"<br>");
    document.write("Você digitou o número..: "+"("+conv+")"+"<br>");
    document.write("O retorno da comparação booleana é..: "+(conv==conv)+"<br>");
    document.write("A soma dos valores é..: "+(conv+conv)+"<br>");
    document.write("A subtração dos valores é..: "+(conv-conv)+"<br>");
    document.write("O resto da divisão é..: "+(conv%conv)+"<br>");
    document.write("O quadrado do número digitado é..: "+(conv*conv)+"<br>");
}

var fruta = prompt("Agora escolha dentre estas três frutas: [Laranja, Uva, Pera]");
switch(fruta){
    case "Laranja": 
        alert("Você escolheu a fruta: Laranja");
    break;

    case "Uva":
        alert("Você escolheu a fruta: Uva");
    break;

    case "Pera":
        alert("Você escolheu a fruta: Pera");
    break;

    default:
        alert(nome+", a fruta escolhida não está na lista! Tente novamente.");
}
    document.write("<br>");
    document.write(nome+", você escolheu a fruta: "+ fruta);