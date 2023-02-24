document.addEventListener('DOMContentLoaded', function() {
    var copyButton = document.getElementById('copyButton');
    copyButton.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {greeting: 'hello'}, function(response) {
          console.log(response.farewell);
        });
      });
    });
  });
  