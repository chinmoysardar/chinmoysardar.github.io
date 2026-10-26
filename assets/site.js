// Small helpers shared by every page.
(function () {
  // Show a tidy fallback when a photo file has not been added yet.
  function useFallback(img) {
    img.hidden = true;
    var fb = img.parentElement && img.parentElement.querySelector('.fallback');
    if (fb) fb.hidden = false;
  }
  document.querySelectorAll('img[data-fallback]').forEach(function (img) {
    var fb = img.parentElement.querySelector('.fallback');
    if (fb) fb.hidden = true;
    img.addEventListener('error', function () { useFallback(img); });
    if (img.complete && img.naturalWidth === 0) useFallback(img);
  });

  // Copy-email buttons.
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var text = btn.getAttribute('data-copy');
      var done = function () {
        var old = btn.textContent;
        btn.textContent = 'Copied';
        setTimeout(function () { btn.textContent = old; }, 1500);
      };
      try {
        navigator.clipboard.writeText(text).then(done, function () { selectText(btn); });
      } catch (e) { selectText(btn); }
    });
  });
  function selectText(btn) {
    var target = btn.previousElementSibling;
    if (!target) return;
    var range = document.createRange();
    range.selectNodeContents(target);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }
})();
