import React from "react";
import "./Books.css";
import Library from "../library/Library";

const Books = () => {

  
  return (
    <div className="books-container">
      <Library
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMdYlQFxYimxd6iNERSgEsDcALykernUQ5g&usqp=CAU"
        }
        title="Fiction"
        desc="Faith"
        author="David Adams"
      />
      <Library
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMdYlQFxYimxd6iNERSgEsDcALykernUQ5g&usqp=CAU"
        }
        title="Fantasy"
        desc="The World Of Ice & Fire"
        author="George R.R Martin"
      />

      <Library
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMdYlQFxYimxd6iNERSgEsDcALykernUQ5g&usqp=CAU"
        }
        title="Education"
        desc="The Power of Habit"
        author="Charless Duhigg"
      />
      <Library
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMdYlQFxYimxd6iNERSgEsDcALykernUQ5g&usqp=CAU"
        }
        title="Adventure"
        desc="Wild Wisdom"
        author="Neil Douglas-Koltz"
      />
      <Library
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMdYlQFxYimxd6iNERSgEsDcALykernUQ5g&usqp=CAU"
        }
        title=" Science"
        desc="The Sky at Night: How to..."
        author="Chris North & Paul Abel"
      />

      <Library
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMdYlQFxYimxd6iNERSgEsDcALykernUQ5g&usqp=CAU"
        }
        title="Nature"
        desc="Into Thin Air"
        author="Jon krakauer"
      />
      <Library
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMdYlQFxYimxd6iNERSgEsDcALykernUQ5g&usqp=CAU"
        }
        title="Fantasy"
        desc="Humans"
        author="Brand Stanton"
      />
      <Library
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMdYlQFxYimxd6iNERSgEsDcALykernUQ5g&usqp=CAU"
        }
        title="Education"
        desc="Wonders of the World"
        author="Lonely Planet"
      />
      <Library
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMdYlQFxYimxd6iNERSgEsDcALykernUQ5g&usqp=CAU"
        }
        title="Romance"
        desc="Paint a New Scene"
        author="Deirdre O'Dare"
      />
      <Library
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMdYlQFxYimxd6iNERSgEsDcALykernUQ5g&usqp=CAU"
        }
        title="Travel"
        desc="Along the Enchanted Way"
        author="William Blacker"
      />
      <Library
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMdYlQFxYimxd6iNERSgEsDcALykernUQ5g&usqp=CAU"
        }
        title="Fantasy"
        desc="A Court of Silver Flames"
        author="Sarah J.Maas"
      />
      <Library
        image={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpMdYlQFxYimxd6iNERSgEsDcALykernUQ5g&usqp=CAU"
        }
        title="Travel"
        desc="The Sporades Sailing pilot"
        author="Davi Nairn"
      />
    </div>
  );
};

export default Books;
