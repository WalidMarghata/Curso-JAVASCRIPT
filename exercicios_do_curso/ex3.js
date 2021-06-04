// questao - 1

conversor = function(graus)
{
    return (9 * graus / 5) + 32;
}

document.getElementById("converter").onclick =  function()
{
    var convertido = conversor(document.getElementById("temp_celsius").value);
    document.getElementById("temp_fahr").innerHTML = convertido;
}

// questao - 2

var copas = [];

function preencheVetor(inicio, fim)
{
    var intervalo = (fim - inicio) / 4 ;

    for(var i = 0; i <= intervalo; i++)
    {
        copas[i] = inicio + 4*i;
    }
}

preencheVetor(1930,2018);

document.getElementById("anos_copa").innerHTML = copas;

// questao - 3

function calculadora(n1, n2, nFaltas)
{
    var media = (n1 + n2) / 2;
    var porcentagemFalt = 20 * 0.30;

    if(nFaltas >= porcentagemFalt || media <= 6.5)
    {
        if(nFaltas >= porcentagemFalt && media >= 6.5)
        {
            document.getElementById("result").innerHTML = "Reprovado por faltar demais";
        }
        else if(nFaltas <= porcentagemFalt && media <= 6.5)
        {
            document.getElementById("result").innerHTML = "Reprovado por nao alcancar a media";
        }
        else
        {
            document.getElementById("result").innerHTML = "Reprovado por nao alcancar a media e faltar demais";
        }
    }
    else
    {
        document.getElementById("result").innerHTML = "Aprovado";
    }
}

document.getElementById("calcular").onclick = function()
{
    var nota1 = parseInt(document.getElementById("nota1").value);
    var nota2 = parseInt(document.getElementById("nota2").value);
    var nFaltas1 = parseInt(document.getElementById("n_faltas").value);

    calculadora(nota1,nota2,nFaltas1);
}

// questao 4

var vendas_cursos = [
    {
        'aluno': 'Emmanuel Gomes',
        'data': '10/06/2018',
        'valor': 34.99,
        'reembolso': null
    },
    {
        'aluno': 'Carla Dias',
        'data': '10/06/2018',
        'valor': 29.99,
        'reembolso': null
    },
    {
        'aluno': 'Rafael Marques',
        'data': '11/06/2018',
        'valor': 39.99,
        'reembolso': '13/06/2018'
    },
    {
        'aluno': 'Maria Isabel Pereira',
        'data': '11/06/2018',
        'valor': 29.99,
        'reembolso': null
    },
    {
        'aluno': 'Andre Luis Silva',
        'data': '12/06/2018',
        'valor': 34.99,
        'reembolso': "13/06/2018"
    }
];

var filtrado = [];

for(var i = 0; i < vendas_cursos.length; i++)
{
    if(vendas_cursos[i].reembolso == null)
    {
        filtrado.push(vendas_cursos[i]);
    }
}

document.getElementById("vendas_cursos").innerHTML = "";

for(var i = 0; i < filtrado.length; i++)
{
    var fazTabela = "<tr>" +
            "<td>" + filtrado[i].aluno + "</td>" +
            "<td>" + filtrado[i].data + "</td>" +
            "<td>" + filtrado[i].valor + "</td>" +
        "</tr>";

document.getElementById("vendas_cursos").innerHTML += fazTabela;
}

var totalVendas = 0;

for(var i = 0; i < filtrado.length; i++)
{
    totalVendas += filtrado[i].valor;
}

document.getElementById("total_vendas").innerHTML = totalVendas;
