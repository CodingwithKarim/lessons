using System;
using Characters;
using Characters.Interfaces;

class Program
{
    static void Main()
    {
        // Init main character
        var mainCharacter = new MainCharacter(
            Guid.NewGuid(),
            "Sonic The Hedge Hog",
            100,
            30,
            PlotArmorLevel.High
        );

        // Generate army of enemies
        var enemyArmy = new List<IWarrior>
        {
            new Gremlin(Guid.NewGuid(), "Danny the Gremlin", 75, 20, ThreatLevel.Normal),
            new Minion(Guid.NewGuid(), "Hoover the Minion", 75, 20, ThreatLevel.Normal),
            new Goblin(Guid.NewGuid(), "Justin the Goblin", 80, 50, ThreatLevel.Boss),
            new Gremlin(Guid.NewGuid(), "Gizmo the Gremlin", 75, 20, ThreatLevel.Normal),
            new Minion(Guid.NewGuid(), "Manny the Minion", 75, 20, ThreatLevel.Normal),
            new Goblin(Guid.NewGuid(), "Gordon the Goblin", 80, 50, ThreatLevel.Boss),
            new Gremlin(Guid.NewGuid(), "Gus the Gremlin", 75, 20, ThreatLevel.Normal),
        };

        // Have each enemy in the army attack the main character and vice versa
        // This is where polymorphism shines, as we can treat all enemies as Warriors and main character as IWarrior
        // Each attack method will call different implementations based on the actual type of the object
        Battle(mainCharacter, enemyArmy);
    }

    public static void Battle(IWarrior mainCharacter, List<IWarrior> enemyArmy)
    {
        foreach (IWarrior enemy in enemyArmy)
        {
            // Enemy attacks us
            enemy.Attack(mainCharacter);

            // Main character attacks back
            mainCharacter.Attack(enemy);
        }
    }
}
