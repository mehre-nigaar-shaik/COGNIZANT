# Exercise 1 - Logging Error Messages and Warning Levels

## Objective

Demonstrate logging of error and warning messages using SLF4J and Logback.

---

## Files

- pom.xml
- LoggingExample.java
- logback.xml

---

## Technologies Used

- Java
- Maven
- SLF4J
- Logback

---

## Dependencies

- slf4j-api 1.7.30
- logback-classic 1.2.3

---

## How to Run

```bash
mvn compile
mvn exec:java -Dexec.mainClass="LoggingExample"
```

---

## Expected Output

```
ERROR LoggingExample - This is an error message

WARN  LoggingExample - This is a warning message
```

---

## Author

Shaik Mehre Nigaar