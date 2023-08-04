import pytest
import requests

ENDPOINT = 'http://127.0.0.1:8000/api/task'


def create_request():
    return {
        "username": "ashot1",
        "is_done": False,
        "title": "as",
        "description": "123"
    }


def test_initial_test():
    # given

    request = create_request()

    # when
    response = requests.post(ENDPOINT, json=request)

    # then
    assert response.status_code == 201
