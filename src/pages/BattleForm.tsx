import { useEffect, useState } from 'react';
 
import { validateName } from '../utils/validationForm';
import CustomSelect from '../components/CustomSelect';
import { fetchPokemon } from '../hooks/fetchPokemon';

interface Pokemon {
    name: string;
    sprite: string;
  }

const BattleForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [selectedTeam, setSelectedTeam] = useState<Pokemon[]>([]);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {pokemonList} = fetchPokemon();

   
  useEffect(() => {
    if (selectedTeam.length < 4) {
    
      setIsModalOpen(false); // Закриваємо модалку, якщо покемонів менше 4
      setError('You must select 4 Pokémon for your team.');
    } else {
    
      setError('');
    }
  }, [selectedTeam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const firstNameError = validateName(firstName);
    const lastNameError = validateName(lastName);
    if (firstNameError || lastNameError || selectedTeam.length !== 4) {
      setError('Please ensure your name is valid and you have selected 4 Pokémon.');
      return;
    }
    setError('');
    setIsModalOpen(true);
  };

  return (
    <>
    <div className="container bg-[#b8f3fc] ">
        <h1 className='bg-[#FFF456] text-center title  '>Welcome to Luna Edge technical interview</h1>
      <form onSubmit={handleSubmit} className="   mx-auto py-[40px] ">
        <input 
          type="text" 
          placeholder="First Name" 
          className="border p-[8px]   mb-[16px] w-2/3 flex mx-auto text-[20px]" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input 
          type="text" 
          placeholder="Last Name" 
          className="border p-[8px]   mb-[16px] w-2/3 flex mx-auto text-[20px]" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)}
        />
        {error && <p className="my-[30px] text-center text-[#ff0000] w-2/3 flex mx-auto">{error}</p>}
         
        <CustomSelect options={pokemonList} onSelect={setSelectedTeam} selectedPokemon={selectedTeam} />

        
        <button type="submit" className="bg-[#8fcc5e] rounded-full text-white p-[6px] w-auto flex  mx-auto mt-[40px]">Submit</button>
         
      </form>
      
    </div>
    {isModalOpen && (
        <div className='container   bg-[#c4c4c4]    '>
        <div className="flex mx-auto    ">
          <div className="bg-blue p-[26px] rounded-lg ">
            <h2 className="text-lg font-bold">"{firstName} {lastName}, here is your Pokémon Team"</h2>
            <div className="grid grid-cols-2 gap-4 mb-[26px]">
              {selectedTeam.map((pokemon) => (
                <div key={pokemon.name} className="border p-4 rounded-lg flex flex-col items-center">
                  <img src={pokemon.sprite} alt={pokemon.name} className="w-16 h-16" />
                  <p className="mt-2 font-bold">{pokemon.name}</p>
                </div>
              ))}
            </div>
            <button onClick={() => setIsModalOpen(false)} className="mx-auto bg-red text-white p-[10px] flex justify-center alight-center rounded">Close</button>
          </div>
        </div></div>
      )}
    </>
  );
};

export default BattleForm;