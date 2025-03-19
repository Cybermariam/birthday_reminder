import React from 'react';

const List = ({ people }) => {
  return (
    // {!---Items to render}
    <div>
      {people.map(person => {
        const { id, image, name, age } = person;
        return (
          <article key={id} className="flex items-center pt-5 mb-6">
            <img
              className="h-22 w-22 object-cover rounded-full shadow-sm"
              src={image}
              alt={name}
            />
            <div className="ps-5 ">
              <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium tracking-wide leading-tight">
                {name}
              </h4>
              <p className="text-gray-400  text-xl">{age} years</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
