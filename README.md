## Getting Started

First, run the development server:

```bash
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Summary

- [Getting Started](#getting-started)
- [Summary](#summary)
- [About the project](#about-the-project)
  - [What users can do](#what-users-can-do)
- [Architectural methodology: Feature-Sliced Design](#architectural-methodology-feature-sliced-design)
  - [Feature-Sliced Design](#feature-sliced-design)
  - [Project Structure](#project-structure)
  - [Rules](#rules)
    - [App Rules](#app-rules)
      - [Can use](#can-use)
      - [Can be used by](#can-be-used-by)
    - [Entities Rules](#entities-rules)
      - [Can use](#can-use-1)
      - [Can be used by](#can-be-used-by-1)
    - [Features Rules](#features-rules)
      - [Can use](#can-use-2)
      - [Can be used by](#can-be-used-by-2)
    - [Pages Rules](#pages-rules)
      - [Can use](#can-use-3)
      - [Can be used by](#can-be-used-by-3)
    - [Shared Rules](#shared-rules)
      - [Can use](#can-use-4)
      - [Can be used by](#can-be-used-by-4)

## About the project

![Overview](https://github.com/user-attachments/assets/7e1dd785-64de-4eff-84be-5b6cdbd5feab)

This app contains 5 pages (Overview, Transactions, Budgets, Pots, and Recurring Bills).

### What users can do

Your users should be able to:

- See all of the personal finance app data at-a-glance on the overview page
- View all transactions on the transactions page with pagination for every ten transactions
- Search, sort, and filter transactions
- Create, read, update, delete (CRUD) budgets and saving pots
- View the latest three transactions for each budget category created
- View progress towards each pot
- Add money to and withdraw money from pots
- View recurring bills and the status of each for the current month
- Search and sort recurring bills
- Receive validation messages if required form fields aren't completed
- Navigate the whole app and perform all actions using only their keyboard
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Code Quality

Refers to the overall effectiveness, reliability, and maintainability of a piece of software code. We can maintain a good code quality 
by using `Husky`. In other words, we don't want to push bad code to project's repository.

#### Strategy

Using this strategy we can archive effectiveness, reliability, and maintainability.

![Screenshot 2025-06-08 at 02 15 05](https://github.com/user-attachments/assets/db626c9c-8486-46f8-ac34-89648e8d155a)


## Architectural methodology: Feature-Sliced Design

Feature-Sliced Design (FSD) is an architectural methodology for scaffolding front-end applications. Simply put, it's a compilation of rules and conventions on organizing code. The main purpose of this methodology is to make the project more understandable and structured in the face of ever-changing business requirements.

### Feature-Sliced Design

This project uses Feature-Based methodology which means
we separete the business rules by Features or Slices.

Those Features are self-containted and declouped of each other.
For example, Feature(A) cannot talk directly to Feature(B). It's
a rule we can make in order to protect business rules, making it
easier to developers search, maintain and test.

### Project Structure

Inside `./src` folder we have:

```txt
├── app
├── entities
├── features
├── pages
└── shared
```

Each folder can be called `layers`. Each layer has its own
rules.

### Rules

Defining rules can make the development more precise,
increase cohesion and make the project less prone
to errors. Everyone on the project can follow a concise
rule and no one can break it.

#### Overview

![image](https://github.com/user-attachments/assets/47098814-9266-41dc-bbb8-24425469182c)

#### App Rules

This layer handles the initialization of the application logic. It defines providers, routers, global styles, global type declarations, and more. Essentially, it serves as the entry point of the application.

##### Can use

- shared, entities, features, pages

##### Can be used by

- No layer can use app.

#### Entities Rules

This layer represents core business entities, such as users, reviews, and comments. It is also an optional layer.

##### Can use

- shared only

##### Can be used by

- features, pages, app

#### Features Rules

This layer focuses on user interactions and functionality that add business value, such as liking content, writing reviews, or rating products. It is an optional layer.

##### Can use

- shared, entities

##### Can be used by

- pages, app

#### Pages Rules

This layer includes the application’s pages.

##### Can use

- shared, entities, features

##### Can be used by

- app only.

#### Shared Rules

This layer holds reusable components and utilities that aren’t linked to specific business logic. It includes the UI kit, axios setup, app configurations, and general helpers.

##### Can use

- Cannot utilize any layer.

##### Can be used by

- entities, features, pages, app.
