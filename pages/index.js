import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Home() {
  const [loading, isLoading] = useState(true);
  return (
    <div className="m-2 p-4 max-w-screen-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Hello World</h1>
      {loading ? (
        <Skeleton count={10} />
      ) : (
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem consectetur veniam ex qui. Qui exercitation excepteur sint. Enim qui commodo cillum sint ad qui quis deserunt aliquip magna. Nostrud minim irure id nostrud culpa ex anim Lorem. Exercitation reprehenderit labore exercitation consequat dolor cupidatat dolore excepteur magna id. Reprehenderit irure enim non.
Minim culpa minim ullamco minim minim ex in ullamco ex. Voluptate cupidatat ipsum tempor. Voluptate laborum proident id non fugiat dolore laborum velit et culpa ipsum est aliqua ea dolor. Sunt sint do consectetur do sint. Non consequat tempor do ut ad officia do. Do esse quis do cillum non nulla.`
      )}
      <br />
      <hr />
      <br />
      <input
        type="checkbox"
        checked={loading}
        onChange={(e) => isLoading(e.target.checked)}
      />{" "}
      Loading
    </div>
  );
}
