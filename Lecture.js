var rest = require("./RestEasy b2.js")
"use strict";
/*
rest.dbSetup(       //Must be called if you want to use mysql calls
    "localhost",    //Host
    "node",         //User
    "node.js",      //Password
    "node"          //Optionally database
    )
*/


rest.page("/", function(q) {
    return parseInt(q.something) + parseInt(q.somethingelse)
})

rest.page("/view", function() {
    return "SELECT * FROM names"
})

rest.page("/query", function() {
    return rest.query("INSERT INTO names(name) VALUES ('Lisa')")
})

rest.page("/file", function() {
    return rest.file("index.html")

    on  

})

rest.page("/fancy", function(){
    return rest.file("index.html")
})

rest.offerFile('index.js')

rest.start(8002)