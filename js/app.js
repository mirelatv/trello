window.addEventListener('load', function() {
/* declarando variables*/
  var power = document.getElementById('enter1');
  var container = document.getElementById('bigBox');
  var father = document.createElement('div');
  var text = document.createElement('input');
  var send = document.createElement('button');
  var store = document.createTextNode('guardar');
  /*var transparentButton = document.createElement('button');*/
  /*var textAnchor = document.createTextNode('Anadir una tarjeta');*/

  var box = document.createElement('div');
  var txt = document.createElement('input');
  var btn = document.createElement('button');
  var sv = document.createTextNode('guardar');

  var containerParagraph = document.createElement('ul');
  var newParagraph = document.createElement('li');
  var newInfo = document.createElement('span');
  newInfo.setAttribute('class', 'textSpan');

  /*var Textarea = document.createElement('textarea');*/
  var input3 = document.createElement('input');
  /*var link = document.createElement('a');*/


  /* Primer Evento*/
  power.addEventListener('click', function(evento) {
    send.appendChild(store);
    father.appendChild(text);
    father.appendChild(send);
    container.appendChild(father);
    /* adhiriendo clases*/
    father.classList.add('div');
    text.classList.add('input');
    send.classList.add('button');
    /* ejecutando funcion*/
    container.insertBefore(father, container.firstElementChild);
    container.removeChild(power);
  });

  /* segundo Evento*/
  send.addEventListener('click', function(evento) {
    console.log(evento);
    btn.appendChild(sv);
    box.appendChild(txt);
    box.appendChild(btn);
    container.appendChild(box);
    /*anchor.appendChild(textAnchor);*/
    /* asignando clases*/
    box.classList.add('bx');
    txt.classList.add('input');
    btn.classList.add('button');
    /*anchor.classList.add('a');*/
    /*boton.claasList.add('a');*/
    newParagraph.classList.add('childText');
    /*anchor.setAttribute('href', '#textarea');*/
    father.appendChild(containerParagraph);
    containerParagraph.appendChild(newParagraph);
    newParagraph.appendChild(newInfo);
    /* funcion*/
    function insertAfter(container, box) {
      if (container.nextSibling) {
        container.parentNode.insertBefore(box, container.nextSibling);
      } else {
        container.parentNode.appendChild(i);
      }
    }
    /*father.replaceChild(anchor, send);*/
    send.classList.add('link');
    send.innerHTML = 'anadiendo texto';
    newInfo.textContent = text.value;
    father.removeChild(text);
    father.insertBefore(newParagraph, father.firstElementChild);

  });
});
