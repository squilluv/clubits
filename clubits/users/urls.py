from rest_framework import routers
from .api import UserViewSet, StudentViewSet, PlaceViewSet, PersonViewSet, EmployeeViewSet

router = routers.DefaultRouter()
router.register('api/users', UserViewSet, 'users')
router.register('api/students', StudentViewSet, 'students')
router.register('api/place', PlaceViewSet, 'place')
router.register('api/persons', PersonViewSet, 'persons')
router.register('api/employee', EmployeeViewSet, 'employee')

urlpatterns = router.urls
