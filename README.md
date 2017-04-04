# Using AngularJS to search for a keyword in a JSON file and display info connected with the keyword in the view.

## Overview

### What is this app for?

This app will search a JSON file for the ingredients and cooking instructions when a recipe name is entered into the search box.

## Features

### Existing Features
- View data objects in the console is working

### Features Left to Implement
- Create web page
- Add search box
- Add Angular search, repeat and filter functions
- Output the data to ng-view
- Style with CSS


### Getting the code up and running
1. Firstly you will need to clone this repository by running the ```git clone <project's Github URL>``` command
2. After you've that you'll need to make sure that you have **npm** and **bower** installed
  1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
  2. Once you've done this you'll need to run the following command:
     `npm install -g bower # this may require sudo on Mac/Linux`
3. Once **npm** and **bower** are installed, you'll need to install all of the dependencies in *package.json* and *bower.json*
  ```
  npm install
 
  bower install
  ```
4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server -c-1```
6. The project will now run on [localhost](http://127.0.0.1:8080)