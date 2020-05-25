from dlc.models import Course, CourseGroup, CourseItem, CourseLiter, CoursePo, TeachGroup, TeachGroupStudent, TeachPlan, Sections, Visited, VisitedStudents, Contract, Messages
from rest_framework import viewsets, permissions
from .serializers import CourseSerializer, CourseGroupSerializer, CourseItemSerializer, CourseLiterSerializer, CoursePoSerializer, TeachGroupSerializer, TeachGroupStudentSerializer, TeachPlanSerializer, SectionsSerializer, VisitedSerializer, VisitedStudentsSerializer, ContractSerializer, MessagesSerializer

class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = CourseSerializer

class CourseGroupViewSet(viewsets.ModelViewSet):
    queryset = CourseGroup.objects.all()
    permission_classes = [
        permissions.IsAdminUser
    ]
    serializer_class = CourseGroupSerializer

class CourseItemViewSet(viewsets.ModelViewSet):
    queryset = CourseItem.objects.all()
    permission_classes = [
        permissions.IsAdminUser
    ]
    serializer_class = CourseItemSerializer

class CourseLiterViewSet(viewsets.ModelViewSet):
    queryset = CourseLiter.objects.all()
    permission_classes = [
        permissions.IsAdminUser
    ]
    serializer_class = CourseLiterSerializer

class CoursePoViewSet(viewsets.ModelViewSet):
    queryset = CoursePo.objects.all()
    permission_classes = [
        permissions.IsAdminUser
    ]
    serializer_class = CoursePoSerializer

class TeachGroupViewSet(viewsets.ModelViewSet):
    queryset = TeachGroup.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = TeachGroupSerializer

class TeachGroupStudentViewSet(viewsets.ModelViewSet):
    queryset = TeachGroupStudent.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = TeachGroupStudentSerializer

class SectionsViewSet(viewsets.ModelViewSet):
    queryset = Sections.objects.all()
    permission_classes = [
        permissions.IsAdminUser
    ]
    serializer_class = SectionsSerializer

class TeachPlanViewSet(viewsets.ModelViewSet):
    queryset = TeachPlan.objects.all()
    permission_classes = [
        permissions.IsAdminUser
    ]
    serializer_class = TeachPlanSerializer

class VisitedViewSet(viewsets.ModelViewSet):
    queryset = Visited.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = VisitedSerializer

class VisitedStudentsViewSet(viewsets.ModelViewSet):
    queryset = VisitedStudents.objects.all()
    permission_classes = [
        permissions.IsAdminUser
    ]
    serializer_class = VisitedStudentsSerializer

class ContractViewSet(viewsets.ModelViewSet):
    queryset = Contract.objects.all()
    permission_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = ContractSerializer

class MessagesViewSet(viewsets.ModelViewSet):
    queryset = Messages.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = MessagesSerializer