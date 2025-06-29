# String Calculator

This project implements the **String Calculator** using **Test-Driven Development (TDD)** principles. It is part of the Incubyte Software Craftsmanship hiring process.

## ✅ Requirements Covered

- Empty string returns 0
- A single number returns that number
- Two or more comma-separated numbers return their sum
- Supports new line `\n` as a delimiter
- Supports custom delimiters using the `//[delimiter]\n` format
- Negative numbers throw an exception with a message listing all negative numbers

## 🛠️ Tech Stack

- **Node.js**
- **Jest** for testing

## 📁 Project Structure

```
string-calculator/
│
├── src/
│   └── stringCalculator.js        # Calculator logic
│
├── test/
│   └── stringCalculator.test.js   # Jest tests
│
├── package.json
└── README.md
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/string-calculator.git
cd string-calculator
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run tests

```bash
npm test
```

## 🧪 Sample Test Output

All tests follow the TDD approach, and are written using Jest.

```bash
 PASS  test/stringCalculator.test.js
  String Calculator
    ✓ returns 0 for empty string
    ✓ returns number for single number
    ✓ returns sum for two comma-separated numbers
    ✓ returns sum for multiple comma-separated numbers
    ✓ supports new lines between numbers
    ✓ supports custom delimiters
    ✓ throws on negative numbers
    ✓ throws listing all negative numbers

Test Suites: 1 passed, 1 total
Tests:       8 passed, 8 total
```

## 📌 Notes

- The code follows TDD best practices with small, incremental commits.
- Each feature and edge case is backed by automated tests.
- Negative numbers are handled gracefully via meaningful error messages.