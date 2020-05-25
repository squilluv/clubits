from django.db import models

class User(models.Model):
    username = models.CharField(max_length=100)
    email = models.CharField(max_length=150, unique=True)
    date_joined = models.CharField(max_length=150)
    class Meta:
       managed = False
       db_table = 'auth_user'

class Place(models.Model):
    name = models.CharField(max_length=100)
    index = models.CharField(max_length=20)
    adress = models.CharField(max_length=200)
    phone = models.CharField(max_length=20)
    director = models.CharField(max_length=150)
    class Meta:
       managed = False
       db_table = 'place'

class Students(models.Model):
    name = models.CharField(max_length=150)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    second_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    date_bitrh = models.DateField()
    place = models.ForeignKey(Place, on_delete=models.CASCADE, null=True)
    phone = models.CharField(max_length=20)
    category = models.CharField(max_length=50)
    place_life = models.CharField(max_length=200)
    documentp = models.CharField(max_length=45, null=True)
    class Meta:
       managed = False
       db_table = 'students'

class Persons(models.Model):
    name = models.CharField(max_length=45)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    second_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    date_birth = models.DateField()
    adress = models.CharField(max_length=150)
    document_type = models.CharField(max_length=50)
    gender = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    inn = models.CharField(max_length=22)
    status = models.CharField(max_length=50)
    seria = models.CharField(max_length=5)
    numberp = models.CharField(max_length=7)
    given = models.CharField(max_length=150)
    class Meta:
       managed = False
       db_table = 'persons'

class Employee(models.Model):
    name = models.CharField(max_length=45)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=False)
    second_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    position = models.CharField(max_length=45)
    work = models.IntegerField(default=1)
    class Meta:
       managed = False
       db_table = 'employee'