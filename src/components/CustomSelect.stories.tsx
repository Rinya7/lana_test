import React, { useState } from "react";
import CustomSelect from "./CustomSelect";
import { Meta, StoryObj } from "@storybook/react";

interface Pokemon {
  name: string;
  sprite: string;
}

const sampleOptions: Pokemon[] = [
  { name: "Pikachu", sprite: "⚡" },
  { name: "Charmander", sprite: "🔥" },
  { name: "Squirtle", sprite: "💧" },
  { name: "Bulbasaur", sprite: "🌿" },
  { name: "Eevee", sprite: "⭐" },
];

const meta: Meta<typeof CustomSelect> = {
  title: "Components/CustomSelect",
  component: CustomSelect,
  parameters: {
    docs: {
      description: {
        component: "Component to select a team of 4 Pokémon for battle.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<typeof CustomSelect> = {
  render: () => {
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon[]>([]);

    return (
      <div className=" bg-gray-50  flex justify-center  ">
        <CustomSelect
          options={sampleOptions}
          selectedPokemon={selectedPokemon}
          onSelect={setSelectedPokemon}
        />
      </div>
    );
  },
};

export const WithPreselectedPokemon: StoryObj<typeof CustomSelect> = {
  render: () => {
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon[]>([
      sampleOptions[0],
      sampleOptions[2],
    ]);

    return (
      <div className=" bg-gray-50  flex justify-center">
        <CustomSelect
          options={sampleOptions}
          selectedPokemon={selectedPokemon}
          onSelect={setSelectedPokemon}
        />
      </div>
    );
  },
};

export const MaxLimitReached: StoryObj<typeof CustomSelect> = {
  render: () => {
    const [selectedPokemon, setSelectedPokemon] = useState<Pokemon[]>([
      sampleOptions[0],
      sampleOptions[1],
      sampleOptions[2],
      sampleOptions[3],
    ]);

    return (
      <div className=" bg-gray-50  flex justify-center">
        <CustomSelect
          options={sampleOptions}
          selectedPokemon={selectedPokemon}
          onSelect={setSelectedPokemon}
        />
      </div>
    );
  },
};


export const Disabled: StoryObj<typeof CustomSelect> = {
    render: () => {
      const [selectedPokemon, setSelectedPokemon] = useState<Pokemon[]>([]);
  
      return (
        <div className="bg-gray-50 flex justify-center">
          <CustomSelect
            options={sampleOptions}
            selectedPokemon={selectedPokemon}
            onSelect={setSelectedPokemon}
            disabled={true}
          />
        </div>
      );
    },
  };
  
  export const WithPlaceholder: StoryObj<typeof CustomSelect> = {
    render: () => {
      const [selectedPokemon, setSelectedPokemon] = useState<Pokemon[]>([]);
  
      return (
        <div className="bg-gray-50 flex justify-center">
          <CustomSelect
            options={sampleOptions}
            selectedPokemon={selectedPokemon}
            onSelect={setSelectedPokemon}
            placeholder="Choose your Pokémon..."
          />
        </div>
      );
    },
  };
  
  export const WithCustomStyles: StoryObj<typeof CustomSelect> = {
    render: () => {
      const [selectedPokemon, setSelectedPokemon] = useState<Pokemon[]>([]);
  
      return (
        <div className="bg-gray-50 flex justify-center">
          <CustomSelect
            options={sampleOptions}
            selectedPokemon={selectedPokemon}
            onSelect={setSelectedPokemon}
            className="border-4 border-blue-500 text-blue-500 p-2 rounded-lg"
          />
        </div>
      );
    },
  };
  