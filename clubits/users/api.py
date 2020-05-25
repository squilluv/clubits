from users.models import User, Students, Place, Persons, Employee
from rest_framework import viewsets, permissions
from .serializers import UserSerializer, StudentSerializer, PlaceSerializer, PersonSerializer, EmployeeSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = UserSerializer

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Students.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = StudentSerializer

class PlaceViewSet(viewsets.ModelViewSet):
    queryset = Place.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = PlaceSerializer

class PersonViewSet(viewsets.ModelViewSet):
    queryset = Persons.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = PersonSerializer

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    permission_classes = [
        permissions.IsAdminUser
    ]
    serializer_class = EmployeeSerializer