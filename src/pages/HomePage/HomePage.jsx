import React from "react";
import { Link } from "react-router-dom";
import beers from "../../assets/beers.png";
import newBeer from "../../assets/new-beer.png";
import randomBeer from "../../assets/random-beer.png";

function HomePage() {
  return (
    <>
      <section>
        <h1 className="m-5">Welcome to Mottschis Beer Emporium!</h1>
        <ul className="list-group">
          <li className="list-group-item">
            <Link to="/beers" className="text-decoration-none text-bg-light">
              <img src={beers} alt="All Beers" />
              <h2>All Beers</h2>
            </Link>
            <p className="text-start">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
              dolorum quisquam eum velit itaque dignissimos eaque asperiores
              dolore? Animi officiis quasi nobis ipsum commodi quidem suscipit
              laborum iure itaque maxime deserunt dolorum explicabo labore
              aspernatur recusandae maiores, architecto, sunt illo tempora
              aliquid ipsa est? Doloremque, deleniti consequuntur quis fugit
              ullam exercitationem nobis, reprehenderit eius iusto sed ipsum
              temporibus dolores deserunt veniam at delectus ab. Quisquam veniam
              eaque, ipsam numquam quidem illo laudantium iure doloribus! Non
              numquam recusandae ducimus vitae earum.
            </p>
          </li>
          <li className="list-group-item">
            <Link
              to="/random-beer"
              className="text-decoration-none text-bg-light"
            >
              <img src={randomBeer} alt="Random Beer" />
              <h2>Random Beer</h2>
            </Link>
            <p className="text-start">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nam,
              incidunt itaque enim cupiditate doloremque officia, praesentium
              illum, voluptate ipsam tempore? Id unde perferendis, modi aperiam
              veniam culpa, nisi deleniti sequi porro voluptatem fuga rerum
              laudantium minus aliquam repellendus aut necessitatibus ratione.
              Distinctio iste alias nihil quod quis deleniti eligendi
              voluptates, iusto debitis architecto veritatis facere nisi commodi
              fugit neque sit animi perspiciatis. Molestiae quia soluta dicta
              tempora ipsa, fuga voluptatum laudantium maiores aut voluptatem,
              veniam explicabo assumenda ratione modi aspernatur quaerat beatae
              cumque libero earum! Repudiandae corporis exercitationem
              blanditiis.
            </p>
          </li>
          <li className="list-group-item">
            <Link to="/new-beer" className="text-decoration-none text-bg-light">
              <img src={newBeer} alt="New Beer" />
              <h2>New Beer</h2>
            </Link>
            <p className="text-start">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam
              blanditiis, libero laudantium sint numquam eos mollitia asperiores
              vero expedita, amet consequatur, repellendus cum inventore ipsa
              quaerat. Iure dolor in consequatur quasi rem laborum ipsa
              voluptatibus aspernatur magnam corporis, officiis neque, dolorem
              fugiat asperiores maxime vero molestiae at quas rerum mollitia,
              assumenda voluptatem repellendus! Distinctio eos nam repellat.
              Dolores quae, rem maxime quisquam odit voluptatem, nostrum, ipsa
              soluta facere quo recusandae alias nulla aliquid tempore vero amet
              fuga cumque? Dicta vero sint fuga quas beatae vitae, eligendi eos
              voluptatem perspiciatis nesciunt! Fugit praesentium voluptates
              quidem deleniti amet sit culpa aliquam obcaecati.
            </p>
          </li>
        </ul>
      </section>
    </>
  );
}

export default HomePage;
