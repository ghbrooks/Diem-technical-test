import { Links, Meta, Outlet, Scripts, LiveReload, useLoaderData } from '@remix-run/react';

export async function loader() {
  try {
    const response = await fetch('https://dummyjson.com/products/1');
    // console.log(response)
    const product = await response.json();
    // console.log(product);
    return product;
  } catch (err) {
    console.log(err);
  }
}

export default function App() {
  let product = useLoaderData();

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
          <header>LOGO</header>
          <main>
            <section className="product-images">
              <img src={product.images[0]} alt="" />
              <img src={product.images[1]} alt="" />
              <img src={product.images[2]} alt="" />
              <img src={product.images[3]} alt="" />
              <img src={product.images[4]} alt="" />
            </section>
            <section className="product-details">
              <h2>{product.title}</h2>
              <p>{product.rating}</p>
              <p>{product.price}</p>
              <p>{product.description}</p>
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
