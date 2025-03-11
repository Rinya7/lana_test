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
  argTypes: {
    placeholder: {
        name: "Placeholder",
        description: "Text displayed when no Pokémon is selected.",
        control: { type: "text" },
        table: {
          type: { summary: "string" },
          defaultValue: { summary: "Select Pokémon" },
        },
    },
    disabled: {
        name: "Disabled",
        description: "Disables the component if set to `true`.",
        control: { type: "boolean" },
        table: {
          type: { summary: "boolean" },
          defaultValue: { summary: "false" },
        },
    },
    className: {
        name: "Class Name",
        description: "Additional CSS classes for styling the component.",
        control: { type: "text" },
        table: {
          type: { summary: "string" },
        },
    },
  },
};

export default meta;

export const Default: StoryObj<typeof CustomSelect> = {
    args: {
        placeholder: "Select Pokémon",
        disabled: false,
      },
      render: (args) => {
        const [selectedPokemon, setSelectedPokemon] = useState<Pokemon[]>([]);
    
        return (
          <div className="bg-gray-50 flex justify-center">
            <CustomSelect {...args} options={sampleOptions} selectedPokemon={selectedPokemon} onSelect={setSelectedPokemon} />
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
    args: {
         
        disabled: true,
      },
    render: (args) => {
      const [selectedPokemon, setSelectedPokemon] = useState<Pokemon[]>([]);
  
      return (
        <div className="bg-gray-50 flex justify-center">
          <CustomSelect {...args}
            options={sampleOptions}
            selectedPokemon={selectedPokemon}
            onSelect={setSelectedPokemon}
             
          />
        </div>
      );
    },
  };
  
  export const WithPlaceholder: StoryObj<typeof CustomSelect> = {
    args: {
        placeholder: "Choose your Pokémon...",
        disabled: false,
      },
    render: (args) => {
      const [selectedPokemon, setSelectedPokemon] = useState<Pokemon[]>([]);
  
      return (
        <div className="bg-gray-50 flex justify-center">
          <CustomSelect {...args}
            options={sampleOptions}
            selectedPokemon={selectedPokemon}
            onSelect={setSelectedPokemon}
             
          />
        </div>
      );
    },
  };
  
  export const WithCustomStyles: StoryObj<typeof CustomSelect> = {
    args: {
        className: "border-4 border-blue-500 text-blue-500 p-2 rounded-lg",
         
      },
    render: (args) => {
      const [selectedPokemon, setSelectedPokemon] = useState<Pokemon[]>([]);
  
      return (
        <div className="bg-gray-50 flex justify-center">
          <CustomSelect {...args}
            options={sampleOptions}
            selectedPokemon={selectedPokemon}
            onSelect={setSelectedPokemon}
             
          />
        </div>
      );
    },
  };
  