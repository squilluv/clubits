# Generated by Django 3.0.3 on 2020-02-26 06:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Students',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
                ('user_id', models.IntegerField(unique=True)),
            ],
            options={
                'db_table': 'students',
                'managed': False,
            },
        ),
    ]
