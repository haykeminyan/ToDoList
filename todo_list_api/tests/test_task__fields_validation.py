import pytest
import requests
from rest_framework.reverse import reverse

ENDPOINT = 'http://127.0.0.1:8000/api/task'


def create_request(username, is_done, title, description):
    return {
        'username': username,
        'is_done': is_done,
        'title': title,
        'description': description,
    }


@pytest.mark.parametrize(
    'username, is_done, title, description',
    [
        ('hayk', True, 'foo', 'boo'),
        ('hayk', 'foo', 'foo', 'boo'),
        ('hayk', True, None, 'boo'),
        (None, True, 'foo', 'boo'),
    ]
)
def test_task___fields_validation(username, is_done, title, description):
    # given
    request = create_request(username=username, is_done=is_done, title=title, description=description)

    # when
    response = requests.post(ENDPOINT, json=request)

    # then
    if is_done == 'foo':
        assert response.status_code == 400
        assert response.json()['is_done'] == ['Must be a valid boolean.']
    elif title is None:
        assert response.status_code == 400
        assert response.json()['non_field_errors'] == ['Please add title']
    elif username is None:
        assert response.status_code == 400
        assert response.json()['non_field_errors'] == ['Please add username']
    else:
        assert response.status_code == 201
        assert response.json()['username'] == 'hayk'
        assert response.json()['is_done'] == True
        assert response.json()['title'] == 'foo'
        assert response.json()['description'] == 'boo'
