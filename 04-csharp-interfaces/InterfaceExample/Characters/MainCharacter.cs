using Characters.Interfaces;

namespace Characters
{
    public class MainCharacter : Warrior, IProtagonist
    {
        public PlotArmorLevel PlotArmor { get; }

        public MainCharacter(
            Guid id,
            string name,
            int health,
            int attackDamage,
            PlotArmorLevel plotArmorLevel
        )
            : base(id, name, health, attackDamage)
        {
            PlotArmor = plotArmorLevel;
        }

        public override void TakeDamage(int damage)
        {
            base.TakeDamage(damage);

            Console.WriteLine($"{Name} has taken {damage} damage! Health: {Health}");

            if (Health <= 0)
            {
                Console.WriteLine($"{Name} has fallen, plot armor coming to the rescue!");

                Health = Math.Max(Health, (int)PlotArmor);
            }
        }

        public override void Attack(ICharacter character)
        {
            Console.WriteLine($"Main Character {Name} prepares to attack!");

            base.Attack(character);

            character.TakeDamage((int)PlotArmor);
        }
    }
}
