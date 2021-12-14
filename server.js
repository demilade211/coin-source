const express = require("express");
const { createServer } = require('http')
const next = require('next')
const dotenv = require("dotenv")
const login = require("./Routes/loginRoute");
const signUp = require("./Routes/signupRoute");
const homePage = require("./Routes/homePageRoute");


const app = express();
const server = createServer(app);
const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })// tells if it is in dev or production node 
const handle = nextApp.getRequestHandler()
dotenv.config({path: "./.env"});
const connectDb = require("./utilsServer/connectDb")
const PORT = process.env.PORT || 3000;
app.use(express.json()); // this is the body parser
app.use(express.urlencoded({extended: false}));//to handle url encoded data
connectDb();

nextApp.prepare().then(()=>{
    app.use("/login",login);
    app.use("/signup",signUp);
    app.use("/homepage",homePage);

    app.all("*",(req,res)=> handle(req,res));//this is because all pages in nextjs are serverside rendered without it it wont work

    server.listen(PORT,err=>{
        if(err) throw err;
        console.log("express server running on " + PORT);
    })
})
