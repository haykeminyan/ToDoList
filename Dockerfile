# syntax=docker/dockerfile:1
FROM python:3.9-slim
ENV PYTHONUNBUFFERED=1
ENV APP_DIR /home/todo-list/app
WORKDIR $APP_DIR
COPY requirements/base.txt $APP_DIR/requirements/base.txt
RUN pip install -r requirements/base.txt
COPY . /ToDoList/
