var tela_inicial = document.getElementById("tela_inicial");
var tela_itens = document.getElementById("tela_itens");
var tela_nf = document.getElementById("tela_nf");
var tela_finan = document.getElementById("tela_finan");
var tela_estoque = document.getElementById("tela_estoque");
var tela_pdv = document.getElementById("tela_pdv");
var tela_boleto = document.getElementById("tela_boleto");
var tela_cupom = document.getElementById("tela_cupom");
var tela_resultado = document.getElementById("resultado_1");
var txt_nf = document.getElementById("txt_nf");
var txt_finan = document.getElementById("txt_finan");
var txt_estoque = document.getElementById("txt_estoque");
var txt_pdv = document.getElementById("txt_pdv");
var txt_cupom = document.getElementById("txt_cupom");
var txt_boleto = document.getElementById("txt_boleto");
var txt_nome = document.getElementById("input_nome");
var txt_email = document.getElementById("input_email");
var txt_plano = document.getElementById("plano");
var nome = document.getElementById("nome");
var card_nf = document.getElementById("card_nf");
var card_pdv = document.getElementById("card_pdv");
var card_pro = document.getElementById("card_pro");
var card_elite = document.getElementById("card_elite");
var btn_1 = document.getElementById("btn_1");
var btn_2 = document.getElementById("btn_2");
var btn_3 = document.getElementById("btn_3");
var btn_4 = document.getElementById("btn_4");
var btn_5 = document.getElementById("btn_5");
var btn_6 = document.getElementById("btn_6");
var card_desc_1 = document.getElementById("card_d1");
var card_desc_2 = document.getElementById("card_d2");
var card_desc_3 = document.getElementById("card_d3");
var card_desc_4 = document.getElementById("card_d4");

function escreve_nf(){
    txt_plano.value = "GestPlus - NOTAS"
}
function escreve_pdv(){
    txt_plano.value = "GestPlus - PDV"
}
function escreve_pro(){
    txt_plano.value = "GestPlus - PRO"
}
function escreve_elite(){
    txt_plano.value = "GestPlus - ELITE"
}

function some_todos_card(){
    card_desc_1.style.display = "none";
    card_desc_2.style.display = "none";
    card_desc_3.style.display = "none";
    card_desc_4.style.display = "none";
}

function mostra_card_d1(){
    if(card_desc_1.style.display == "none"){
        card_desc_1.style.display = "block";
        card_desc_2.style.display = "none";
        card_desc_3.style.display = "none";
        card_desc_4.style.display = "none";
    } else {
        card_desc_1.style.display = "none";
    }   
}

function mostra_card_d2(){
    if(card_desc_2.style.display == "none"){
        card_desc_2.style.display = "block";
        card_desc_1.style.display = "none";
        card_desc_3.style.display = "none";
        card_desc_4.style.display = "none";
    } else {
        card_desc_2.style.display = "none";
    } 
}

function mostra_card_d3(){
    if(card_desc_3.style.display == "none"){
        card_desc_3.style.display = "block";
        card_desc_1.style.display = "none";
        card_desc_2.style.display = "none";
        card_desc_4.style.display = "none";
    } else {
        card_desc_3.style.display = "none";
    } 
}

function mostra_card_d4(){
    if(card_desc_4.style.display == "none"){
        card_desc_4.style.display = "block";
        card_desc_1.style.display = "none";
        card_desc_3.style.display = "none";
        card_desc_2.style.display = "none";
    } else {
        card_desc_4.style.display = "none";
    } 
}

function mostra_btn_1(){
    btn_1.style.display = "inline-block";
}
function mostra_btn_2(){
    btn_2.style.display = "inline-block";
}
function mostra_btn_3(){
    btn_3.style.display = "inline-block";
}
function mostra_btn_4(){
    btn_4.style.display = "inline-block";
}
function mostra_btn_5(){
    btn_5.style.display = "inline-block";
}
function mostra_btn_6(){
    btn_6.style.display = "inline-block";
}

function gerar_resultado(){
    insere_nome();
    verifica_tudo();
    mostra_tela_resultado();
}

document.querySelector('#input_email').addEventListener('keydown', function (event){
    if(event.keyCode !== 13)return;
    valida_nome();
})

document.querySelector('#input_nome').addEventListener('keydown', function (event){
    if(event.keyCode !== 13)return;
    valida_email();
})


function mostra_tela_resultado(){
    tela_inicial.style.display = "none";
    tela_boleto.style.display = "none";
    tela_resultado.style.display = "block";
}

