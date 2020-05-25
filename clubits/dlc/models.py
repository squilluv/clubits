from django.db import models
from users.models import Students, Employee, Persons, User

class Course(models.Model):
    name = models.CharField(max_length=150)
    short_name = models.CharField(max_length=45)
    yo_from = models.IntegerField(default=10)
    yo_to = models.IntegerField(default=16)
    min_students = models.IntegerField(default=3)
    max_students = models.IntegerField(default=15)
    teacher = models.CharField(max_length=150)
    class Meta:
       managed = False
       db_table = 'course'

class CourseGroup(models.Model):
    name = models.CharField(max_length=150)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, null=False)
    class Meta:
       managed = False
       db_table = 'course_group'

class CourseItem(models.Model):
    name = models.CharField(max_length=150)
    count = models.IntegerField()
    ei = models.CharField(max_length=45)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, null=False)
    class Meta:
       managed = False
       db_table = 'course_item'

class CourseLiter(models.Model):
    name = models.CharField(max_length=100)
    author = models.CharField(max_length=100)
    publisher = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    pages = models.IntegerField(default=150)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, null=False)
    class Meta:
       managed = False
       db_table = 'course_liter'

class CoursePo(models.Model):
    name = models.CharField(max_length=100)
    developer = models.CharField(max_length=100)
    licence = models.CharField(max_length=100)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, null=False)
    class Meta:
       managed = False
       db_table = 'course_po'

class TeachGroup(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, null=False)
    start = models.DateField()
    end = models.DateField()
    work = models.IntegerField(default=1)
    teacher = models.ForeignKey(Employee, on_delete=models.CASCADE, null=False)
    class Meta:
       managed = False
       db_table = 'dlc_teachgroup'

class TeachGroupStudent(models.Model):
    teach_groop = models.ForeignKey(TeachGroup, on_delete=models.CASCADE, null=False)
    student = models.ForeignKey(Students, on_delete=models.CASCADE, null=False)

class Sections(models.Model):
    name = models.CharField(max_length=150)

class TeachPlan(models.Model):
    name = models.CharField(max_length=150)
    theme = models.CharField(max_length=150)
    teach_group = models.ForeignKey(TeachGroup, on_delete=models.CASCADE, null=False)
    time1 = models.CharField(max_length=10)
    time2 = models.CharField(max_length=10)
    section = models.ForeignKey(Sections, on_delete=models.CASCADE, null=False)
    descrip = models.CharField(max_length=150)

class Visited(models.Model):
    teach_group = models.ForeignKey(TeachGroup, on_delete=models.CASCADE, null=False)
    date = models.DateField()
    start = models.TimeField()
    end = models.TimeField()
    teach_plan = models.ForeignKey(TeachPlan, on_delete=models.CASCADE, null=False)
    teacher = models.ForeignKey(Employee, on_delete=models.CASCADE, null=False)
    title = models.CharField(max_length=255)
    class Meta:
        managed = False
        db_table = 'dlc_visited'

class VisitedStudents(models.Model):
    visited = models.ForeignKey(Visited, on_delete=models.CASCADE, null=False)
    student = models.ForeignKey(Students, on_delete=models.CASCADE, null=False)
    have = models.IntegerField(default=0)

class Contract(models.Model):
    date = models.DateField()
    status = models.CharField(max_length=45)
    student = models.ForeignKey(Students, on_delete=models.CASCADE, null=False)
    person = models.ForeignKey(Persons, on_delete=models.CASCADE, null=False)
    teach_group = models.ForeignKey(TeachGroup, on_delete=models.CASCADE, null=False)
    start = models.DateField()
    end = models.DateField()
    price = models.IntegerField(default=0)

class Messages(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    teach_group = models.ForeignKey(TeachGroup, on_delete=models.CASCADE, null=False)
    message = models.CharField(max_length=255)
    date = models.DateTimeField()