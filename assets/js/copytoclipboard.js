// Copy to Clipboard
(function() {
  'use strict';
  // Click events
  document.body.addEventListener('click', copy, true);
  // Event handler
  function copy(e) {
    // Find target element
    var
      t = e.target,
      c = t.dataset.copytarget,
      inp = (c ? document.querySelector(c) : null);
    // is element selectable?
    if (inp && inp.select) {
      // Select text
      inp.select();
      try {
        // Copy text
        document.execCommand('copy');
        inp.blur();
        // Copied
        t.classList.add('copied');
        setTimeout(function() {
          t.classList.remove('copied');
        }, 1000);
      } catch (err) {
        console.log('Please press Ctrl/Cmd+C to copy');
      }
    }
  }
})();