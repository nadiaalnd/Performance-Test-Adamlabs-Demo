# PERFORMANCE TEST DEMO ADAMLABS

## Table Of Contents

- [PERFORMANCE TEST DEMO ADAMLABS](#performance-test-demo-adamlabs)
    - [Table Of Contents](#table-of-contents)
    - [Author](#author)
- [Documentation](#documentation)
    - [How To Run?](#how-to-run)
    - [Notes](#notes)
- [Tester](#contact)

## Author

- [@nadiaalnd](https://github.com/nadiaalnd)

# Documentation

## How To Run?

- Open Terminal or Command Prompt
- Change to the K6-ADAMLABS Directory
  > ```
  > cd Performance-Test-ADAMLABS
  > ```
- Install K6
  > ```
  > winget install k6 --source winget
  > ```
- Install Dependencies
  > ```
  > npm install k6
  > ```
- Run the Tests 
  For example, to run the `auth` module:
    > ```
    > k6 run scripts/auth/PostLogin.js
    > ```

## Notes

- Ensure you have Node.js installed on your system to manage K6 dependencies.
- Make sure you have K6 installed to run the performance tests.

---

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Tester

- Nadila Aulya S.M

<p align="right">(<a href="#readme-top">back to top</a>)</p>
