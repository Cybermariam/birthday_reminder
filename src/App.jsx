import React, { useState } from 'react';
import './App.css';
import List from './List.jsx';
import data from './data.js';
const App = () => {
  const [people, setPeople] = useState(data);

  return (
    <main className="min-h-screen bg-[#FAE8FF] flex items-center justify-center">
      <section className="bg-white w-[60%] mx-auto p-10 rounded-md ">
        <h3
          className=" text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl
 mb-5 tracking-wide leading-tight "
        >
          {people.length} birthdays today
        </h3>

        <List people={people} />

        <button
          className="text-center bg-[#D946EF] w-[100%] rounded-md cursor-pointer capitalize py-2 mt-5"
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear All
        </button>
      </section>
    </main>
  );
};

export default App;
