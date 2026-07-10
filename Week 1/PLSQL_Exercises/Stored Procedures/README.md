## Scenario 3

### Objective

Create a stored procedure named `TransferFunds` that transfers a specified amount from one account to another after verifying that the source account has sufficient balance.

### Parameters

- `p_sourceAccount`
- `p_destinationAccount`
- `p_amount`

### SQL Concepts Used

- Stored Procedures
- Parameters
- IF-ELSE
- UPDATE
- SELECT INTO
- COMMIT
- ROLLBACK
- Exception Handling
- DBMS_OUTPUT

### Example

```sql
EXEC TransferFunds(101,102,5000);
```

### Expected Output

Funds transferred successfully.