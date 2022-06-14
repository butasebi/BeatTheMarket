# Beat the Market
## Concept
**Beat the Market** is a fun way to find out more and get a glimpse of what it takes to make a real-time investment in different *stocks*, *cryptocurrencies* and *index funds*, based on historical data about them. You can start by choosing your favourite category and an appropriate time frame ranging between *12 hours*, *1 year* and *10 years*.<br/>
After finding out whether your buying/selling actions were inspired at a certain time and the result was either beating the market or not, you can check the public leaderboard to see other players' performance. By creating an account, you can also see your previous attempts on ✨beating the market✨.

## Contributors
The application was designed and developed by:
- @IonutAnghelina
- @davidbejenariu
- @butasebi
- @Alex18Mai
- @Luca1152

## Demo
A recorded demo of the application can be found here.

## User Stories
Our team has come up with **10** user stories:
* As a **user**, I would like to play *Beat the Market* to see if I am good enough to enter the real market.
* As a **user**, I would like to be able to create an account so that I can access all the features of the application.
* As a **user**, I would like to be able to create an account so that I can see statistics regarding my playing history.
* As a **user**, I would like to play different game modes, depending on the currency and the time frame I want to train on.
* As a **user**, I would like to gain access to a public leaderboard in order to compare my performance to others'.
* As an **admin**, I want to set/specify the currencies that the game will run on.
* As an **admin**, I want to check how the users perform by checking different statistics, so that I can have an evidence on the best players and maybe contact them.
* As an **admin**, I want check every user's play time and suggest cooldowns to ensure the wellbeing of all the players in the context of a game that may get addictive.
* As a **developer**, I want to easily integrate any currency into a scalable application.
* As a **developer**, I want to find a reliable way to get the statistical data that is going to be used in the game.

## Trello & Backlog Creation
We used Trello for the *Backlog Creation*, *Task Assignment*, *Bug Reporting* and other useful information, as seen in the screenshot below:
![trello-board](https://github.com/butasebi/CryptoAnalyser/blob/main/trello-board.png)

## UML Diagram
![uml-diagram](https://github.com/butasebi/CryptoAnalyser/blob/main/uml-diagram.png)

## Build Tool
The project was developed in ASP.NET 5 (backend) and React (frontend). TODO

## Design Patterns & Code Standards
Used design patterns in React:
- Stateless Components for rendering simple components
- Conditional Rendering for rendering parts of components conditionally
- Controlled Components for handling input
- Functional Components with React Hooks, added in React 16 - instead of using the older Class Components
- Compound Components for enclosing behaviour of a group of components

Used design patterns in ASP.NET:
* Singleton
* Repository Pattern (Controller -> Manager -> Repository)

Used coding standards:
- Feature branches for better coordination between contributors
- Conventional Commits for more uniform and machine readable commit messages
- Using ESLint for making JS code easier to review
- Using Prettier for having the same coding style across the JS app
- Typical naming conventions for React and ASP.NET apps (PascalCase for component names, camelCase for non-components, attributes, inline styles)
- Easy to follow project structure - using directories such as components/, pages/, styles/, utils/
- Splitting the code into multiple files instead of writing a big file

## Automated Testing
TODO

## Refactoring
Here are two examples of code refactoring along the making of the project:
* [refactor code for easier color tweaking](https://github.com/butasebi/CryptoAnalyser/commit/277eab5a62e08e8554e484b045428969f5992949)
* [refactor Game classes](https://github.com/butasebi/CryptoAnalyser/commit/3bf6bd62662ab9ec9d2388f3e1d00b6ebb474829)

## Bug Reporting
We have experienced several bugs in the process, most of which are highlighted below:
* .gitignore is not being project-wide
* blue hue for Modals backdrop
* leaderboard section showing on the entire viewport
* game chart stops generating after clicking Buy/Sell repeatedly
* chart is not split into equal vertical parts
* difficulty in hovering over chart points
* chart's y axis is jittery at the beginning of the game
* wrong number of data points for 12 hours timeframe
