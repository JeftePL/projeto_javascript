/*var nome = "Jefté Lima"
var idade = 23;
var idade2 = 10;
var frase ="Japão é o melhor time do mundo"
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"))
var lista = ["maça", "pêra", "laranja"];
lista.push("uva");
lista.pop();

console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));

var fruta = {nome:"maça", cor:"vermelha"}
console.log

var idade = prompt("Qual a sua idade?");
if (idade >= 18) {
	alert("maior de idade");
}
else {
	alert("menor de idade")
}

var count = 0;

while(count <= 5) {
	alert(count)
	count++;
}

for(count = 0; count <= 5; count++){
	alert(count);
}

var d = new Date();
alert(d.getMonth()+1);
alert(d.getHours());

function soma(n1, n2) {
	return n1 + n2;
}

function setReplace(frase, nome, novo_nome) {
	return frase.replace(nome, novo_nome)
}

alert(soma(5, 10));
alert(setReplace("Vai Japão", "Japão", "Brasil"));

function validaIdade(idade) {
	var validar;
	if (idade >= 18) {
		validar = true;
	}
	else {
		validar = false;
	}
	return validar;
}

var idade = prompt("Qual sua idade?");
alert(validaIdade(idade));*/

function botao() {
	document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>";
}

function redirecionar() {
	window.open("https:www.google.com/");
}

function trocar(elemento) {
	elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento) {
	elemento.innerHTML = "Passe o mouse aqui";
}

function load() {
	alert("Página carregada");
}

function change(elemento) {
	alert(elemento.value);
}