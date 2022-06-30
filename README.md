# Konekt-code-tets

## Project set up

1. run the command *npm install* to insall the necessary dependencies

2. run the command *npm start* to start the server on port 5000

3. To execute tests run the command  *npm run test*

## API ENDPOINTS

### /tasks/start

 Method: GET <br>
 status: 200 on success 500 on failure<br>
 response: {id: "id"}<br>
 Content-Type: application/json<br>

### /taskas/status/:id
  
   Method: GET <br>
   status: 200 on success, 404 on not found, 500 on failure <br>
   response: {id: "id", status: "status"} <br>
   Content-Type: application/json <br>
