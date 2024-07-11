 # Interest Messaging App

## Overview
This is a minimal full-stack application that demonstrates capabilities in both front-end and back-end development. It allows users to send interest messages to other users. The recipient can accept or reject the interest, and if accepted, both users can chat with each other. The project utilizes Django for the backend and React for the frontend.

## Design 

### Backend Framework
- Python 3.10+
- Django 4.0+
- Django REST Framework
- djangorestframework-simplejwt

### Frontend Framework
- **React**:I’ve used react for its component-bases architecture and easy to create dynamic UIs.
    npm (Node Package Manager)

### Authentication
- **JWT**: Using `SimpleJWT` for secure token-based authentication.

### Database
- **MySQL**: chosen for simplicity and easy to setup.

## Assumptions

- **User Model**: It is assumed to be using Django’s default user model.
- **Chat System**:  It is simplified version using basic messaging feature without real-time.

## Setup and Running Instructions

### Backend Setup

**Clone the repository:**
   1.git clone https://github.com/yourusername/Interest.git
   `cd Interest`
   pip install -r requirements.txt
2. **Create a virtual environment and activate it:**
  `python -m venv env`
  `env\Scripts\activate`
3. **Apply migrations**
  `python manage.py makemigrations`
  `python manage.py migrate`
4. **Run the server**
  `python manage.py runserver`

### Frontend Setup

1. **Navigate to the frontend directory**
  `cd interest-app`
2. **Install dependencies**
  `npm install`
3. **Run the server**
  `npm start`

### Running the Application
**Backend**
1.Ensure the virtual environment is activated.
2.Start the Django development server
`python manage.py runserver`

**Frontend**
1.Ensure you are in the interest-app directory.
2.Start the React development server:
`npm start`


Open your browser and navigate to http://127.0.0.1:8000/ For backend
Open your browser and navigate to http://localhost:3000 to see the application.
