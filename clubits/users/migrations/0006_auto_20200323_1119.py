# Generated by Django 3.0.4 on 2020-03-23 06:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0005_persons'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='persons',
            table='employee',
        ),
    ]