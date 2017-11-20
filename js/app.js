window.addEventListener('load', function() {
/* declarando variables*/
  var power = document.getElementById('enter1');
  var container = document.getElementById('bigBox');
  var father = document.createElement('div');
  var text = document.createElement('input');
  var send = document.createElement('button');
  var store = document.createTextNode('guardar');

  var box = document.createElement('div');
  var txt = document.createElement('input');
  var btn = document.createElement('button');
  var sv = document.createTextNode('guardar');


  var newParagraph = document.createElement('p');
  newParagraph.className = ('parrf');

  var anchor = document.createElement('a');
  anchor.setAttribute('href', '#textarea');
  anchor.className = 'link';
  anchor.innerHTML = 'anadiendo texto';

  var form = document.createElement('form');
  var texta = document.createElement('textarea');

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
    btn.appendChild(sv);
    box.appendChild(txt);
    box.appendChild(btn);
    container.appendChild(box);
    /* asignando clases*/
    box.classList.add('bx');
    txt.classList.add('input');
    btn.classList.add('button');

    /* funcion*/
    function insertAfter(container, box) {
      if (container.nextSibling) {
        container.parentNode.insertBefore(box, container.nextSibling);
      } else {
        container.parentNode.appendChild(box);
      }
    }

    father.replaceChild(anchor, send);
    send.innerHTML = 'anadiendo texto';
    father.removeChild(text);
    newParagraph.textContent = text.value;
    father.insertBefore(newParagraph, father.firstElementChild);
  });

  /* Tercer Evento*/
  anchor.addEventListener('click', function() {
    form.appendChild(texta);

    father.appendChild(form);
    father.insertBefore(form, anchor);

    /* Inserto antes  del   segundo hijo*/
    var ul = document.createElement('ul')
    var lis = document.createElement('li');
    var sp = document.createElement('span');
    lis.appendChild(sp);
    ul.appendChild(lis);
    father.appendChild(ul);

    sp.classList.add('sp');
    lis.classList.add('lis');
    sp.textContent = texta.value;
    ul.insertBefore(lis, ul.firstElementChild)
    father.insertBefore(ul, father.firstElementChild.nextSibling);
    texta.value = ('');

    texta.setAttribute('cols', '40');
    texta.setAttribute('rows', '8')
    father.style.height = 'auto';
    father.style.height = father.scrollHeight + 'px';
  });
});
