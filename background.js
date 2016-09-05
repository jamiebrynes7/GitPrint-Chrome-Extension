chrome.browserAction.onClicked.addListener(function(tab) {

  chrome.tabs.query({
    active: true,               // Select active tabs
    lastFocusedWindow: true     // In the current window
}, function(array_of_Tabs) {
    var tab = array_of_Tabs[0];
    var url = tab.url;
    //Edit URL to git print
    if (url.indexOf("github.com") != -1 ) {
      //Note: a return value of -1 means the substring was not found.
      url = url.replace("github.com", "gitprint.com");
      chrome.tabs.create({url : url});
  }
  else {
    //Send an alert to the user.
    alert('This is not a GitHub page.')
  }
});
});
