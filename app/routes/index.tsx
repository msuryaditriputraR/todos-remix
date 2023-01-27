import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { prisma } from "~/libs/prisma";

export async function loader() {
  const todos = await prisma.todo.findMany();

  // const todos = [
  //   { id: 1, text: "Todo A" },
  //   { id: 2, text: "Todo B" },
  //   { id: 3, text: "Todo C" },
  // ];
  return json({ todos });
}

export default function IndexRoute() {
  const { todos } = useLoaderData<typeof loader>();

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
