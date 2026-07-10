USE EmployeeDB;
GO

CREATE PROCEDURE sp_GetEmployeeCountByDepartment
    @DepartmentID INT
AS
BEGIN
    SELECT COUNT(*) AS TotalEmployees
    FROM Employees
    WHERE DepartmentID = @DepartmentID;
END;
GO

EXEC sp_GetEmployeeCountByDepartment 1;

EXEC sp_GetEmployeeCountByDepartment 2;

EXEC sp_GetEmployeeCountByDepartment 3;

EXEC sp_GetEmployeeCountByDepartment 4;


EXEC sp_InsertEmployee
    5,
    'Robert',
    'Brown',
    2,
    6500,
    '2022-05-10';

    EXEC sp_GetEmployeeCountByDepartment 2;