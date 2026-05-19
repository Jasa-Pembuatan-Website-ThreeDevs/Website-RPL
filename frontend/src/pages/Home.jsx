import React from 'react';

const Home = () => {
  return (
    <div className="py-12">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
        Discover <span className="text-accent">Top Talents</span> from Vocational Excellence.
      </h1>
      <p className="mt-6 text-xl text-gray-400 max-w-3xl">
        A hub for students to showcase their professional portfolios and connect with DUDIKA partners.
      </p>
      <div className="mt-10 flex gap-4">
        <button className="bg-accent text-primary font-bold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all">
          Explore Students
        </button>
        <button className="border border-white/20 px-8 py-3 rounded-lg hover:bg-white/5 transition-all">
          For Partners
        </button>
      </div>
    </div>
  );
};

export default Home;
