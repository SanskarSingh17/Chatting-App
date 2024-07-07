from django.test import TestCase
from django.contrib.auth import get_user_model
from rest_framework.test import APIClient
from rest_framework import status

User = get_user_model()

class UserTests(TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = User.objects.create_user(username='testuser', password='testpass', email='testuser@example.com')

    def test_register_user(self):
        response = self.client.post('/app/register/', {'username': 'newuser', 'password': 'newpass', 'email': 'newuser@example.com'})
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_login_user(self):
        response = self.client.post('/api/token/', {'username': 'testuser', 'password': 'testpass'})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('access', response.data)

    def test_send_interest(self):
        self.client.force_authenticate(user=self.user)
        response = self.client.post('/app/interests/', {'recipient': 1, 'message': 'Hello!'})
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_view_interests(self):
        self.client.force_authenticate(user=self.user)
        response = self.client.get('/app/interests/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
