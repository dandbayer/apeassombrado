(function() {
  let itemState;
  
  window.addEventListener('load', function() {
    itemState = JSON.parse(localStorage['checkboxState'] || '{}');
  
    for(let i in itemState) {
      let el = document.querySelector('input[name="' + i + '"]');
      if (el) el.checked = true;
    }
  
    let cb = document.getElementsByClassName('save-state');
  
    // Loop through results and ...
    for(let i = 0; i < cb.length; i++) {
      cb[i].addEventListener('click', function(evt) {
        if (this.checked) {
          itemState[this.name] = true;
        }
        else if (itemState[this.name]) {
          delete itemState[this.name];
        }

        localStorage.checkboxState = JSON.stringify(itemState);
      });
    }
  });
})();
		
		