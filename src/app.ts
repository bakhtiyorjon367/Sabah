import cors from "cors";
import  express  from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { MORGAN_FORMAT } from "./libs/config";
import { Server as SocketIOServer } from "socket.io";
import  http  from "http";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";
import { T } from "./libs/types/common";

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
    uri: String(process.env.MONGO_URL),
    collection: "session",
});

//Entrance
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static("./uploads"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors({ credentials:true, origin:true }));
app.use(cookieParser());                        //  Cookielarni ichiga Tokenlarni joylash uchun 
app.use(morgan(MORGAN_FORMAT));

// Sessions
app.use(
    session({
        secret: String(process.env.SESSION_SECRET),
        cookie: {
            maxAge: 1000 * 3600 * 6, // 6 hours
        },
        store: store,
        resave: true,
        saveUninitialized: true,
    })
);

app.use(function(req, res, next){
    const sessionInstance = req.session as T;
    res.locals.member = sessionInstance.member;
    next();
});


//Views
app.set('views', path.join(__dirname, "views")); 
app.set("view engine", "ejs");                   

//Routing
app.use('/admin', routerAdmin); //BSSR: EJS framework uchun ishlatamiz
app.use('/', router);           //SPA: REACT uchun ishlatamiz

const server = http.createServer(app);
const io = new SocketIOServer(server, {
    cors: {
        origin: true,
        credentials:true,
    }
});

let sumOfClients = 0;
io.on("connection", (socket) =>{
    sumOfClients++;
    console.log(`Connected & total [${sumOfClients}]`);

    socket.on("disconnect", () =>{
        sumOfClients--;
        console.log(`Disconnected & total [${sumOfClients}]`);
    })
});

export default server;