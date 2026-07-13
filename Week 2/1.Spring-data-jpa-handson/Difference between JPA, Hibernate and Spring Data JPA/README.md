# Hands on 4 - Difference between JPA, Hibernate and Spring Data JPA

## Objective

Understand the differences between Java Persistence API (JPA), Hibernate, and Spring Data JPA.

---

## Java Persistence API (JPA)

- JPA stands for **Java Persistence API**.
- It is a **Java Specification (JSR 338)**.
- It defines standards for mapping Java objects to relational databases.
- JPA does not provide an implementation.
- It requires an implementation such as Hibernate.

### Features

- Object Relational Mapping (ORM)
- Entity Management
- JPQL (Java Persistence Query Language)
- Standard API for persistence

---

## Hibernate

- Hibernate is an **ORM Framework**.
- It is one of the most popular implementations of JPA.
- It converts Java objects into database tables automatically.
- Hibernate provides Session, Transaction, HQL and Caching features.

### Features

- Implements JPA
- Session Management
- Transaction Management
- Caching
- Lazy Loading

---

## Spring Data JPA

- Spring Data JPA is built on top of JPA.
- It reduces boilerplate code.
- It provides ready-made CRUD operations.
- It internally uses Hibernate (or another JPA provider).
- It manages transactions using Spring Framework.

### Features

- Repository Interfaces
- CRUD Methods
- Query Methods
- Pagination
- Sorting
- Transaction Management

---

# Comparison

| Feature | JPA | Hibernate | Spring Data JPA |
|----------|-----|-----------|-----------------|
| Type | Specification | ORM Framework | Spring Module |
| Implementation | No | Yes | Uses JPA Implementation |
| Boilerplate Code | High | Medium | Very Low |
| CRUD Operations | Manual | Manual | Automatic |
| Transaction Management | Limited | Manual | Automatic |
| Repository Support | No | No | Yes |

---

# Hibernate Example

```java
public Integer addEmployee(Employee employee) {

    Session session = factory.openSession();
    Transaction tx = null;
    Integer employeeID = null;

    try {

        tx = session.beginTransaction();

        employeeID = (Integer) session.save(employee);

        tx.commit();

    } catch (HibernateException e) {

        if (tx != null)
            tx.rollback();

        e.printStackTrace();

    } finally {

        session.close();

    }

    return employeeID;
}
```

---

# Spring Data JPA Example

## EmployeeRepository.java

```java
public interface EmployeeRepository
        extends JpaRepository<Employee, Integer> {

}
```

## EmployeeService.java

```java
@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Transactional
    public void addEmployee(Employee employee) {

        employeeRepository.save(employee);

    }
}
```

---

# Advantages of Spring Data JPA

- Less code
- Easy CRUD operations
- Better readability
- Automatic transaction management
- Integration with Spring Boot
- Faster development

---

# Conclusion

- **JPA** is a specification.
- **Hibernate** is an implementation of JPA.
- **Spring Data JPA** is a Spring module that simplifies working with JPA by reducing boilerplate code and providing repository support.

---

## Author

Shaik Mehre Nigaar