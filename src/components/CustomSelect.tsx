import { useState, useRef, useEffect } from "react";

interface Pokemon {
  name: string;
  sprite: string;
}

interface CustomSelectProps {
  options: Pokemon[];
  onSelect: (selected: Pokemon[]) => void;
  selectedPokemon: Pokemon[];
  placeholder?: string; 
  disabled?: boolean;
  className?:string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, onSelect, selectedPokemon, placeholder = "Select Pokémon",
    disabled = false, className}) => {
  const [filter, setFilter] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  // Закриття списку при кліку за межами
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Фільтруємо список покемонів
  const filteredPokemon = options.filter((p) =>
    p.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleSelect = (pokemon: Pokemon) => {
    if (selectedPokemon.some((p) => p.name === pokemon.name)) {
      // Видаляємо покемона, якщо він уже вибраний
      onSelect(selectedPokemon.filter((p) => p.name !== pokemon.name));
    } else if (selectedPokemon.length < 4) {
      // Додаємо покемона, якщо ще не вибрано 4
      onSelect([...selectedPokemon, pokemon]);
    }
  };

  return (
    <div ref={selectRef} className={`relative w-[200px] border rounded-[16px] ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}>
     <div
  className="  p-[10px]  width-200   cursor-pointer   whitespace-nowrap overflow-hidden text-ellipsis"
  onClick={toggleDropdown}
  title={selectedPokemon.map((p) => p.name).join(", ")} // Показывает полный список при наведении
>
{selectedPokemon.length > 0 ? selectedPokemon.map((p) => p.name).join(", ") : placeholder}
</div>

      {isOpen && !disabled && (
        <div className="absolute  w-[200px]  top-full left-0 w-[200px] bg-[#f0f0f0]      z-999   ">
          <input
            type="text"
            placeholder="Search Pokémon..."
            className="p-[10px]  text-[16px]   w-[200px]  flex mx-auto border rounded-[16px]"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          {filteredPokemon.map((pokemon) => (
            <div
              key={pokemon.name}
              className={`flex w-[200px] h-auto items-center p-[10px] cursor-pointer border  rounded-[16px]    ${
                selectedPokemon.some((p) => p.name === pokemon.name)
                  ? "bg-[#FFF232] text-[#ee8989] border     "
                  : " "
              }`}
              onClick={() => handleSelect(pokemon)}
            >
               
              {pokemon.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
