# 📘 Open/Closed Principle (OCP)

The **Open/Closed Principle** is the second of the five SOLID principles of object-oriented design. It states:

> **"Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification."**  
> — Bertrand Meyer

In simple terms, you should be able to **extend** the behavior of a class **without modifying its source code**.

---

## 🧩 Key Concepts

### ✅ Open for Extension
- You should be able to **add new behavior or functionality** by adding new code (e.g., via subclasses, strategies, or plugins).

### ✅ Closed for Modification
- Existing, tested, and deployed code should **not need to be changed** when adding new features.
- Reduces the risk of bugs and improves stability.

---

## 🚫 Anti-pattern: Changing Instead of Extending

If every time a new feature or rule is added, you have to **edit existing code**, you're violating OCP.

- It breaks existing tests.
- It increases the chance of bugs.
- It makes the system harder to scale.

---

## 🌱 Benefits of OCP

- Easier to add new features
- Promotes code reuse and composition
- Safer refactoring and better stability
- Encourages use of abstraction and design patterns

---

## 📌 Example (Bad vs Good)

### ❌ Bad: Violates OCP

```js
class DiscountCalculator {
  calculate(price, type) {
    if (type === 'new') {
      return price * 0.9;
    } else if (type === 'loyal') {
      return price * 0.8;
    } else if (type === 'vip') {
      return price * 0.7;
    }
    return price;
  }
}

class NewCustomerDiscount {
  apply(price) {
    return price * 0.9;
  }
}

class LoyalCustomerDiscount {
  apply(price) {
    return price * 0.8;
  }
}

class VIPCustomerDiscount {
  apply(price) {
    return price * 0.7;
  }
}

// Now this class is closed for modification
class DiscountService {
  constructor(discountStrategy) {
    this.discountStrategy = discountStrategy;
  }

  getFinalPrice(price) {
    return this.discountStrategy.apply(price);
  }
}
```
---

## 🔧 What is Extension?
Extension means adding new behavior by writing new code, not changing what's already written.

You do this through:
- Subclasses
- Strategy classes
- Plugins
- Interfaces or abstract base classes

## 🔄 What is Modification?
Modification means changing existing code.

This is risky because:
- It may introduce bugs.
- It can break existing functionality.
- You may have to rewrite or retest previously stable code.
- It violates the Open/Closed Principle.
