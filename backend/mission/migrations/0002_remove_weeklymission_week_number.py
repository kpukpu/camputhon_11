# Generated by Django 5.0.4 on 2024-07-21 18:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mission', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='weeklymission',
            name='week_number',
        ),
    ]
