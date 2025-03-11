import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { validateName } from "../utils/validationForm";
import CustomSelect from "../components/CustomSelect";
import { fetchPokemon } from "../hooks/fetchPokemon";

interface Pokemon {
  name: string;
  sprite: string;
}

interface FormValues {
  firstName: string;
  lastName: string;
}

const BattleForm = () => {
  const [selectedTeam, setSelectedTeam] = useState<Pokemon[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [firstName, setFirstName] = useState(""); // Добавили стейт для модалки
  const [lastName, setLastName] = useState(""); 

  const { pokemonList, loading, error }  = fetchPokemon();

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    getValues, // Добавили getValues
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onSubmit",
  });

  useEffect(() => {
    if (selectedTeam.length < 4) {
      setIsModalOpen(false);
      setError("root", { message: "You must select 4 Pokémon for your team." });
    } else {
      clearErrors("root");
    }
  }, [selectedTeam, setError, clearErrors]);

  const onSubmit: SubmitHandler<FormValues> = () => {
  const values = getValues();
   

    if (selectedTeam.length !== 4) {
      setError("root", { message: "You must select 4 Pokémon for your team." });
      return;
    }

    // Сохраняем имя для модального окна
    setFirstName(values.firstName);
    setLastName(values.lastName);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="container bg-[#b8f3fc]">
        <h1 className="text-center title">
          Welcome to Luna Edge technical interview
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="mx-auto py-[40px]">
          <input
            {...register("firstName", {
              required: "First name is required",
              minLength: { value: 2, message: "Minimum length is 2" },
              maxLength: { value: 12, message: "Maximum length is 12" },
              validate: validateName,
            })}
            type="text"
            placeholder="First Name"
            className="border p-[8px] mb-[16px] w-2/3 flex mx-auto text-[20px]"
          />
          {errors.firstName && (
            <p className="text-red-500 text-center">{errors.firstName.message}</p>
          )}

          <input
            {...register("lastName", {
              required: "Last name is required",
              minLength: { value: 2, message: "Minimum length is 2" },
              maxLength: { value: 12, message: "Maximum length is 12" },
              validate: validateName,
            })}
            type="text"
            placeholder="Last Name"
            className="border p-[8px] mb-[36px] w-2/3 flex mx-auto text-[20px]"
          />
          {errors.lastName && (
            <p className="text-red-500 text-center">{errors.lastName.message}</p>
          )}
 {errors.root && <p className="my-[30px] text-center text-[#ff0000]    ">{errors.root.message}</p>}
{loading ? (
  <p className="text-center text-gray-500">Loading Pokémon...</p>
) : error ? (
  <p className="text-center text-red-500">{error}</p>
) : (
  <CustomSelect options={pokemonList} onSelect={setSelectedTeam} selectedPokemon={selectedTeam} />
)}

         

          <button
            type="submit"
            className="bg-[#8fcc5e] rounded-full text-white p-[10px] font-bold w-auto flex mx-auto mt-[40px]"
          >
            Submit
          </button>
        </form>
      </div>

      {isModalOpen && (
        <div className="container bg-[#e9fc1e]">
          <div className="flex mx-auto">
            <div className="mx-auto bg-[#50d6ff] p-[26px] rounded-lg">
              <h2 className="text-lg font-bold">
                {firstName} {lastName}, here is your Pokémon Team
              </h2>
              <div className=" grid grid-cols-2 gap-4 mb-[26px]">
                {selectedTeam.map((pokemon) => (
                  <div key={pokemon.name} className="border p-4 rounded-lg flex flex-col items-center">
                    <img src={pokemon.sprite} alt={pokemon.name} className="w-16 h-16" />
                    <p className="mt-2 font-bold">{pokemon.name}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-[#8fcc5e] rounded-full text-white w-auto p-[10px] font-bold  w-auto flex mx-auto mt-[40px]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BattleForm;
