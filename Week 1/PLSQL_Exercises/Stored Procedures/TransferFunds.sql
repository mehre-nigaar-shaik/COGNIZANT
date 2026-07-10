CREATE OR REPLACE PROCEDURE TransferFunds (
    p_sourceAccount      IN NUMBER,
    p_destinationAccount IN NUMBER,
    p_amount             IN NUMBER
)
AS
    v_balance NUMBER;
BEGIN

    -- Get the balance of the source account
    SELECT Balance
    INTO v_balance
    FROM Accounts
    WHERE AccountID = p_sourceAccount;

    -- Check if sufficient balance is available
    IF v_balance >= p_amount THEN

        -- Deduct amount from source account
        UPDATE Accounts
        SET Balance = Balance - p_amount
        WHERE AccountID = p_sourceAccount;

        -- Add amount to destination account
        UPDATE Accounts
        SET Balance = Balance + p_amount
        WHERE AccountID = p_destinationAccount;

        COMMIT;

        DBMS_OUTPUT.PUT_LINE('Funds transferred successfully.');

    ELSE

        DBMS_OUTPUT.PUT_LINE('Insufficient balance. Transfer failed.');

    END IF;

EXCEPTION
    WHEN NO_DATA_FOUND THEN
        DBMS_OUTPUT.PUT_LINE('Source account not found.');

    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error: ' || SQLERRM);

END;
/