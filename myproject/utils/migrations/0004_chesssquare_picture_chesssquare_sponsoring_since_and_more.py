# Generated by Django 4.2.17 on 2024-12-12 22:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('utils', '0003_alter_chesssquare_options_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='chesssquare',
            name='picture',
            field=models.ImageField(blank=True, null=True, upload_to='sponsor_pictures/'),
        ),
        migrations.AddField(
            model_name='chesssquare',
            name='sponsoring_since',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='chesssquare',
            name='website',
            field=models.URLField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='chesssquare',
            name='board',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='squares', to='utils.chessboardsnippet'),
        ),
    ]
