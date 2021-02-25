const express=require("express")();
const http=require("http");

//intitaite the app
const app=express();
//run app as a server 
const server=http.createServer(app);    //internally createserver function call http.Server(app) ,we can call direct also

app.get('/',(req,res)=>{
res.send(__dirname,'/server/chat.html')
})
server.listen(3000,()=>{
    console.log("serve is listen at 3000");
});
