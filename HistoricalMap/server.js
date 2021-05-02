const express = require("express");

const app = express();

//app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname));
app.use(express.static(__dirname + "/js"));
app.use(express.static(__dirname + "/data"));


app.use("/", function(request, response) {

    response.send("<h1>Главная страница</h1>");
});

app.listen(3000);