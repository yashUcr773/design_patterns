# Liskov Substitution Principle (LSP)

The **Liskov Substitution Principle** is the "L" in **SOLID** principles of object-oriented design.  
It states:

> **"Objects of a superclass should be replaceable with objects of its subclasses without altering the correctness of the program."**

---

## 🧠 In Simple Terms

If class `B` is a subtype of class `A`, then `A`'s code should work with instances of `B` **without knowing it**.

### ✅ Good Example
```js
class Bird {
  fly() {
    console.log("Flying...");
  }
}

class Sparrow extends Bird {}

const bird = new Sparrow();
bird.fly(); // ✅ Works perfectly

class Bird {
  fly() {
    console.log("Flying...");
  }
}

class Ostrich extends Bird {
  fly() {
    throw new Error("Ostriches can't fly!");
  }
}

const bird = new Ostrich();
bird.fly(); // ❌ Unexpected behavior — broke LSP

```

## 🔍 Why LSP Matters
- Encourages correct use of inheritance
- Prevents surprising bugs in production
- Makes code easier to extend and reason about

## 🔁 Common LSP Violations
- Overriding methods to throw errors or behave inconsistently
- Subclasses that do less than their parent (e.g., NotImplemented)
- Changing expected return types or effects

## 🔄 Anti-Pattern: Inheritance Abused
- God Object or improper inheritance leads to confusing subclasses that break assumptions.
- A subclass that overrides or disables core behavior breaks the contract.

## ✅ How to Follow LSP
- Use interfaces or abstract classes to define contracts
- Favor composition over inheritance when behavior differs
- Always ask: Can I substitute the subclass anywhere the parent is expected?

## 💡 Related Principles
- Separation of Concerns: Each class should do one job
- Single Responsibility Principle (SRP): Avoid making base classes too general
- Don't Repeat Yourself (DRY): Use inheritance only when behavior is truly shared

## ✅ Summary
- ✔ Subclasses should behave as their parent expects
- ❌ Don't override methods just to throw or break behavior
- 👀 Watch out for assumptions in base classes that subclasses can’t fulfill