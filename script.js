escolhaUsuario = prompt("★ Bem Vindo ao jogo da sorte! ★ \nEscolha par ou ímpar:")
numSorteado = Math.floor((Math.random() * 99)+1)

if (numSorteado % 2 === 0) {
  numResultado = "par"
} else {
  numResultado = "ímpar"
}

if (escolhaUsuario != "par" && escolhaUsuario != "ímpar") {
  alert("Você não escolheu par ou ímpar \n=============\n Tente Novamente!\n=============")
} else {
  if (escolhaUsuario === "par" && numResultado === "par") {
    alert(`O número sorteado foi ${numSorteado} \n==========\n Você Ganhou!\n==========`)
  } else if (escolhaUsuario === "ímpar" && numResultado === "ímpar") {
    alert(`O número sorteado foi ${numSorteado} \n==========\n Você Ganhou!\n==========`)
  } else {
      alert(`O número sorteado foi ${numSorteado} \n==========\n Você Perdeu!\n==========`)
  }
}