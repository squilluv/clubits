# Generated by Django 3.0.4 on 2020-04-24 07:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0007_auto_20200325_1618'),
        ('dlc', '0005_sections_teachplan'),
    ]

    operations = [
        migrations.CreateModel(
            name='Visited',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('start', models.TimeField()),
                ('end', models.TimeField()),
                ('teach_group', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dlc.TeachGroup')),
                ('teach_plan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dlc.TeachPlan')),
                ('teacher', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.Employee')),
            ],
        ),
        migrations.CreateModel(
            name='VisitedStudents',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('have', models.IntegerField(default=0)),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.Students')),
                ('visited', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='dlc.Visited')),
            ],
        ),
    ]
