# Exercise 7 - Financial Forecasting

## Objective

Develop a financial forecasting tool using recursion to predict future values based on a constant annual growth rate.

---

## Files

- FinancialForecast.java
- ForecastTest.java

---

## Concepts Used

- Recursion
- Method Calling
- Base Case
- Time Complexity

---

## Algorithm

1. Accept present value.
2. Accept annual growth rate.
3. Accept number of years.
4. If years become 0, return the present value.
5. Otherwise, recursively calculate the value for the next year.

---

## Time Complexity

O(n)

where n is the number of years.

---

## Optimization

The recursive solution can be optimized using:

- Dynamic Programming (Memoization)
- Iterative approach

These techniques avoid repeated recursive calls and reduce overhead.

---

## Conclusion

Recursion provides a simple and elegant solution for financial forecasting problems. However, for very large inputs, an iterative or memoized approach is more efficient.

---

## Author

Shaik Mehre Nigaar