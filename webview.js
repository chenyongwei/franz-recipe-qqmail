const path = require('path');

module.exports = (Franz, options) => {
  const getMessages = () => {
    var unreadElement = document.getElementById('folder_1').childNodes[1];
    var unreadCount = 0;
    if (unreadElement) {
      var unreadText = unreadElement.innerText;
      if (unreadText.match(/\d+/)) {
        unreadCount = parseInt(unreadText.match(/\d+/)[0]);
      }  
    }
    Franz.setBadge(unreadCount);
  };

  // inject franz.css stylesheet
  Franz.injectCSS(path.join(__dirname, 'css', 'franz.css'));

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};
