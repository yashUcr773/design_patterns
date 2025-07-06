# Interface Segregation Principle (ISP)

The **Interface Segregation Principle** is the "I" in the SOLID principles of object-oriented design.

> **"Clients should not be forced to depend on methods they do not use."**

---

## 🧠 In Simple Terms

Don't create large, all-in-one interfaces. Instead, break them into **smaller, more specific contracts** so that implementing classes only need to define what they actually use.

---

## Notes

- JS does not have interfaces
- JS does not support multiple class inheritances

---

## 🚫 Problem with Fat Interfaces

Imagine you have an interface that forces all printers to support scanning, faxing, and printing:

```js
class Machine {
  print() {}
  scan() {}
  fax() {}
}

class OldPrinter extends Machine {
  print() {
    console.log("Printing...");
  }

  scan() {
    throw new Error("Not supported");
  }

  fax() {
    throw new Error("Not supported");
  }
}

class Printer {
  print() {}
}

class Scanner {
  scan() {}
}

class Fax {
  fax() {}
}

class BasicPrinter extends Printer {
  print() {
    console.log("Basic printing...");
  }
}

```
Now:
- BasicPrinter only depends on what it actually supports.


## 🧱 Separation of Concerns + Composition
- Smaller, focused contracts
- Composition over inheritance
- More modular and testable code

## 🔄 Related Principles
- Single Responsibility Principle (SRP): Each interface/class should do one thing well.
- Open/Closed Principle (OCP): Design contracts that can be extended without modification.
- Don’t Repeat Yourself (DRY): Avoid bloated base classes reused everywhere.

## ✅ Summary
- Don’t force classes to implement unused methods
- Split big interfaces into smaller, meaningful ones
- Promote flexible design with modular capabilities