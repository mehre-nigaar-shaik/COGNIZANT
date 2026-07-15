# Hands-on 2 - Hello World RESTful Web Service

## Objective

Create a REST API that returns a simple "Hello World!!" response.

---

## URL

GET /hello

Example

http://localhost:8083/hello

---

## Controller

HelloController

---

## Method

```java
@GetMapping("/hello")
public String sayHello()
```

---

## Response

```
Hello World!!
```

---

## Technologies Used

- Java 26
- Spring Boot 4.x
- Spring Web
- Maven

---

## Run

```bash
mvn spring-boot:run
```

---

## Expected Output

Browser/Postman

```
Hello World!!
```