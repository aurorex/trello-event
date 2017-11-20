window.addEventListener('load', function() {
  var text = document.getElementById('text');
  text.addEventListener('click', createList);
  // funcion que crea listas
  function createList(event) {
    // nuestro contenedor de listas tendra dentro un input  que agregara la nueva lista y un button para guardar lista
    var listContainer = document.getElementById('list-container');
    var div = document.createElement('div');
    var input = document.createElement('input');
    listContainer.replaceChild(input, text);
    div.classList.add('div-style');
    input.classList.add('input-style');
    input.setAttribute('placeholder', 'Añadir una lista...');
    button.classList.add('button-style');
    div.appendChild(input);
    div.appendChild(button);
    listContainer.appendChild(div);
  }

  var button = document.createElement('button');
  button.addEventListener('click', saveList);
  // el button ejecutara la funcion de guardar una lista, y se creara otra ventana que contendra un anchor
  function saveList(event) {
    var save = document.getElementById('save');
    var containerTareas = document.createElement('div');
    containerTareas.classList.add('containerTareas-style');
    var valueInput = document.getElementsByClassName('input-style')[0].value;
    var saveText = document.createTextNode(valueInput);
    var newText = document.createElement('p');
    newText.classList.add('newText-style');
    newText.appendChild(saveText);
    containerTareas.appendChild(newText);
    var anchor = document.createElement('a');
    anchor.setAttribute('href', '#');
    anchor.setAttribute('id', 'anchor-id');
    anchor.classList.add('anchor-style');
    var textAnchor = document.createTextNode('Añadir una tarea');
    anchor.appendChild(textAnchor);
    containerTareas.appendChild(anchor);
    save.appendChild(containerTareas);
    save.classList.add('save-style');

    anchor.addEventListener('click', anchorList);
    // el elemento anchor nos llevara a otra ventana que contendra un nuevo boton y un textarea en el que introduciremos varias tareas
    function anchorList(event) {
      var textArea = document.createElement('textarea');
      textArea.setAttribute('rows', '3');
      textArea.setAttribute('cols', '30');
      textArea.setAttribute('placeholder', 'Añadir una tarea');
      textArea.setAttribute('class', 'textarea-class');
      containerTareas.replaceChild(textArea, anchor);
      var newButton = document.createElement('button');
      newButton.classList.add('newButton-style');
      var textButton = document.createTextNode('Añadir');
      newButton.appendChild(textButton);
      containerTareas.appendChild(newButton);

      newButton.addEventListener('click', positionList);
      // el newButton ejecutara otra funcion de guardar nuestras tareas
      function positionList(event) {
        var valueTextarea = textArea.value;
        var newPharraphe = document.createElement('p');
        newPharraphe.classList.add('newPharraphe-style');
        var textPharraphe = document.createTextNode(valueTextarea);
        newPharraphe.appendChild(textPharraphe);
        containerTareas.insertBefore(newPharraphe, textArea);
      }
    }
  };
});
