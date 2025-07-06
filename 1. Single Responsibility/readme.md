# 📘 Single Responsibility Principle (SRP)

The **Single Responsibility Principle** is one of the five SOLID principles of object-oriented design. It states:

> **"A class should have only one reason to change."**  
> — Robert C. Martin (Uncle Bob)

In simple terms, a class should have only **one responsibility** or **one primary job**.

---

## 🧩 Key Concepts

### ✅ Single Responsibility
- A class should do **one thing** and do it well.
- It should encapsulate only **one piece of behavior** or concern in the system.
- A class should only have 1 reason to change.

### ✅ Separation of Concerns
- Break large modules into smaller ones, each handling a specific **concern**.
- This improves **testability**, **readability**, and **maintainability**.

### 🚫 God Object (Anti-pattern)
- A **god object** tries to do everything.
- These violate SRP by combining multiple unrelated responsibilities.
- They're hard to maintain, test, and understand.

### 🚫 Anti-patterns
- Classes with too many roles lead to **tight coupling** and **hidden bugs**.
- A small change can have unintended side effects.

---

## 💡 Related Principle

### 🔁 Don't Repeat Yourself (DRY)
- SRP helps you follow **DRY** by isolating responsibilities.
- Repeating logic across a bloated class is a sign that SRP may be violated.

---

## 🌱 Benefits of SRP

- Cleaner and more modular code
- Easier to write tests
- Better code collaboration
- Scales better with growing complexity

---

## 📌 Example (Bad vs Good)

### ❌ Bad: God Object (Too many responsibilities)

```js
class Report {
  generateData() {
    // Logic to generate data
  }

  formatToPDF(data) {
    // Logic to format as PDF
  }

  sendEmail(pdf) {
    // Logic to send email
  }
}

class ReportGenerator {
  generate() {
    // Logic to generate data
  }
}

class PDFFormatter {
  format(data) {
    // Logic to format data into PDF
  }
}

class EmailSender {
  send(file) {
    // Logic to send file via email
  }
}
```
---

## 📌 Summary

- A change to **save the data as a PDF** or the **email sending logic** should **not affect** the class responsible for **generating the report**.
- Similarly, if the **report data generation** logic changes, the **persistence or formatting class** should remain unaffected.