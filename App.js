import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    const newPerson = people.filter((person) => person.id !== id);
    setPeople(newPerson);
  };

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} removePerson={removePerson} />
        <button onClick={() => setPeople([])}> Clear All </button>
      </section>
    </main>
  );
}

export default App;
