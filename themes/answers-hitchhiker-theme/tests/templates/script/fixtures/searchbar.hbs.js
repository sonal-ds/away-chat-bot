const overlayConfig = {
  customHooks: {
    onConductSearch: function (query) {
      window.Overlay.grow();
    },
    onClearSearch: function () {
      window.Overlay.shrink();
    }
  },
  autocomplete: {
    onOpen: function() {
      const overlaySuggestionsEl = document.querySelector('.js-Answers-overlaySuggestions');
      overlaySuggestionsEl && overlaySuggestionsEl.classList.add('hidden');
    },
    onClose: function() {
      const overlaySuggestionsEl = document.querySelector('.js-Answers-overlaySuggestions');
      overlaySuggestionsEl && overlaySuggestionsEl.classList.remove('hidden');
    },
    shouldHideOnEmptySearch: true
  }
};
const shouldAddOverlayConfig = window.isOverlay && document.querySelector('.js-Answers-overlaySuggestions');

ANSWERS.addComponent("SearchBar", Object.assign({}, {
  container: ".js-answersSearch",
    verticalKey: "testKey",
  ...(shouldAddOverlayConfig ? overlayConfig : {}),
  onCreate: function() {
    this._container.textContent = '';
  }
}, {"a":"testSB"}));