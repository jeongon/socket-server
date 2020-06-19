

import Server from "./classes/server"
import { SERVER_PORT } from "./global/enviroment";
import router from "./routes/routes";
import bodyParser from 'body-parser';
import cors from 'cors';


const server = new Server();


//CORS

// server.app.use(cors ({origin:true, credentials:true}));
server.app.use(bodyParser.urlencoded({extended:false}));
server.app.use(bodyParser.json());
// server.app.use(cors());


server.app.use('/',router);

server.start ( ()=>{
    console.log(`arrandoo en el puerto  ${SERVER_PORT}`)
});



/*

    tsc -w
    nodemon ./dist/server.js
    nodemon (package.json, main:./dist/server.js)
*/

