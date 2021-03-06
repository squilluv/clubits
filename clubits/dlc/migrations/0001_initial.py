# Generated by Django 3.0.4 on 2020-03-25 11:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
                ('short_name', models.CharField(max_length=45)),
                ('yo_from', models.IntegerField(default=10)),
                ('yo_to', models.IntegerField(default=16)),
                ('min_students', models.IntegerField(default=3)),
                ('max_students', models.IntegerField(default=15)),
                ('teacher', models.CharField(max_length=150)),
            ],
            options={
                'db_table': 'course',
                'managed': False,
            },
        ),
    ]