function insere_nome(){
    nome.value = txt_nome.value;
}


function mostra_tela_inicial(){
    tela_itens.style.display = "none";
    tela_inicial.style.display = "block";
}

function mostra_tela_itens(){
    tela_nf.style.display = "none";
    tela_inicial.style.display = "none";
    tela_itens.style.display = "block";
}

function valida_email(){
    if(txt_email.value == ""){
        window.alert("Por favor insira seu email");
        
    } else {
        mostra_tela_itens();
    }
}

function valida_nome(){
    if(txt_nome.value == ""){
        window.alert("Por favor insira seu nome");
        
    } else {
        valida_email();
    }
}

function mostra_tela_nf(){
    tela_finan.style.display = "none";
    tela_itens.style.display = "none";
    tela_nf.style.display = "block";
}

function mostra_tela_finan(){
    tela_nf.style.display = "none";
    tela_cupom.style.display = "none";
    tela_finan.style.display = "block";
}

function mostra_tela_estoque(){
    tela_cupom.style.display = "none"
    tela_pdv.style.display = "none"
    tela_estoque.style.display = "block"
}

function mostra_tela_pdv(){
    tela_boleto.style.display = "none"
    tela_estoque.style.display = "none"
    tela_pdv.style.display = "block"
}

function mostra_tela_boleto(){
    tela_pdv.style.display = "none"
    tela_boleto.style.display = "block"
}

function mostra_tela_cupom(){
    tela_finan.style.display = "none"
    tela_cupom.style.display = "block"
    tela_estoque.style.display = "none"
}

function sim_nf(){
    txt_nf.value = "Sim";
    mostra_tela_finan();
}

function nao_nf(){
    txt_nf.value = "Não";
    mostra_tela_finan();
}

function sim_finan(){
    txt_finan.value = "Sim";
    mostra_tela_cupom();
}

function nao_finan(){
    txt_finan.value = "Não";
    mostra_tela_cupom();
}

function sim_estoque(){
    txt_estoque.value = "Sim";
    mostra_tela_pdv();
}

function nao_estoque(){
    txt_estoque.value = "Não";
    mostra_tela_pdv();
}

function sim_pdv(){
    txt_pdv.value = "Sim";
    mostra_tela_boleto();
}

function nao_pdv(){
    txt_pdv.value = "Não";
    mostra_tela_boleto();
}

function sim_boleto(){
    txt_boleto.value = "Sim";
    mostra_btn_5();
}

function nao_boleto(){
    txt_boleto.value = "Não";
    mostra_btn_5();
}

function sim_cupom(){
    txt_cupom.value = "Sim";
    mostra_tela_estoque();
}

function nao_cupom(){
    txt_cupom.value = "Não";
    mostra_tela_estoque();
}

function verifica_tudo(){
    verifica_boleto();
    verifica_estoque();
    verifica_nf();
    verifica_pdv();
}

function verifica_nf(){
    if(txt_finan.value == "Não" || txt_pdv.value == "Não" || txt_cupom.value == "Não"){
        if(txt_estoque.value == "Não"){
            if(txt_boleto.value == "Não"){
                    card_pdv.style.display = "none";
                    card_nf.style.display = "block";
                    card_elite.style.display = "none";
                    card_pro.style.display = "none";
                    escreve_nf();
                }
            }
    } else {
        card_pdv.style.display = "none";
    }
}

function verifica_pdv(){
    if(txt_finan.value == "Sim" || txt_pdv.value == "Sim" || txt_cupom.value == "Sim"){
        if(txt_estoque.value == "Não"){
            if(txt_boleto.value == "Não"){
                    card_pdv.style.display = "block";
                    card_nf.style.display = "none";
                    card_elite.style.display = "none";
                    card_pro.style.display = "none";
                    escreve_pdv();
                }
            }
    } else {
        card_pdv.style.display = "none";
    }
}


function verifica_estoque(){
        if(txt_estoque.value == "Sim"){
            if(txt_boleto.value == "Não"){
                    card_nf.style.display = "none";
                    card_pdv.style.display = "none";
                    card_elite.style.display = "none";
                    card_pro.style.display = "block"; 
                    escreve_pro();
                }
            
    } else {
        card_pro.style.display = "none";
    }
}


function verifica_boleto(){
            if(txt_boleto.value == "Sim"){
                    card_nf.style.display = "none";
                    card_pdv.style.display = "none";
                    card_pro.style.display = "none";
                    card_elite.style.display = "block";
                    escreve_elite();
            } else {
        card_elite.style.display = "none";
    }
}