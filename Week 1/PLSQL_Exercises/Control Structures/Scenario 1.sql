DECLARE
    CURSOR customer_cursor IS
        SELECT CustomerID, Age
        FROM Customers;

BEGIN
    FOR customer_record IN customer_cursor LOOP

        IF customer_record.Age > 60 THEN

            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = customer_record.CustomerID;

        END IF;

    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Loan interest rates updated successfully.');

END;
/