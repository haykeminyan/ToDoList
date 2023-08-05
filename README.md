# Build a Todo List Application

Stack

Backend part

* Django 4.2.4
* Django Rest Framework 3.14.0
* Python 3.9
* Pytest 7.4.0

How to launch locally via docker:
1. docker build -t todo_list_api_last .
2. docker-compose up task_app

Application will be available in 127.0.0.1:8000

Endpoints which can be used in this application

1. admin/
2. api/task
3. api/task/<int:pk>
4. users/
5. users/<int:pk>/

Frontend part

How to launch locally:
1. npm run start

* Angular 14.2.3
* Typescript 4.7.2

Project Description:
Develop a straightforward and efficient Todo List application equipped with the following essential features:

Technical Requirements:
Front-end:
Craft an intuitive and interactive user interface using a contemporary front-end framework such as React, Angular, or Vue.js.

Back-end:
Design a robust back-end system utilizing a backend technology of your preference; for instance, Python with FastAPI, to manage data storage and retrieval effectively.

Database:
Incorporate a database of your choice, such as MySQL, PostgreSQL, or MongoDB, to store and organize tasks efficiently.

Bonus Points (Optional):
Appreciated enhancements that can be tackled if time allows:

- **Priority Setting:** Allow users to assign priorities to tasks for better organization.
- **Task Filtering:** Implement filtering options to facilitate the viewing of pending or completed tasks.
- **User Authentication:** Create a secure user authentication system, ensuring that each user can access and manage their personalized set of tasks.

Submission:
Kindly provide a GitHub repository link containing your well-documented codebase, accompanied by a concise README. The README should outline the steps required to locally run the application.

While full completion of the project is encouraged, feel free to implement as much as possible based on your availability.

Key Features to Implement:

1. **Add New Task:** Enable users to create new tasks by specifying a title and description.
2. **Task Completion:** Allow users to mark tasks as completed, promoting effective task tracking.
3. **Task Deletion:** Implement the capability to delete tasks that are no longer needed.
4. **Task Listing:** Display a comprehensive list of tasks, including both pending and completed ones, to provide a clear overview.

Additional Enhancements:

1. **Visual Appeal:** Employ a visually pleasing and responsive design, contributing to an engaging user experience.
2. **State Management:** Utilize state management techniques, such as Redux, to proficiently manage the application's state.
3. **RESTful API:** Create well-defined and structured RESTful API endpoints to facilitate seamless task management.
4. **Data Validation:** Implement comprehensive data validation mechanisms to ensure the consistency and accuracy of task data.

Feel free to prioritize the tasks according to your schedule and expertise. Your dedication and effort in enhancing the application are highly valued.
