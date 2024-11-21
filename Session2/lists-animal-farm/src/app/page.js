import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const farmAnimals = [
    { name: "Bella", type: "Cow", age: 4 },
    { name: "Max", type: "Dog", age: 3 },
    { name: "Cluckers", type: "Chicken", age: 1 },
    { name: "Nibbles", type: "Goat", age: 2 },
    { name: "Daisy", type: "Duck", age: 1 },
    { name: "Charlie", type: "Horse", age: 5 },
    { name: "Snowball", type: "Pig", age: 2 },
    { name: "Fluffy", type: "Sheep", age: 3 },
    { name: "Hoppy", type: "Rabbit", age: 1 },
    { name: "Rusty", type: "Rooster", age: 2 }
  ]

  const animals = farmAnimals.map((animal, index) =>
    <div key={index} style={{ padding: "5px" }}>
      <h2>{animal.name}</h2>
      <p>
        {"Animal type: " + animal.type}
      </p>
      <p>
        {"Animal age: " + animal.age}
      </p>
    </div>
  )

  const averageAge = farmAnimals
    .map((animal) => animal.age)
    .reduce((summedAge, age) => summedAge + age)
    / farmAnimals.length

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>
          My animal farm
        </h1>
        <ul>
          {
            animals
          }
        </ul>
        <h2>Average age: </h2>
        <p>
          {
            averageAge
          }
        </p>
      </main>
    </div>
  );
}
