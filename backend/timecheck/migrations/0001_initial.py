# Generated by Django 5.0.4 on 2024-07-22 01:27

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('login', '0002_title'),
        ('todolist', '__first__'),
    ]

    operations = [
        migrations.CreateModel(
            name='TaskTime',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('currentPoints', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='sipDSFal', to='login.googleuser')),
                ('google_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='SIIPAL', to='login.googleuser')),
                ('silverPoint', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='hahahaSDFDSha', to='login.googleuser')),
                ('task', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='SIPAL', to='todolist.what_to_do')),
            ],
        ),
    ]
