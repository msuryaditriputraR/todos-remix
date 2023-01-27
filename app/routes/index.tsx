export default function IndexRoute() {
  const todos = [
    { id: 1, text: "Todo 1" },
    { id: 2, text: "Todo 2" },
    { id: 3, text: "Todo 3" },
  ];

  return (
    <div>
      <h1>Todos</h1>

      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo.text}</li>;
        })}
      </ul>
    </div>
  );
}
