import React, { useState } from "react";
import CountItems from "./components/CountItems";
import Search from "./components/Search";
import ShowResults from "./components/ShowResults";

function App() {
  const [todo, setTodo] = useState("");
  const [id, setId] = useState(0);
  const [showItem, setShowItem] = useState(false);
  const [results, setResults] = useState([]);
  const [checked, setChecked] = useState(true);
  const [filteredResults, setFilteredResults] = useState("all");

  const handleSubmit = (e) => {
    e.preventDefault();
    setId((prev) => prev + 1);
    setShowItem(true);
    setResults((prev) => [...prev, { id, todo, completed: false }]);
    setTodo("");
  };
  const handleChecked = (e) => {
    const isChecked = e.target.checked;
    const itemValue = Number(e.target.value);

    setResults((prev) =>
      prev.map((item) =>
        item.id === itemValue ? { ...item, completed: isChecked } : item
      )
    );

    setChecked((prev) => ({
      ...prev,
      [itemValue]: isChecked,
    }));
  };

  const handleAll = () => {
    setFilteredResults("all");
  };
  const handleCompleted = () => {
    setFilteredResults("completed");
  };

  const handleActive = () => {
    setFilteredResults("active");
  };

  const handleClear = () => {
    setResults((prev) => prev.filter((item) => !item.completed));
  };

  const filteredItems = results.filter((item) => {
    if (filteredResults === "all") return true;
    if (filteredResults === "active") return !item.completed;
    if (filteredResults === "completed") return item.completed;
    return true;
  });

  return (
    <div>
      <h1>todos</h1>
      <Search
        todo={todo}
        showItem={showItem}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        onSubmit={handleSubmit}
      />
      <ShowResults
        results={filteredItems}
        onChange={(e) => {
          handleChecked(e);
        }}
        checked={checked}
      />
      <CountItems
        results={results}
        handleAll={handleAll}
        handleActive={handleActive}
        handleCompleted={handleCompleted}
        handleClear={handleClear}
      />
    </div>
  );
}

export default App;
