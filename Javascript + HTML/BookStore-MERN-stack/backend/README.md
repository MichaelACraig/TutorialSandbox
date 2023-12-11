PERSONAL NOTES FOR CREATING THIS PROJECT:

Steps to creating a web application with the MERN Stack:

1. Create folders for the backend and frontend for tidiness

    Backend:
    1. Install necessary packages through npm (init -y, npm i express, npm i nodemon)
        - Scripts in package.json (line 7) are keywords we can use in the backend to run certain commands
        - Creating a "type": "module" (see line 5 on package.json) allows us to use the import and export key words
        - So, using a terminal command like, "npm run dev" will start our server through nodemon (See line 9 in package.json)
    2. Create the server file and important variable file to initialize our backend (index.js and config.js in this case) and create a basic server
        - There is a template shortcut we can use to make this for us, look it up later
    3. Create methodology for handling HTTP requests
        - When we first open the localhost:300 webpage, we are shown "Cannot GET /", so write the methodology for handling a GET request.
        - Same line of thinking for all other HTTP requests
    4. Add MongoDB and Mongoose to Node.js
        -MongoDB Atlas is used since its free
        -install: npm i mongoose and npm i mongodb
        -Import Mongoose to index.js and use the mongoose.connect() method, passing in the given URL from MongoDB Atlas as an argument to access the Database.
        - Make a then, catch function within the mongoose.connect() method to ensure we properly deal with successful and failed links to the database
    5. Create your Models and Refactor if necessary
        - For the project, we'll be creating books. Store models in a seperate folder for tidiness and create bookModel.js
        - See mongoose website for the simpliest functionality of a model, but we can use Schemas (Javascript classes) to create more complex data. the bookModel schema will store info on the title, author, and publishYear, as well as timestamps of each datapoint.
        - Import yor model to the server (index.js) and create functionality for all necessary HTTP requests (POST, etc)
        - Test your requests on Insomina
        - Refactor your routes if you have multiple different calls (i.e you have the books route, and also another books route that requires more lines than just title, author, and publisher)
    6. Handle CORS Policy (Cross-Origin Resource Sharing)
        - Install cors (npm i cors) and use it as a middleware in our server file (index.js)
        - Two options: Allow all origins as default or allow custom origins. Either way will ensure CORS Policy is handled

    
    Frontend:
    1. Create the frontend app using Vite or CRA (Create React App)
        - Navigate to the main folder, then run "npm create vite@latest"
        - Name the project folder than select what is needed for the react app
        - Navigate inside the project folder and run "npm i"
        - Install Tailwind CSS
            - Using Vite:
            - https://tailwindcss.com/docs/guides/vite

        
        

