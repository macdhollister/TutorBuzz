# TutorBuzz

A tutors and students client-relationship application.

## MVP

Our web app will allow for user profiles, scheduling, and video chat.

## Getting Started

1. Clone the repository
```
git clone git@github.com:macdhollister/TutorBuzz.git
cd tutorbuzz
```

2. Install dependencies
```
cd client
npm install
```

```
cd server
npm install
```

3. Inside the root directory, create a .env with your mySQL root password (as follows)
```
DB_PASSWORD = my_password
```

4. Start the server (from the server directory)
```
nodemon server.js
```

5. Start the client (from the client directory)
```
npm start
```

## Technologies

* [Bulma](https://bulma.io/) - CSS library for aesthetic presentation.
* [React](https://reactjs.org/) - JavaScript library for building interfaces.
* [Node](https://nodejs.org/en/) - Out-of-browser JavaScript runtime environment.
* [Mongo](https://www.mongodb.com/) - Database to organize, use and enrich data in real time.
* [Mongoose](https://mongoosejs.com/) - Mongodb object modeling for node.js.
* [mediasoup](https://mediasoup.org/) - WebRTC video conferencing.
* [Google Calendar API](https://developers.google.com/calendar/) - Session scheduling calendar.

Stretch Goals:
-Google Maps
-Socket.io

## Authors

* **Mac Hollister** - *Developer* - (https://github.com/macdhollister)
* **Jonathan Davis** - *Developer* - (https://github.com/JonathanDavis22)
* **Ana Lee** - *Developer* - (http://github.com/anabellee25)
* **Josie Strange** - *Developer* - (https://github.com/Jostrange)
* **Garrett Straight** - *Developer* - (https://github.com/GarrettStraight)