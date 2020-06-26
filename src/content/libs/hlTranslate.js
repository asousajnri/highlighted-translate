require('regenerator-runtime/runtime');

const { isApprovedTag } = require('./operators');

const translate = require('./translate');
const getSelected = require('./getSelected');
const popup = require('./popup');

const hlTranslate = () => {
  const translatePortuguese = translate('pt');

  popup.render();
  popup.closeWithMouseEvent();

  document.addEventListener('mouseup', async e => {
    const tagMouseuped = e.target;

    const { objectSelection, selectedText } = getSelected();
    if (!selectedText || !isApprovedTag(tagMouseuped.tagName).length) return;

    const { sourceLanguage, translatedText } = await translatePortuguese(selectedText);
    if (sourceLanguage !== 'en' || objectSelection.anchorNode === null) return;

    popup.show({
      objectSelection,
      selectedText,
      translatedText,
    });
  });
};

module.exports = hlTranslate();