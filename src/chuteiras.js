import { chuteiras } from "./data.js"

const divResultados = document.getElementById("resultados")
const inputChuteiras = document.getElementById("input-chuteiras")
const buttonChuteiras = document.getElementById("btn-chuteiras")

function createElement() {
    for (const chuteira of chuteiras) {
        divResultados.innerHTML += `
        <div class="col-12 col-md-4 p-2">
            <div class="conteudo border border-danger d-flex justify-content-center text-center">
                <div>
                    <img class="imagem" src="${chuteira.url}">
                    <p>N° ${chuteira.numero}</p>
                    <h5> ${chuteira.nome}</h5>
                    <p> ${chuteira.tipo} </p>
                    <div class="button3">
                        <button class="btn1 btn btn-success"">Comprar a minha</button>
                        <button class="btn1 btn btn-danger">Adicionar a Sacola</button>
                    </div>
                </div>
            </div>
        </div>
    
    `
    }
}

function findElement() {
    const chute = chuteiras.find(e => e.nome === inputChuteiras.value)
    console.log(chute)
    if (!chute) {
        return divResultados.innerHTML = `
        <div class="col-9 border border-danger">
            <div class="texto2">
                <h5>Nenhum item corresponde a sua pesquisa!</h5>
            </div>
            <a href="chuteiras.html">Volte a Página Inícial</a>
        </div>
    `

    }
    divResultados.innerHTML = `
        <div class="col-12 p-2">
            <div class="border border-danger d-flex justify-content">
                <div>
                    <img class="imagem2 p-2" src="${chute.url}">
                    <div class="text-center">
                        <P>N° ${chute.numero}</p>
                        <h5> ${chute.nome}</h5>
                        <p> ${chute.tipo}</p>
                    </div>
                    <button class="btn1 btn btn-success"">Finalizar Compra</button>
                    <button class="btn1 btn btn-danger">Adicionar a Sacola</button>
                </div>
                <div class="col-8 text=center p-2">
                    <p><strong>${chute.titulo}</strong></p>
                   <p>${chute.informacao}</p>
                   <div class="d-flex justify-content">
                        <p><strong>${chute.avaliação}</strong></p>
                        <p>(${chute.vendidos})</p>
                   </div>
                   <h4>R$${chute.preço}</h4>
                   <p>ou 12x de R$${chute.parcelado}</p>
                   <a class="" href="chuteiras.html">Consultar meios de pagamentos</a>
                   <div class="envios">
                   <p><strong>Envios para todo País</strong></p>
                   <a class="" href="chuteiras.html">Consultar meios de Envios</a>
                   </div>
                   <div class="numero d-flex justify-content">
                        <div class=" text-center p-2">
                            <select>
                            ${chute.numeros.map((e,i) => `
                            <option value="${i}">${e}</option>
                            `)}
                            </select>
                        </div>
                   </div>
                </div>
            </div>
        </div>

    ` 
}


buttonChuteiras.addEventListener("click", findElement)


window.addEventListener("load", createElement)