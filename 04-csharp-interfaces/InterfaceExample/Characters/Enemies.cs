using Characters.Interfaces;

namespace Characters
{
    public class Gremlin : Warrior, IEnemy
    {
        public ThreatLevel ThreatLevel { get; }

        public Gremlin(Guid id, string name, int health, int attackDamage, ThreatLevel threatLevel)
            : base(id, name, (health * (int)threatLevel), attackDamage * (int)threatLevel)
        {
            ThreatLevel = threatLevel;
        }

        public override void Attack(ICharacter character)
        {
            Console.WriteLine($"Gremlin {Name} snirks and lunges!");

            base.Attack(character);
        }
    }

    public class Goblin : Warrior, IEnemy
    {
        public ThreatLevel ThreatLevel { get; }

        public Goblin(Guid id, string name, int health, int attackDamage, ThreatLevel threatLevel)
            : base(id, name, health * (int)threatLevel, attackDamage * (int)threatLevel)
        {
            ThreatLevel = threatLevel;
        }

        public override void Attack(ICharacter character)
        {
            Console.WriteLine($"Goblin {Name} acts wicked before striking!");

            base.Attack(character);
        }
    }

    public class Minion : Warrior, IEnemy
    {
        public ThreatLevel ThreatLevel { get; }

        public Minion(Guid id, string name, int health, int attackDamage, ThreatLevel threatLevel)
            : base(id, name, health * (int)threatLevel, attackDamage * (int)threatLevel)
        {
            ThreatLevel = threatLevel;
        }

        public override void Attack(ICharacter character)
        {
            Console.WriteLine($"Minion {Name} raises its blade menacingly!");

            base.Attack(character);
        }
    }
}
