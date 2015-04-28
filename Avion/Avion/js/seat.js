/**
 * Created by mxue on 2015-04-27.
 */
'use strict';
window.onload = function () {
    var cols1 = document.getElementById('div1').getElementsByTagName('div');
    for (var i = 0; i < cols1.length; i++) {
        var nb = i + 1;
        nb = nb.toString();
        if (nb.length < 2) {
            nb = '0' + nb;
        }
        cols1[i].innerHTML = '<span>A' + nb + '</span>';
        cols1[i].onmousedown = function () {
            select(this)
        };  //此乃动态添加onclick的方法，如没有参数，则 等号后直接加函数名。
    }

    var cols2 = document.getElementById('div2').getElementsByTagName('div');
    for (i = 0; i < cols2.length; i++) {
        nb = i + 1;
        nb = nb.toString();
        if (nb.length < 2) {
            nb = '0' + nb;
        }
        cols2[i].innerHTML = '<span>B' + nb + '</span>';
        cols2[i].onmousedown = function () {
            select(this)
        }
    }

    var cols3 = document.getElementById('div3').getElementsByTagName('div');
    for (i = 0; i < cols3.length; i++) {
        nb = i + 1;
        nb = nb.toString();
        if (nb.length < 2) {
            nb = '0' + nb;
        }
        cols3[i].innerHTML = '<span>C' + nb + '</span>';
        cols3[i].onmousedown = function () {
            select(this)
        };
    }
};

var seats = [];
function select(clique) {
    if ((seats.indexOf(clique.textContent)) == -1) {
        seats.push(clique.textContent);
        seats.sort();
        clique.style.backgroundColor = 'hotpink';
    } else {
        seats.splice(seats.indexOf(clique.textContent), 1);    //注意此处 一定要 1， 表明只删除一个 ！！！
        clique.style.backgroundColor = '#eeeeee';
    }
    if (seats.length == 0) {
        effacer();
    } else {
        document.getElementsByClassName('txt_noir')[1].innerHTML = '<p>Vous avez choisi:</p><button onclick="effacer()">Effacer tous</button>';
        document.getElementsByClassName('txt_rouge')[0].innerHTML = '<p>' + seats.join('</p><p>') + '</p>';
        document.getElementsByClassName('txt_noir')[2].innerHTML = '</p><p>Merci, bon voyage !</p>';
    }
}

function effacer(){
    seats = [];
    var a=$('a div').css('background-color','#eeeeee');
    document.getElementsByClassName('txt_noir')[1].innerHTML = '';
    document.getElementsByClassName('txt_rouge')[0].innerHTML = '';
    document.getElementsByClassName('txt_noir')[2].innerHTML = '';
}

(document).ready(function(){ 
 
    $('but_avion').toggle( 
 
        /* 
            Primer click.
            Función que descubre un panel oculto
            y cambia el texto del botón.
        */
        function(e){ 
            $('#avion').slideDown();
            $(this).text('Cerrar el panel');
            e.preventDefault();
        }, // Separamos las dos funciones con una coma
     
        /* 
            Segundo click.
            Función que oculta el panel
            y vuelve a cambiar el texto del botón.
        */
        function(e){ 
            $('#avion').slideUp();
            $(this).text('Mostrar el panel oculto');
            e.preventDefault();
        }
 
    );
 
});
