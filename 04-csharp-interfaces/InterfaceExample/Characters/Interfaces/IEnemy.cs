namespace Characters.Interfaces
{
    public interface IEnemy : IWarrior
    {
        ThreatLevel ThreatLevel { get; }
    }

    public enum ThreatLevel
    {
        Normal = 1,
        Boss = 2,
    }
}
