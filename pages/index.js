
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonBoxHeader({ children }) {
  return <div className="w-full opacity-30 animate-pulse">{children}</div>;
}

export default function Home() {
  return (
    <div>
      <div className="gradient w-full sm:h-80 h-96 text-white lg:p-0 p-4">
        <div className="pt-4 max-w-screen-lg mx-auto">
          <div className="flex flex-col space-y-8">
            <a href="https://www.dhairyashah.dev/posts/how-to-add-skeleton-loading-components-in-nextjs/">
            <div className="flex flex-row space-x-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-building-carousel"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx={12} cy={12} r={6}></circle>
                <circle cx={5} cy={8} r={2}></circle>
                <circle cx={12} cy={4} r={2}></circle>
                <circle cx={19} cy={8} r={2}></circle>
                <circle cx={5} cy={16} r={2}></circle>
                <circle cx={19} cy={16} r={2}></circle>
                <path d="M8 22l4 -10l4 10"></path>
              </svg>
              <h1 className="font-bold text-2xl drop-shadow-sm font-Karla tracking-tighter select-none">
                Slicker UI
              </h1>
            </div>
            </a>
            <div>
              <h2 className="sm:text-3xl text-2xl font-Karla font-light">
                Emporwering the Web,
              </h2>
              <h1 className="sm:text-4xl text-3xl font-Secular">
                Perfect example for lazy loading text
              </h1>
              <div className="mt-4">
                <Skeleton wrapper={SkeletonBoxHeader} />
              </div>
            </div>
            <div className="flex flex-row space-x-2 items-center">
              <div className="w-12 h-12 bg-gray-50 opacity-30 animate-pulse "></div>
              <div className="flex flex-col space-y-1 w-36">
                <Skeleton wrapper={SkeletonBoxHeader} />
                <div className="w-24">
                  <Skeleton wrapper={SkeletonBoxHeader} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto mt-4 leading-relaxed p-4 font-inter">
        <h2 className="text-2xl font-bold font-Karla mb-4">How to create skeleton loading in Next.js</h2>
        <a href="https://www.dhairyashah.dev/posts/how-to-add-skeleton-loading-components-in-nextjs/" className="text-orange-500 font-bold font-Karla underline">Read full article</a>
        <Skeleton count={3} />
        <p className="mt-4">
        Officia deserunt cupidatat
        esse minim veniam non voluptate. Consectetur deserunt qui anim nostrud
        consequat. Exercitation laboris dolor do minim ullamco nulla commodo.
        Est irure voluptate sunt mollit officia dolor non anim culpa sint anim
        qui aute. Aliquip deserunt dolore esse ad occaecat ullamco laboris quis
        aute consectetur.
        </p>
        <Skeleton count={4} />
        <p className="mt-4">
        Officia deserunt cupidatat
        <Skeleton />
        </p>
      </div>
    </div>
  );
}
