function init() {
  document.write('READY');
}

gadgets.util.registerOnLoadHandler(function() {
  gapi.hangout.onApiReady.add(function(evt) {
    if (evt.isApiReady) { init(); }
  });
});
