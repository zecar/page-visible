# page-visible
NPM module

## Description
This module is based on the Page Visibility API. It shows when a webpage is in focus or hidden.

## Install
npm install page-visible

## Usage
```javascript
console.log(PageVisible.visible); // Boolean

PageVisible.on('hidden', function(){
  console.log('Page is not visible anymore!');
});

PageVisible.on('visible', function(){
  console.log('User is back on the page!');
});
```
