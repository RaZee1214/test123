var rest = require("./RestEasy b2.js")
"use strict";


rest.dbSetup(       //Must be called if you want to use mysql calls
    "localhost",    //Host
    "root",         //User
    "",             //Password
    "employees"     //Optionally database
    )

rest.page("/", function(q) {
    return parseInt(q.something) + parseInt(q.somethingelse)
})

rest.page("/view", function() {
    return "SELECT first_name, last_name FROM employees"
})

rest.page("/query", function() {
    return rest.query("INSERT INTO employees(firstname, lastname) VALUES ('Lisa','Test')")
})

rest.page("/file", function() {
    return rest.file("index.html")
})

rest.offerFile('index.js')

rest.offerFile('style.css')

rest.start(8002)