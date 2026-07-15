# Hands on 1 - Create a Spring Web Project using Maven

## Objective

Create a Spring Boot Web application using Maven and verify that the application starts successfully.

---

## Technologies Used

- Java 17
- Spring Boot
- Spring Web
- Spring Boot DevTools
- Maven

---

## Project Structure

- src/main/java
- src/main/resources
- src/test/java

---

## Main Class

SpringLearnApplication.java

---

## Annotation Used

@SpringBootApplication

This annotation combines:

- @Configuration
- @EnableAutoConfiguration
- @ComponentScan

---

## Build

```bash
mvn clean compile
```

---

## Run

```bash
mvn spring-boot:run
```

---

## Expected Output

```
Started SpringLearnApplication

Inside main() method
```

---

## Author

Shaik Mehre Nigaar