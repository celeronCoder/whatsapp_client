# App Breakdown

## Frontend

- React App.
- Axios, To fetch the database.
- Pusher-js to trigger render the new message.

#### Firebase 

- For Authentication
- Hosting The frontend

## Backend

- Express for web Server.
- NodeJS as the language.
- MongoDB as the Database.
- Pusher to replace socket.io

#### WEB Sockets

- __pusher__ that will fire axios to fetch for the real time
- __MongoDB-ChangeStream__ that will fire __pusher__ on change of the DB collection.

#### Fun API 

- __[Dicebear](https://avatars.dicebear.com)__ to put random avatars to the room every time the app render