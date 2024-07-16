import {useState, useEffect  } from 'react';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
    .then((res)=> {
        return res.json();

    })
    .then((data) => {
        console.log(data);
        setCharacters(data.results);
    });
  }, []);

  
  return (
    <>
    <div>
      {characters.map((character) => (
        <main className='pl-50px inline-block grid-gap-6 grid-cols-4 grid-rows-5 justify-items-center items-center'>
        <div className='block my-2 mx-3 bg-zinc-500 max-w-fit max-h-fit' key = {character.id}>
        <img className=' w-200px h-500px' src = {character.image} alt = {character.name}/>
        <h2 className='mx-2 text-left text-xl font-bold text-orange-500'> Name: {character.name}</h2>
        <p className='mx-2 text-left text-xl font-semibold text-orange-200 '>Of the: {character.species} -Kind </p>
        <button className='center  text-white font-bold border-y-2 border-orange-200 font-xl text-center py-2 px-2 my-1 mx-5 hover:bg-orange-100 hover:text-black cursor-pointer' onClick={()=> handleDelete (character.id)}>Delete</button>
       </div>
       </main>

      ))}
      </div>
      </>
  );

  function handleDelete (id) {
    const newCharacter = characters.filter(character => character.id !== id);
    setCharacters(newCharacter)


}

};
export default CharacterList;