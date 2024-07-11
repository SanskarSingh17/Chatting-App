 # Interest Messaging App

## Overview
This is a minimal full-stack application that demonstrates capabilities in both front-end and back-end development. It allows users to send interest messages to other users. The recipient can accept or reject the interest, and if accepted, both users can chat with each other. The project utilizes Django for the backend and React for the frontend.

## Design 

### Backend Framework
- **Django**: I’ve chosen Django for its robust features and easy to setting up a RESTful API using Django REST Framework (DRF).
- **Django REST Framework**: For creating API endpoints efficiently.

### Frontend Framework
- **React**:I’ve used react for its component-bases architecture and easy to create dynamic UIs.


### Authentication
- **JWT**: Using `SimpleJWT` for secure token-based authentication.

### Database
- **MySQL**: chosen for simplicity and easy to setup.

## Assumptions

- **User Model**: It is assumed to be using Django’s default user model.
- **Chat System**:  It is simplified version using basic messaging feature without real-time.

## Setup and Running Instructions

### Backend Setup

1. **Create a virtual environment and activate it:**
  `python -m venv env`
  `env\Scripts\activate`
2. **Apply migrations**
  `python manage.py makemigrations`
  `python manage.py migrate`
3. **Run the server**
  `python manage.py runserver`

### Frontend Setup

1. **Navigate to the frontend directory**
  `cd interest-app`
2. **Install dependencies**
  `npm install`
3. **Run the server**
  `npm start`
