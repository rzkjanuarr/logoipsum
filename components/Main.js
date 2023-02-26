import React from "react";

function Main() {
  return (
    <main className="max-w-screen-xl px-24 mx-auto my-5 mb-12">
      <section id="client-logo" className="flex items-center justify-between">
        <img src="./img/Group.svg" alt="" />
        <img src="./img/Group-1.svg" alt="" />
        <img src="./img/Group-2.svg" alt="" />
        <img src="./img/Group-3.svg" alt="" />
        <img src="./img/Group-4.svg" alt="" />
      </section>
      <section id="feature" className="grid max-w-screen-xl mx-auto my-24">
        <div className="grid w-full grid-cols-12 gap-4 mb-10">
          <div className="col-span-5">
            <img src="./img/img-1.png" alt="" />
          </div>
          <div className="col-span-7 my-auto">
            <h2 className="text-5xl font-semibold">Subscription Index</h2>
            <p className="my-5 text-xl text-gray-500">
              A daily dataset to keep you up to date on subscription market
              trends and what's happening in your vertical.
            </p>
            <a href="#" className="text-lg text-blue-700">
              Learn More
            </a>
          </div>
        </div>

        <div className="grid w-full grid-cols-12 gap-4">
          <div className="col-span-7 my-auto">
            <h2 className="text-5xl font-semibold">In-depth metrics</h2>
            <p className="my-5 text-xl text-gray-500">
              Accurate, real-time reporting at your fingertips. Getting data has
              never been easier.
            </p>
            <a href="#" className="text-lg text-blue-700">
              Learn More
            </a>
          </div>
          <div className="col-span-5">
            <img src="./img/img-2.png" alt="" />
          </div>
        </div>
      </section>
      <section id="feature-card" className="grid grid-cols-3 my-12">
        <div className="flex flex-col items-center justify-center">
          <img src="./img/icon-01.png" alt="" />
          <h3 className="text-2xl">Benchmarks</h3>
          <p className="text-center text-gray-500">
            See how you stack up against comparable companies in similar stages.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="./img/icon-02.png" alt="" />
          <h3 className="text-2xl">Pricing Audit</h3>
          <p className="text-center text-gray-500">
            Benchmark the health of your monetization and pricing strategy.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src="./img/icon-03.png" alt="" />
          <h3 className="text-2xl">Retention Audit</h3>
          <p className="text-center text-gray-500">
            Audit where revenue leakage exists and where you can increase
            retention.
          </p>
        </div>
      </section>
      <section id="pricing" className="grid grid-cols-12 gap-4 mt-32 mb-12">
        <div className="col-span-6">
          <h2 className="text-5xl font-semibold leading-none text-black">
            Get the right plan for future product.
          </h2>
        </div>
        <div className="col-span-4 col-start-9">
          <div className="flex p-2 font-semibold bg-white rounded-lg flex-nowrap">
            <button className="w-6/12 text-white transition duration-300 bg-blue-800 rounded-l-lg px-7 hover:bg-blue-400">
              Yearly
            </button>
            <button className="py-6 border border-transparent px-7 hover:bg-blue-400">
              Monthly
            </button>
          </div>
        </div>
      </section>
      <section id="pricing " className="mt-12 grid grid-cols-3 gap-4">
        <div className="my-0 cursor-pointer">
          <div className="bg-gray-200 rounded-xl items-center flex flex-col py-8 px-6 hover:bg-orange-400 tarnsition duration-300 ease-in-out hover:text-white">
            <p>Starter</p>
            <h2 className="text-5xl font-semibold mt-5 mb-6">Free</h2>
            <ul className="text-center">
              <li className="my-2">1 Website</li>
              <li className="my-2">5 GB Hosting</li>
              <li className="my-2">Limited Support</li>
            </ul>
            <button className="mt-auto flex justify-center items-center w-full py-5 rounded-lg font-semibold bg-[#9F3919] text-white">
              Get Started
            </button>
          </div>
        </div>
        <div className="-my-4 cursor-pointer">
          <div className="rounded-xl items-center flex flex-col py-8 px-6 bg-orange-400 tarnsition duration-300 ease-in-out text-white hover:bg-orange-500">
            <p>Premium</p>
            <h2 className="text-5xl font-semibold mt-5 mb-6">$29/month</h2>
            <ul className="text-center">
              <li className="my-2">10 Website</li>
              <li className="my-2">15 GB Hosting</li>
              <li className="my-2">Premium Support</li>
            </ul>
            <button className="mt-aute flex justify-center items-center w-full py-5 rounded-lg font-semibold bg-[#9F3919] text-white">
              Get Started
            </button>
          </div>
        </div>
        <div className="my-0 cursor-pointer">
          <div className="bg-gray-200 rounded-xl items-center flex flex-col py-8 px-6 hover:bg-orange-400 tarnsition duration-300 ease-in-out hover:text-white">
            <p>Enterprise</p>
            <h2 className="text-5xl font-semibold mt-5 mb-6">$49/month</h2>
            <ul className="text-center">
              <li className="my-2">Unlimited Website</li>
              <li className="my-2">50 GB Hosting</li>
              <li className="my-2">Premium Support</li>
            </ul>
            <button className="mt-aute flex justify-center items-center w-full py-5 rounded-lg font-semibold bg-[#9F3919] text-white">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
