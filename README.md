# React Expense Tracker App
## Description
A simple React expense tracker web application that has the functionality to add new expenses, displays existing expenses, filters expenses by year, and compares the expenses spent per month to yearly spendings with a chart. The web application includes four dummy starting expenses to exemplify possible expenses, which is stored and can be changed in the App component. This web application is my first React project and was completed in complement to my studies, guided by the Udemy Course "React - The Complete Guide 2023" taught by Academind by Maximilian Schwarzmüller.


## To Run
Live: https://jin-karen.github.io/react-expense-tracker/

Project was coded for 1920x1080 display resolution and adjustments were made for smaller screens.<br/>
Application is optimized for mobile devices.

In order to run the application locally, first ensure that you have node.js installed and then clone the project repository to your local computer. Navigate to the root directory of the repository and run:
```
npm install
```
This will install all the dependencies needed to run the application, which are detailed in the package.json file. Run the following in your terminal to start the development server:
```
npm start
```
The project will then be able to be viewed locally in localhost:3000; you can close the session at any time using "ctrl +c".


## Project Takeaways
The React Expense Tracker App was my first project utilizing the open-source front-end JavaScript library called React, where I was able to not only learn React fundamentals but also have the opportunity to implement previously acquired JavaScript, CSS, and HTML knowledge. Key concepts used to build this application include but are not limited to the following:
* create-react-app
* building reusable custom components
* props
* shell/wrapper components (ie. card)
* dynamic data
* using JavaScript logic within components
* listening to events and working with event handlers, 
* working with state (with and without previous state dependencies, two way binding, stateful lists)
* derived/computed state (ie. chart)
* forms and user input
* outputting conditional content

I also educated myself on how to deploy a React app to Github pages by following a number of online resources and problem solving along the way. In order to deploy a React app to Github, you need to first install a github-pages development dependency by running this in the root of your directory:
```
npm install gh-pages --save-dev
```
This package allows you to publish build files to Github and thus allows you to host the application on Github Pages. 
Then, you have to navigate to the application's package.json file to add a "homepage" property with a root URL value that tells the React where to deploy the application. The value should follow the format: "http://{github-username}.github.io/{repo-name}".
```
"homepage": "http://{github-username}.github.io/{repo-name}",
```
Then, you need to update the scripts object to include a "predeploy" and "deploy" property:
```
"predeploy": "npm run build",
"deploy": "gh-pages -d build",
```
The last step to deploying the application is to run this in your terminal:
```
npm run deploy
```
If encountering any issues like I did, make sure to: double check the homepage url, ensure you have the proper access/permissions to the repo (ie. SSH key), clearing gh-pages from cache in node_modules, or even using Git Bash Here to run the last deploy statement. In addition, if you make any changes to the project after deploying the app to gh-pages, just run "npm run deploy" add and push the changes to github to update the build.

Along with learning many React concepts and basics, I was also able to practice existing knowledge while building this application. My understanding of JavaScript helped in creating and writing logic for the components and my comprehension on HTML paired to allow me to utilize JSX (JavaScript Syntax Expension) comfortably. Additionally, I was able to apply CSS to not only style the application but also make the design responsive.


## Credits
[Udemy Academind Maximilian Schwarzmüller React The Complete Guide 2023](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)

[Deploy React Apps to Github Pages](https://github.com/gitname/react-gh-pages)

[Deploying React Apps to Github Pages](https://blog.logrocket.com/deploying-react-apps-github-pages/#pushing-the-react-app-to-the-github-repository)

[Deploying Github Pages with create-react-app](https://www.pluralsight.com/guides/deploying-github-pages-with-create-react-app)


## Screenshots
![React Expense Tracker App](https://github.com/jin-karen/react-expense-tracker/assets/102393842/8f14fa45-d168-4df7-9a64-ae298b07f13a)

![React Expense Tracker App 2](https://github.com/jin-karen/react-expense-tracker/assets/102393842/790e9731-f396-4c40-a90c-79d0b2da9da6)

