const halfling = {
  id: "halfling",
  title: "Halfling",
  info: [
    {
      title: "Stats",
      rows: [
        { title: "Height", value: "0.9 m (small)" },
        { title: "Weight", value: "18-20 kg" },
        { title: "Lifespan", value: "150 y" },
        { title: "Adulthood", value: "20 y" },
        { title: "Size", value: "Small" },
        { title: "Speed", value: "7.5 m (Slow)" },
      ],
    },
    {
      title: "Traits",
      rows: [
        { title: "Language", value: "Common, Halfling" },
        { title: "Dexterity", value: "+2" },
        {
          title: "Lucky",
          value: "When rolls 1 on d20, reroll and use new roll",
        },
        {
          title: "Brave",
          value: "Adventage on frightened saving throws",
        },
        {
          title: "Nimbleness",
          value: "Can move through any creature that is larger",
        },
        {
          title: "Subraces",
          value: "Lightfoot, stout",
        },
      ],
    },
  ],
};

const gnome = {
  id: "gnome",
  title: "Gnome",
  info: [
    {
      title: "Stats",
      rows: [
        { title: "Height", value: "0.9 m (small)" },
        { title: "Weight", value: "18-20 kg" },
        { title: "Lifespan", value: "350-500 y" },
        { title: "Adulthood", value: "40 y" },
        { title: "Speed", value: "7.5 m (Slow)" },
      ],
    },
    {
      title: "Traits",
      rows: [
        { title: "Language", value: "Common, Gnomish" },
        { title: "Intelligence", value: "+2" },
        {
          title: "Darkvision",
          value:
            "Withing 18 m sees dim light as bright and darkness as dim light",
        },
        {
          title: "Cunning",
          value: "Adventage on intelligence, wisdom and charisma saving throws",
        },
        {
          title: "Nimbleness",
          value: "Can move through any creature that is larger",
        },
        {
          title: "Subraces",
          value: "Forest gnome, rock gnome",
        },
      ],
    },
  ],
};

const dwarf = {
  id: "dwarf",
  title: "Dwarf",
  info: [],
};

const elf = {
  id: "elf",
  title: "Elf",
  info: [],
};

const half_elf = {
  id: "half_elf",
  title: "Half-Elf",
  info: [],
};

const tiefling = {
  id: "tiefling",
  title: "Tiefling",
  info: [],
};

const human = {
  id: "human",
  title: "Human",
  info: [],
};

const half_prc = {
  id: "half_orc",
  title: "Half-Orc",
  info: [],
};

const dragonborn = {
  id: "dragonborn",
  title: "Dragonborn",
  info: [],
};

const all = [
  halfling,
  gnome,
  dwarf,
  elf,
  half_elf,
  tiefling,
  human,
  half_prc,
  dragonborn,
];

module.exports = {
  halfling,
  gnome,
  dwarf,
  elf,
  half_elf,
  tiefling,
  human,
  half_prc,
  dragonborn,
  all,
};
