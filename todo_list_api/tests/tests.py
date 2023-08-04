import json
from django.urls import reverse

import parameterized as parameterized
from django.test import TestCase

from todo_list_api.tests.conftest import create_task


# Create your tests here.

def test_create_task(self):
    # given
    request = create_task()

    # when
    response = self.client.post(
        reverse('list_of_tasks'),
        json.dumps(request),
        content_type='application/json',
    )

    # then
    self.assertEqual(response.status_code, 201)
