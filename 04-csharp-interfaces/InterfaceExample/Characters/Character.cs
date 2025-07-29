using Characters.Interfaces;

namespace Characters
{
    public class Character : ICharacter
    {
        public Guid Id { get; }
        public string Name { get; }
        public int Health { get; protected set; }

        public Character(Guid id, string name, int health)
        {
            Id = id;
            Name = name;
            Health = health;
        }

        public virtual void TakeDamage(int damage)
        {
            Health -= damage;
        }
    }
}
