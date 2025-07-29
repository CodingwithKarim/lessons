namespace Characters.Interfaces
{
    public interface IProtagonist : IWarrior
    {
        PlotArmorLevel PlotArmor { get; }
    }

    public enum PlotArmorLevel
    {
        None = 0,
        Medium = 30,
        High = 60,
    }
}
