import type { ActionArgs, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  title: "Todos with Remix by Suryadi",
  description: "Todos app using Remix as the framework.",
});

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const text = formData.get("text");

  const newTodo = {
    text,
  };
  console.log(newTodo);

  return null;
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body style={{ fontFamily: "sans-serif" }}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
