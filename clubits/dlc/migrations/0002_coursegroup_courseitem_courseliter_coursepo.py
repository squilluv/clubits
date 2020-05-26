# Generated by Django 3.0.4 on 2020-03-25 11:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dlc', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CourseGroup',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
            ],
            options={
                'db_table': 'course_group',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='CourseItem',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
                ('count', models.IntegerField(max_length=150)),
                ('ei', models.CharField(max_length=45)),
            ],
            options={
                'db_table': 'course_item',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='CourseLiter',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('author', models.CharField(max_length=100)),
                ('publisher', models.CharField(max_length=100)),
                ('city', models.CharField(max_length=100)),
                ('pages', models.IntegerField(default=150)),
            ],
            options={
                'db_table': 'course_liter',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='CoursePo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('developer', models.CharField(max_length=100)),
                ('licence', models.CharField(max_length=100)),
            ],
            options={
                'db_table': 'course_po',
                'managed': False,
            },
        ),
    ]