# Generated by Django 5.0.6 on 2024-07-21 12:59

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0002_googleuser_banner_googleuser_nickname_and_more'),
        ('timecheck', '0002_tasktime_total_score'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tasktime',
            name='total_score',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='times', to='login.googleuser'),
        ),
    ]
