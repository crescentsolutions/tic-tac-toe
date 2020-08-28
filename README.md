![Crescent Media Logo](https://www.crescentdigitalmedia.solutions/wp-content/uploads/2020/05/logo-v3.png)

# Application Title: Daylin's 3-In-A-Row

## Wireframe

![Game Board v1](https://media.git.generalassemb.ly/user/30423/files/b7627e80-e84e-11ea-9410-b3166887ac8a)

## User Stories:

- As a User I want a form so that I can sign up
- As a User I want a form so that I can sign in
- As a User I want a process to be able to change my password
- As a User I want a process to be able to sign out
- As a User I want a button to start a tic tac toe game
- As a User I want multiple roles so I can  start as X and then rotate between X and O
- As a User I want a process to only select available spaces on the board
- As a User I want a notification so I can know when win, loss or tie occurs
- As a User I want to NOT be able to add to the board so that I can know the game is over
- As a User I want a button to be able to play again
- As a User I want to be signed in so that I can view number of games played

## Process for Building Desktop Application
1. Create auth folder to contain .sh files for curl scripts /curl-scripts/auth
2. Create .sh files for each curl script I need to test
      - ex: /curl-scripts/auth/sign-in.sh,
          -- /curl-scripts/auth/sign-up.sh,
          -- etc.
3. Test the API using curl scripts in /curl-scripts/auth
4. Create sign up form and sign in form using HTML in index.html
4. Create gameboard using BootStrap in index.html
5. Create /assests/scripts/app.js file
6. Initialize the submit event using document.ready in /assests/scripts/app.js
7. Create /assets/scripts/auth folder to contain .js files that handle the app
8. Create /assets/scripts/auth/events.js
9. Initialize process that needs to happen for each form
    submission
    - path: /assets/scripts/auth/events.js
9. Create /assets/scripts/auth/api.js
10. Create the API requests
    - path: /assets/scripts/auth/api.js
11. Create /assets/scripts/auth/ui.js
12. Initialize the process that does error handling. Did the API request
succeed or fail?

## Technologies Used
- HTML/CSS
- JavaScript
- jQuery
- Bootstrap
