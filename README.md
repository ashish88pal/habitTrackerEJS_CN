# Habit-Tracker
## Description
  A habit tracker project is a web application that allows users to sign in and sign out. It allows users to perform CRUD operations (Create, Read, Update, Delete) on their habits, such as adding new habits, viewing their existing habits, updating or editing habits, and deleting habits. The project is built using a tech stack consisting of Node.js for the server-side scripting, Express for handling HTTP requests and routing, MongoDB for storing and managing the data, and EJS for rendering the views and templates.
  Click [here](https://habit-tracker-ejs-cn.onrender.com/) to try. Video link is [here](https://youtu.be/dCD5iu7p4Gw)


## Tech stack
  Node , Express, Mongodb , EJS , javaScript , html, css

## How to setup the project on local system
  1. Clone this project
  2. Start by installing npm if you don't have it already.
  3. Navigate to Project Directory by : Using
  ```
  cd habit-tracker

  ```

  After reaching to the this preoject directory yo have to run this following command :
  ```
  $ npm install
  $ nodemon server.js or npm start
  ```


  ## ScreenShots

  ![Sign Up](https://github.com/ashish88pal/habitTrackerEJS_CN/blob/91cbe97c6371cce025322a247565629718f52e3a/screenshots/ss1.png?raw=true)

 ![Sign In](https://github.com/ashish88pal/habitTrackerEJS_CN/blob/91cbe97c6371cce025322a247565629718f52e3a/screenshots/ss2.png?raw=true)

 ![Home](https://github.com/ashish88pal/habitTrackerEJS_CN/blob/91cbe97c6371cce025322a247565629718f52e3a/screenshots/ss3.png?raw=true)

 ![screenshot 4](https://github.com/ashish88pal/habitTrackerEJS_CN/blob/91cbe97c6371cce025322a247565629718f52e3a/screenshots/ss4.png?raw=true)

 ![screenshot 5](https://github.com/ashish88pal/habitTrackerEJS_CN/blob/91cbe97c6371cce025322a247565629718f52e3a/screenshots/ss5.png?raw=true)

 ![screenshot 6](https://github.com/ashish88pal/habitTrackerEJS_CN/blob/91cbe97c6371cce025322a247565629718f52e3a/screenshots/ss6.png?raw=true)


  ## Folder Structure
```bash
Habit Tracker
|   package-lock.json
|   package.json
|   README.md
|   server.js
|
+---assets
|   +---css
|   |       home.css
|   |       signin.css
|   |       signup.css
|   |
|   +---images
|   |       bored.png
|   |       logo.png
|   |
|   \---js
|           script.js
|
+---config
|       flashmiddleware.js
|       mongoose.js
|       passport-local-strategy.js
|
+---controllers
|       habbit_controller.js
|       home_controller.js
|       users_controller.js
|
+---models
|       habit.js
|       user.js
|
+---routes
|       habit.js
|       index.js
|       users.js
|
+---screenshots

\---view
        home.ejs
        user_sign_in.ejs
        user_sign_up.ejs
```