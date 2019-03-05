test123

Husk at lave den stored procedure der skal bruges for at kunne kalde den: 

DROP PROCEDURE IF EXISTS add_emp;

DELIMITER // 
CREATE PROCEDURE add_emp()
BEGIN 
	set @pre_emp_id = (SELECT emp_no FROM employees ORDER BY emp_no DESC LIMIT 1);
    set @new_emp_id = (@pre_emp_id +1);
	INSERT INTO employees(emp_no, first_name, last_name) VALUES (@new_emp_id, 'Lisa', 'Yeeters');
END // 
DELIMITER ; 

