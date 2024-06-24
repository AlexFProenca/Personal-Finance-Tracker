# Personal-Finance-Tracker
The Personal Finance Tracker is a web application designed to help users manage their finances efficiently. It enables users to track their income and expenses, categorize transactions, and view a summary of their financial status. This project leverages the power of Python for backend processing, React for the frontend, and JavaScript to enhance user interactions. The application offers user authentication, secure data management, and a responsive interface.

Technologies Used
Backend: Python with Flask, SQLAlchemy, and Flask-Migrate.
Frontend: React with React Router for navigation and Axios for API communication.
Database: SQLite for development and PostgreSQL for production.
Authentication: JWT (JSON Web Token) for secure user authentication.
Deployment: Docker for containerization and Heroku for hosting.
Features
User Registration and Authentication

Secure user registration and login using JWT.
Password hashing for secure storage (bcrypt).
Dashboard

Overview of financial status with total income, total expenses, and balance.
Visualization of expenses by category.
Transaction Management

Add, edit, and delete income and expense transactions.
Categorize transactions for better organization.
Responsive Design

User-friendly interface that works seamlessly on both desktop and mobile devices.
Project Structure
Backend:

app/__init__.py: Initializes Flask app and extensions.
app/models.py: Defines database models for users and transactions.
app/routes.py: Contains routes for user authentication and transaction management.
run.py: Entry point for running the Flask app.
Frontend:

src/components/Login.js: Component for user login.
src/components/Register.js: Component for user registration.
src/components/Dashboard.js: Component for displaying the dashboard and managing transactions.
src/App.js: Main application component with routing.
How to Run the Project
Backend Setup:

Clone the repository: git clone <repository-url>
Navigate to the backend directory: cd finance-tracker-backend
Set up the virtual environment: python -m venv venv
Activate the virtual environment: source venv/bin/activate (On Windows use venv\Scripts\activate)
Install the required packages: pip install -r requirements.txt
Initialize the database: flask db init, flask db migrate -m "Initial migration", flask db upgrade
Run the Flask app: python run.py
Frontend Setup:

Navigate to the frontend directory: cd finance-tracker-frontend
Install the required packages: npm install
Start the React app: npm start
Access the Application:

Open your web browser and navigate to http://localhost:3000 to access the frontend.
The backend will be running at http://localhost:5000.
