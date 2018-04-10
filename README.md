# React & Redux Seed Project
React with redux artitecture seed for any new projects

## Quick Overview

```sh
cd react-app-redux-seed
npm install
npm start
```


## UI
### Material-UI
https://material-ui-next.com/
```sh
npm install material-ui@next --save
```
#### 1. Add
```sh
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```
inside public/index.html <head></head>

#### 2. Edit the follow codes into src/index.js
```sh
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
...
const theme = createMuiTheme({
});
...
ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <Router>
               ...
            </Router>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root'));
```

### Reactstrap
https://reactstrap.github.io/
```sh
npm install bootstrap --save
npm install reactstrap@next --save
```
#### 1. Import Bootstrap CSS in the src/index.js
```sh
import 'bootstrap/dist/css/bootstrap.min.css';
```


## Structure Introduction
### Used Package
#### Axios
As React does not include any Ajax method, Axios helps us doing GET, POST, etc request between API and React.
https://github.com/axios/axios
#### Material-UI-next
We are based on Material-UI to build up the UI of the web. 
Material-UI provides the support about layout and components.
1.	If we want to divide a div into a numbers of pieces with responsive UI, read the Layout page.
https://material-ui-next.com/layout/basics/

2.	If we want to add some components, say, textbox or nav bar, read the Component Demos and Component API page
https://material-ui-next.com/demos/app-bar/
#### React-router
React-router provides a service of link to other pages, like <a></a> but without any postback.
The basic usage guide is here
https://github.com/kdchang/reactjs101/blob/master/Ch05/react-router-introduction.md

### React Reference
#### 從零開始學 ReactJS（ReactJS 101）
https://www.gitbook.com/book/kdchang/react101/details
This is a react tutorial for beginners in chinese.  
Recommended to read chapter 3-6 for the basic usage.
For the advance usage, recommended to read chapter 7-10
 
### Coding Ide
#### WebStorm
https://www.jetbrains.com/webstorm/
We highly recommend using WebStorm to be the IDE of coding instead of using Notepad++.
In registering with education version, it’s free.

### Redux
https://github.com/reactjs/redux

This plugin helps to create or update the state in react. Controls the user action in react.
If we want to create a user action, follow the rules of redux.

#### Tutorial
http://redux.js.org/
#### Reference Example
https://github.com/reactjs/redux/tree/master/examples/real-world
<p align='center'>
<img src='https://upload.cc/i1/2018/04/10/r3b62v.png' width='600'>
</p>
<p align='center'>
<img src='https://upload.cc/i1/2018/04/10/n8xu4A.png' width='600'>
</p>

### System Structure
<p align='center'>
<img src='https://upload.cc/i1/2018/04/10/HAOvfe.png' width='400'>
</p>

#### Actions
This is the user action which sends data from the application to store. We have to describe the actions in this folder.
Naming: ActionXXXX, eg. ActionSegment/ActionImage
 
#### Constants
##### /models
This describes the data structures of states in the application.
##### actionTypes.js
This js file describes the name of actions. 

#### Reducers
This describes the user action’s actions, the application’s state changes in response.
Naming: XXXX, eg. Segment/Image

#### Middleware
The previous version of modules/control

#### Containers
Concepts: 
https://github.com/kdchang/reactjs101/blob/master/Ch08/container-presentational-component-.md

### Routing

If creates one more page, it should be created inside the pages folder.
The first letter should be capital letter

In index.js, we can setup the website routing.
 
This is the master page of the website.
If there is a new page, it will be added here, inside the <AppContent>
The syntax is same as <Route> component.

