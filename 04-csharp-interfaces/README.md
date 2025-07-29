# 📘 Lesson 04 – Interfaces in C#: Unlocking Polymorphism & Abstraction

This lesson shows how interfaces in C# are used to separate implementation from usage (abstraction), and unlock the power of polymorphism. You'll build a simple character battle simulator where different character types share a common interface, allowing unified interaction through interfaces while still allowing for distinct and unique behavior for each individial type.

---

## What You'll Learn

- How to define interfaces like `ICharacter`, `IWarrior`, `IEnemy`, and `IProtagonist`
- How to use interfaces to abstract away non-relevant implementation details
- How polymorphism lets you treat different types the same through shared interface contracts
- How to override methods like `Attack()` and `TakeDamage()` to provide unique behaviors for each class

---

## ▶️ Run the Code

Make sure you have the .NET SDK installed.

From the lesson folder, run:

```bash
cd /04-csharp-interfaces/InterfaceExample

dotnet run
```

This will execute `Program.cs` and run the battle simulation between the hero and a mixed enemy army. 

---

## 📁 Files

- `Program.cs` — Entry point that generates all the Characters, sets up the battle, and demonstrates polymorphism + abstraction
- `Interfaces/` — Defines all the interfaces (`ICharacter.cs`, `IWarrior.cs`, `IProtagonist.cs`, `IEnemy.cs`)
- `Character.cs` — General character implementation used as a base
- `Warrior.cs` — Base class implementing shared behavior for Warriors
- `MainCharacter.cs` — Special protagonist class that inherits from Warrior but with plot armor logic
- `Enemies.cs` — Defines enemy types like `Gremlin`, `Goblin`, and `Minion` that inherit from Warrior

---

## 🧠 Quick Concepts

| Concept               | Description                                                                                                       |
|-----------------------|-------------------------------------------------------------------------------------------------------------------|
| `interface`           | Declares required method/property signatures that implementing classes must fulfill                               |
| `polymorphism`        | Different classes / object types act differently to the same method call (e.g. `Attack()` & `TakeDamage()`)       |
| `abstraction`         | Consumers interact with interfaces, not concrete classes, meaning irrelevant fields / properties can be ignored   |
| `override`            | Lets classes define their own implementation of a virtual method                                                  |

---

## 📌 Example Code Highlights

```csharp
public interface IWarrior
{
    string Name { get; }
    int Health { get; }
    void Attack(ICharacter target);
}

// Polymorphic call — this works regardless of the actual class as there are a multitude of different types in this function
void Battle(IWarrior hero, List<IWarrior> enemies)
{
    foreach (var enemy in enemies)
    {
        enemy.Attack(hero);
        hero.Attack(enemy);
    }
}
```