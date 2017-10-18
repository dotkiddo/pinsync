# Pinsync

Idea description: In general terms, I want to develop a cross-platform app that is in essense, to pinterest like Backup & Sync is to Google Drive.

## TODO:

  - consider and test "use strict";
  - consult the electron docs to get an idea of the API
  - look at the other projects you have downloaded so far and see how they did the overall design/architecture
  - make a list of features for the purposes of agiling and scrumming this thing (consider using hansoft, todoist, onenote, or-even-your-own-html5-app-that-will-use-sqlit3-because-you-want-to-be-able-to-keep-a-changelog-and-record-everything)
  - NB Keep core functionality separate from OS & electron functionality.
  - make a requirements/features list --> core, and electron/OS specific
  - make sense of the webView vs the BrowserWindow that the docs talk about
  - make sense of the "invisible rendering" that the docs talk about

###  Questions to ask:
  - is there a pinterest npm module? or should I first wrap the pinterest JS SDK into a node module first?
  - how could i structure the thing so that I could make use of the windows 10 api for the windows 10 release (and not the other OS')
  - how do i integrate the electron app with OS/native API's? (do I go through electron, node or something else)
  - would it execute faster if i used C++ native or would the difference really not be worth it?
  - what are causing the other two electron processes to open?

**WHEN you answer questions, keep a record of them. you can publish it as well like in a blog or something**
