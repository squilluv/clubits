# Generated by Django 3.0.4 on 2020-03-18 04:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_auto_20200313_2021'),
    ]

    operations = [
        migrations.CreateModel(
            name='Place',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('index', models.CharField(max_length=20)),
                ('adress', models.CharField(max_length=200)),
                ('phone', models.CharField(max_length=20)),
                ('director', models.CharField(max_length=150)),
            ],
            options={
                'db_table': 'place',
                'managed': False,
            },
        ),
    ]
