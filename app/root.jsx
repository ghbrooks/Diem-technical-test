import { Links, Meta, Outlet, Scripts, LiveReload, useLoaderData } from '@remix-run/react';

export async function loader() {
  const response = await fetch("https://dummyjson.com/products/1")
  // console.log(response)
  const product = await response.json();
  console.log(product);
  return product;
}


export default function App() {

  let products = useLoaderData();

  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <link rel="stylesheet" href="./reset.css" />
        <link rel="stylesheet" href="./styles.css" />
        <Meta />
        <Links />
      </head>
        {/* <div className="container">
          <h1>Diem!</h1>
          <h4>Technical Test</h4>
          <p>Please use this file as your entry point.</p>
          <ul>
            <li>Demonstrate your approach to componentisation</li>
            <li>Follow the acceptance criteria thoroughly</li>
            <li>Use your best judgment on design</li>
          </ul>
        </div> */}
        
      <body>
        <container>
        <header>header</header>
        <main>
          <section>
            prod 
          </section>
          <section>
            prod deets
          </section>
        </main>
        <footer>footer</footer>
        </container>
        <Outlet />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
