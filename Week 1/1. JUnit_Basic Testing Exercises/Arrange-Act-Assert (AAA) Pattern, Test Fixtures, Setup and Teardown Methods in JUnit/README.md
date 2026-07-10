# Exercise 4 - Arrange-Act-Assert (AAA) Pattern

## Objective

Demonstrate the Arrange-Act-Assert (AAA) testing pattern and use setup and teardown methods in JUnit.

---

## Files

- pom.xml
- Calculator.java
- CalculatorTest.java

---

## Concepts Used

- Arrange-Act-Assert Pattern
- @Before
- @After
- @Test
- assertEquals()

---

## Arrange-Act-Assert

### Arrange
Prepare the required objects and input values.

### Act
Execute the method being tested.

### Assert
Verify the expected result.

---

## Setup and Teardown

- **@Before** initializes required objects before each test.
- **@After** performs cleanup after each test.

---

## Technologies Used

- Java
- Maven
- JUnit 4.13.2

---

## How to Run

```bash
mvn test
```

---

## Expected Output

```
Setup completed.
Teardown completed.

Tests run: 1
Failures: 0
Errors: 0

BUILD SUCCESS
```

---

## Author

Shaik Mehre Nigaar