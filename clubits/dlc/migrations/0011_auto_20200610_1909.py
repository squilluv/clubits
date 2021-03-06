# Generated by Django 3.0.4 on 2020-06-10 14:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dlc', '0010_auto_20200505_1743'),
    ]

    operations = [
        migrations.AddField(
            model_name='messages',
            name='date',
            field=models.DateTimeField(default=''),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='messages',
            name='teach_group',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='dlc.TeachGroup'),
            preserve_default=False,
        ),
        migrations.AlterModelTable(
            name='visited',
            table='dlc_visited',
        ),
    ]
