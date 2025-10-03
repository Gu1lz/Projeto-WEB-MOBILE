
let subtotal = []; 


function abrirOrca() {
    let menuCompra = document.getElementById("menuCompra");
    menuCompra.style.display = "flex";
}

function fecharOrca() {
    let menuCompra = document.getElementById("menuCompra");
    menuCompra.style.display = "none";
}



function menuSan() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active");
  
}

function enviarOrcamento() {

    const nome = document.getElementById("nome").value;
    const mensagemDiv = document.getElementById("mensagemSucesso");

    mensagemDiv.innerText = `Obrigado, ${nome}! Seu orçamento foi enviado com sucesso. Em breve, um de nossos atendentes entrará em contato.`;
    mensagemDiv.style.display = "block";

    document.getElementById("formOrcamento").reset();
    setTimeout(function(){
        fecharOrca();
        mensagemDiv.style.display = "none"; 
    }, 3000); 
    return false;
}


function abrirCheckout() {
    document.getElementById("checkout").style.display = "flex";
}

function fecharCheckout() {
    document.getElementById("checkout").style.display = "none";
}

function adicionarAoCheckout(nome, preco) {
    subtotal.push({ nome, preco });
    atualizarCheckout();
    abrirCheckout();
}

function removerDoCheckout(indice) {
    subtotal[indice] = null; 
    atualizarCheckout();
}

function atualizarCheckout() {
    let container = document.getElementById("itensCheckout");
    container.innerHTML = "";

    for (let i = 0; i < subtotal.length; i++) {
        let item = subtotal[i];
        if (item != null) {
            container.innerHTML += "<br>" + item.nome + " - R$ " + item.preco + " <button onclick='removerDoCheckout(" + i + ")'>Remover</button>";
        }
    }

    let total = subtotal.reduce(function(acc, item) {
        if (item != null) {
            return acc + item.preco;
        }
        return acc;
    }, 0);

    document.getElementById("subtotal").innerText = "Subtotal: R$ " + total;
}


