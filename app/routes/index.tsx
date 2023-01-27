import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { prisma } from "~/libs/prisma";

export async function loader() {
  const todos = await prisma.todo.findMany();
  return json({ todos });
}

export default function IndexRoute() {
  const { todos } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Todos</h1>

      <form action="/" method="post">
        <label htmlFor="todoText">New Todo:</label>
        <input type="text" id="todoText" name="text" />
        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo, index) => {
          return <li key={index}>{todo.text}</li>;
        })}
      </ul>
    </div>
  );
}
