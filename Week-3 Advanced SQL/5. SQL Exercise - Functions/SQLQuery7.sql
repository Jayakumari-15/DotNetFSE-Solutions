USE EmployeeDB;
GO

CREATE FUNCTION fn_CalculateAnnualSalary
(
    @EmployeeID INT
)
RETURNS DECIMAL(10,2)
AS
BEGIN
    DECLARE @AnnualSalary DECIMAL(10,2);

    SELECT @AnnualSalary = Salary * 12
    FROM Employees
    WHERE EmployeeID = @EmployeeID;

    RETURN @AnnualSalary;
END;
GO

SELECT dbo.fn_CalculateAnnualSalary(1) AS AnnualSalary;

SELECT Salary
FROM Employees
WHERE EmployeeID = 1;

SELECT dbo.fn_CalculateAnnualSalary(2) AS AnnualSalary;

SELECT dbo.fn_CalculateAnnualSalary(3) AS AnnualSalary;