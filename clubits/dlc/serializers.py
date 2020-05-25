from rest_framework import serializers
from dlc.models import Course, CourseGroup, CourseItem, CourseLiter, CoursePo, TeachGroup, TeachGroupStudent, TeachPlan, Sections, Visited, VisitedStudents, Contract, Messages

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class CourseGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseGroup
        fields = '__all__'

class CourseItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseItem
        fields = '__all__'

class CourseLiterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseLiter
        fields = '__all__'

class CoursePoSerializer(serializers.ModelSerializer):
    class Meta:
        model = CoursePo
        fields = '__all__'

class TeachGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeachGroup
        fields = '__all__'

class TeachGroupStudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeachGroupStudent
        fields = '__all__'

class SectionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sections
        fields = '__all__'

class TeachPlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeachPlan
        fields = '__all__'

class VisitedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Visited
        fields = '__all__'

class VisitedStudentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = VisitedStudents
        fields = '__all__'

class ContractSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contract
        fields = '__all__'

class MessagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Messages
        fields = '__all__'