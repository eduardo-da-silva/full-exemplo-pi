from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("GrandeOrvalho", "0004_alter_animais_capa_alter_animais_idade"),
    ]

    operations = [
        migrations.AlterField(
            model_name="animais",
            name="idade",
            field=models.DecimalField(decimal_places=2, max_digits=10),
        ),
    ]
