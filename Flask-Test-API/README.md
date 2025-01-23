# Flask-Test-API


## Table of Contents

- [Project Overview](#project-overview)
- [Installation et Configuration](#installation-et-configuration)
  - [Prérequis](#prérequis)
  - [Installation](#installation)
- [API](#api)
  - [GET /tasks](#get-task)
  - [POST /tasks](#post-task)
  - [PUT /tasks/<id>](#put-taskid)
  - [DELETE /tasks/<id>](#delete-taskid)

---

## Project Overview
This is a simple Flask-based application for managing tasks. Its RESTful API allows users to perform CRUD (Create, Read, Update, Delete) operations on tasks. The application connects to a PostgreSQL database and uses SQLAlchemy for ORM-based data handling.

---
## Installation et Configuration

### Prérequis
Before running the project, ensure you have the following software installed:

- **Python 3.x** (Recommended: Python 3.7 or higher)
- **PostgreSQL** (Make sure you have a PostgreSQL server running )
- **pip** (Python package installer)
---


### Installation

Follow these steps to get the project running:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RaniaDg12/TestProjects.git
   cd TestProjects/Flask-Test-API
   ```
2. **Create and activate the virtual environment:**
   ```bash
   python -m venv venv
   venv\Scripts\activate
   ```
3. **Install the required dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
4. **Set up the environment variables:**
   Create a .env file in the root of your project
   ```bash
   DATABASE_URL=postgresql://<user>:<password>@localhost:<port>/<database_name>
   ```
 5. **Run the project:**
   ```bash
   flask run
   ```

## API

The project exposes the following API endpoints for managing tasks:

### GET /tasks

- **Description:**  
  Returns a list of all tasks stored in the database.

- **Request:**  
  `GET http://127.0.0.1:5000/tasks`

- **Réponse:**  
  **Status 200 OK**: A JSON array containing the task objects.

### POST /tasks

- **Description:**  
  Adds a new task to the database.

- **Request:**  
  `GET http://127.0.0.1:5000/tasks`

- **Réponse:**  
  **Status 201 Created**: New task object created.

### PUT /tasks/<id>

- **Description:**  
  Updates the details of an existing task by ID.

- **Request:**  
  `PUT http://127.0.0.1:5000/tasks/<id>`

- **Réponse:**  
  **Status 200 OK**: Task object updated.
  **Status 404 Not Found**: Task object not found.

### DELETE /tasks/<id>

- **Description:**  
  Deletes a task by its ID.

- **Request:**  
  `DELETE http://127.0.0.1:5000/tasks/<id>`

- **Réponse:**  
  **Status 200 OK**: Task object deleted.
  **Status 404 Not Found**: Task object not found.   
