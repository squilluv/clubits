# Generated by Django 3.0.4 on 2020-04-16 16:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dlc', '0003_teachgroup_teachgroupstudent'),
    ]

    operations = [
        migrations.AlterField(
            model_name='teachgroup',
            name='end',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='teachgroup',
            name='start',
            field=models.DateField(),
        ),
    ]
