// questao 1
var n1 = parseFloat(document.getElementById("num_1").innerHTML);
var n2 = parseFloat(document.getElementById("num_2").innerHTML);

document.getElementById("resultado").innerHTML = "<strong>" + (n1 + n2) + "<strong>";

// questao 2
conversor = function(graus)
{
    return (9 * graus / 5) + 32;
}

var celsius = parseFloat(document.getElementById("caixa_azul").innerHTML);

document.getElementById("caixa_amarela").innerHTML = conversor(celsius);

// questao 3
var grupos = [ 
    [ "João" , "Maria" ],
    [ "Pedro" , "Joana", "André", "Júlio" ],
    [ "Carolina" , "Helena", "Marcelo" ]
];

var novoArray = grupos.slice(1,3);

novoArray.push(["Mariana", "Felipe", "Carla"]);

console.log(novoArray);

// questao 4
var curso = {
    'titulo': "Aprenda programação em Python",
    'categoria': ['programação', 'tecnologia', 'python'],
    'n_aval_5_estrelas': 420,
    'n_aval_4_estrelas': 80,
    'n_aval_3_estrelas': 33,
    'n_aval_2_estrelas': 20,
    'n_aval_1_estrela': 4,
    'somaNotas' : function()
    {
        return this.n_aval_1_estrela + this.n_aval_2_estrelas +
        this.n_aval_3_estrelas + this.n_aval_4_estrelas + this.n_aval_5_estrelas;
    },
    'calcMedia' : function()
    {
    return ((5 * this.n_aval_5_estrelas) + (4 * this.n_aval_4_estrelas) + (3 * this.n_aval_3_estrelas)
     + (2 * this.n_aval_2_estrelas) + (1 * this.n_aval_1_estrela)) / this.somaNotas();
    }
}

document.getElementById("categoria_principal").innerHTML = curso.categoria[0];

document.getElementById("total_aval").innerHTML = curso.somaNotas();
document.getElementById("media_aval").innerHTML = curso.calcMedia().toFixed(2);

// questao 5

var pessoa = 
{
    "nome" : "Caio",
    "sobrenome" : "Henrique",
    "email" : "caio.henrique@gmail.com"
}

function fazTabela(pessoa1)
{
    var tableBox = 
    '<div class="tableBox">'+
        '<table>'+
            '<tr>'+
                '<th>Nome Completo</th>'+
                '<th>Email</th>'+
            '</tr>'+
            '<tr>'+
                '<td>' + pessoa1.nome + ' ' + pessoa1.sobrenome + '</td>'+
                '<td>' + pessoa1.email + '</td>'+
            '</tr>'+
        '</table>'+
    '</div>';

    return tableBox;
}

document.getElementById("tabela").innerHTML = fazTabela(pessoa);

