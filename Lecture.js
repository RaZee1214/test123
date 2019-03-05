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
    return "SELECT first_name, last_name FROM employees WHERE first_name = 'lisa'"
})

rest.page("/query", function() {
    return rest.query("CALL add_emp();")
    /* DROP PROCEDURE IF EXISTS add_emp;

DELIMITER // 
CREATE PROCEDURE add_emp()
BEGIN 
	set @pre_emp_id = (SELECT emp_no FROM employees ORDER BY emp_no DESC LIMIT 1);
    set @new_emp_id = (@pre_emp_id +1);
	INSERT INTO employees(emp_no, first_name, last_name) VALUES (@new_emp_id, 'Lisa', 'Yeeters');
END // 
DELIMITER ; */

/* SELECT * FROM `employees` ORDER  BY emp_no DESC; */

})


rest.page("/file", function() {
    return rest.file("index.html")

    on

})

rest.offerFile('index.js')

rest.offerFile('style.css')

rest.start(8002)