using Characters.Interfaces;

namespace Characters
{
    public class Warrior : Character, IWarrior
    {
        public int AttackDamage { get; }

        public Warrior(Guid id, string name, int health, int attackDamage)
            : base(id, name, health)
        {
            AttackDamage = attackDamage;
        }

        public virtual void Attack(ICharacter character)
        {
            character.TakeDamage(AttackDamage);
        }
    }
}
