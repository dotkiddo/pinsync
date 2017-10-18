# Pinsync

Idea description: In general terms, I want to develop a cross-platform app that is in essence, to pinterest like Backup & Sync is to Google Drive.

## TODO:

  - note: make sure to state the intended use of the product, and that I will not be held responsible for product abuse that may occur
  - check the difference between the MIT, APACHE, and GNU licenses for the json file
  - set the origin for this repo using the github app?? and Sync
  - set the origin for the other project repos and sync
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

### Further thought

  - design the UX (NOT UI) processes and flow (this will help to identify requirements and to separate them into OS, electron and core functions)
  - look at the example provided by google backup & sync, onedrive and dropbox as a start in UX (NOT UI) design
  - file placeholders: no
  - how could we let the user save data if they are pinning and syncing using the same device instead of loading the stuff twice? This one is a little complicated - definitely an advanced feature

---

# Requirements

## Core Modules/difficulties:
  - security & authentication (https, oauth2)
  - the actual download process
  - the comparison process
    - especially as amount of files becomes vast
    - it will have to compare everything in one go before syncing because pins could be moved between boards
  - metadata.....
  - sync icons (in the file system itself)
  - building (separation of OS')
  - distribution
  - updates........ look at that article again where the guy speaks about it

## Core Requirements:
  - sync
    - downwards
    - upwards
    - what? (remember syncing itself won't be too difficult as we are mostly only editing the pin's attributes)
      - actual files  (**upwards will be an issue - original URL will be missing**)
      - renaming of files/changing descriptions
      - changing board pinned in
      - additional boards
      - board renaming      
  - user should be able to pick the boards that sync (might not want to sync all)
  - user should be able to pick location
  - notify users of duplicate pins


--for these, go through the electron api to see what you actually can do and add as the inspiration strikes
## Electron
## OS
### Apple Mac
### Linux
### Windows

---

# Project branches

This is going to be quite the practice in git.
Not too strict with project phase flow remember, eg. best to test the syncing at least with the sdk before you spend too much time on design and implementing all the ux as you are the only tester for now.

Whoopie!! Admin: disclaimer, license, code style-guide, setting up tests and a testing framework, supporting website - here you can learn jekyll with AMP, perhaps you can get others involved in the thing as well - then you can practice being a maintainer.

/*NB I still say test C++ vs JS in electron development if you even may do such a thing (native modules?)*/

  1. Research
    1. Electron capabilities
    2. Architecture of other projects
  2. Design
    1. Architecture
      1. separation of interests
      2. separation of main from render processes
      3. css classes
    2. UX
    3. UI
  3. Code
