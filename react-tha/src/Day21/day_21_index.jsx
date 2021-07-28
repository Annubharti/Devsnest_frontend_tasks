import "./day_21_style.css";
import { useState } from "react";

function Day21App() {
  const [items, setItems] = useState([]);

  const updateItem = (index, newItem) => {
    setItems(
      items.map((item, i) => (i === index ? { ...item, ...newItem } : item))
    );
  };

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <body class="day21Body">
    <div className="d-flex flex-column align-items-center">
      <AddItemForm addItem={addItem} />
      {items.length === 0 ? (
        <h1 className="text">Start Adding Items</h1>
      ) : (
        items.map((item, index) => (
          <RenderItem
            item={item}
            key={index}
            index={index}
            updateItem={updateItem}
            removeItem={removeItem}
          />
        ))
      )}
    </div>
    </body>
  );
}

function RenderItem({ updateItem, removeItem, item, index }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="day21Item">
      {isEditing ? (
        <input
          type="text"
          name="title"
          id="title"
          required
          value={item.title}
          onChange={(e) => updateItem(index, { title: e.target.value })}
        />
      ) : (
        <h3>{item.title}</h3>
      )}
      {isEditing ? (
        <input
          type="number"
          name="calorie"
          id="calorie"
          required
          value={item.calorie}
          onChange={(e) => updateItem(index, { calorie: e.target.value })}
        />
      ) : (
        <p>You have consumed {item.calorie} calories</p>
      )}

      <button className="Day21DeleteBtn" onClick={() => removeItem(index)}>
        Delete
      </button>
      <button className="Day21EditBtn" onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Done" : "Edit"}
      </button>
    </div>
  );
}

function AddItemForm({ addItem }) {
  const [title, setTitle] = useState("");
  const [calorie, setCalorie] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ title, calorie });
    setTitle("");
    setCalorie("");
  };

  return (
    <>
      <div>
        <h1 className="day21header">Calorie Tracker</h1>
      </div>
      <br />
      <form onSubmit={handleSubmit} className="day21container">
        <div className="d-flex align-items-center mb-2">
          <label htmlFor="title" className="form-label visually-hidden"></label>
          <input
            type="text"
            name="title"
            id="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Food Item Name"
          />
        </div>

        <label htmlFor="calorie" className="form-label visually-hidden"></label>
        <input
          type="number"
          name="number"
          id="number"
          required
          value={calorie}
          onChange={(e) => setCalorie(e.target.value)}
          placeholder="Calorie Amount"
        />
        <br />

        <button type="submit" className="day21AddItemBtn">
          Add Item
        </button>
      </form>
    </>
  );
}

export default Day21App;
