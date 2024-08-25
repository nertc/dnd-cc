const subraces = require("./subrace");

const halfling = {
  id: "halfling",
  title: "Halfling",
  subraces: subraces.halfling,
  info: [
    {
      title: "Stats",
      rows: [
        { title: "Height", value: "1 m (small)" },
        { title: "Weight", value: "18-20 kg" },
        { title: "Lifespan", value: "150 y" },
        { title: "Adulthood", value: "20 y" },
        { title: "Size", value: "Small" },
        { title: "Speed", value: "7.5 m (slow)" },
        {
          title: "Subraces",
          value: "Lightfoot, stout",
        },
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
          value: "Advantage on frightened saving throws",
        },
        {
          title: "Nimbleness",
          value: "Can move through any creature that is larger",
        },
      ],
    },
  ],
};

const gnome = {
  id: "gnome",
  title: "Gnome",
  subraces: subraces.gnome,
  info: [
    {
      title: "Stats",
      rows: [
        { title: "Height", value: "1 m (small)" },
        { title: "Weight", value: "18-20 kg" },
        { title: "Lifespan", value: "350-500 y" },
        { title: "Adulthood", value: "40 y" },
        { title: "Speed", value: "7.5 m (slow)" },
        {
          title: "Subraces",
          value: "Forest gnome, rock gnome",
        },
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
          value: "Advantage on intelligence, wisdom and charisma saving throws",
        },
        {
          title: "Nimbleness",
          value: "Can move through any creature that is larger",
        },
      ],
    },
  ],
};

const dwarf = {
  id: "dwarf",
  title: "Dwarf",
  info: [
    {
      title: "Stats",
      rows: [
        { title: "Height", value: "1.2-1.5 m (medium)" },
        { title: "Weight", value: "70 kg" },
        { title: "Lifespan", value: "350 y" },
        { title: "Adulthood", value: "50 y" },
        {
          title: "Speed",
          value: "7.5 m (slow) (is not affected by heavy armor)",
        },
        {
          title: "Subraces",
          value: "Hill dwarves, mountain dwarves",
        },
      ],
    },
    {
      title: "Traits",
      rows: [
        { title: "Language", value: "Common, Dwarvish" },
        { title: "Constitution", value: "+2" },
        {
          title: "Darkvision",
          value:
            "Withing 18 m sees dim light as bright and darkness as dim light",
        },
        {
          title: "Resilience",
          value: "Advantage on poison saving throws, poison damage is halved",
        },
        {
          title: "Combat Training",
          value: "Proficiency with battleaxe, handaxe, light hammer, warhammer",
        },
        {
          title: "Tool Proficiency",
          value: "Proficiency with smith or bewer or mason tools",
        },
        {
          title: "Stonecunning",
          value:
            "Stonework origin Intelligence (History) checks + 2 * proficiency bonus",
        },
      ],
    },
  ],
};

const elf = {
  id: "elf",
  title: "Elf",
  info: [
    {
      title: "Stats",
      rows: [
        { title: "Height", value: "1.5-1.8 m (medium)" },
        { title: "Weight", value: "45-65 kg" },
        { title: "Lifespan", value: "750 y" },
        { title: "Adulthood", value: "100 y" },
        {
          title: "Speed",
          value: "9 m (normal)",
        },
        {
          title: "Subraces",
          value: "High elves, wood elves and dark elves (drow)",
        },
      ],
    },
    {
      title: "Traits",
      rows: [
        { title: "Language", value: "Common, Elvish" },
        { title: "Dexterity", value: "+2" },
        {
          title: "Darkvision",
          value:
            "Withing 18 m sees dim light as bright and darkness as dim light",
        },
        {
          title: "Keen Senses",
          value: "Proficiency in Perception",
        },
        {
          title: "Fey Ancestry",
          value: "Advantage against charmed and magic sleep saving throws",
        },
        {
          title: "Trance",
          value: "Instead of 8h sleep, needs only 4h",
        },
      ],
    },
  ],
};

const half_elf = {
  id: "half_elf",
  title: "Half-Elf",
  info: [
    {
      title: "Stats",
      rows: [
        { title: "Height", value: "1.5-1.8 m (medium)" },
        { title: "Weight", value: "45-82 kg" },
        { title: "Lifespan", value: "180 y" },
        { title: "Adulthood", value: "20 y" },
        {
          title: "Speed",
          value: "9 m (normal)",
        },
      ],
    },
    {
      title: "Traits",
      rows: [
        { title: "Language", value: "Common, Elvish, +1 Any language" },
        { title: "Charisma", value: "+2, +1 Any two ability scores" },
        {
          title: "Darkvision",
          value:
            "Withing 18 m sees dim light as bright and darkness as dim light",
        },
        {
          title: "Fey Ancestry",
          value: "Advantage against charmed and magic sleep saving throws",
        },
        {
          title: "Skill Versatility",
          value: "Proficiency in any 2 skills",
        },
      ],
    },
  ],
};

const tiefling = {
  id: "tiefling",
  title: "Tiefling",
  info: [
    {
      title: "Stats",
      rows: [
        { title: "Height", value: "1.5-1.8 m (medium)" },
        { title: "Weight", value: "55-115 kg" },
        { title: "Lifespan", value: "80-100 y" },
        { title: "Adulthood", value: "20 y" },
        {
          title: "Speed",
          value: "9 m (normal)",
        },
      ],
    },
    {
      title: "Traits",
      rows: [
        { title: "Language", value: "Common, Infernal" },
        { title: "Intelligence", value: "+1" },
        { title: "Charisma", value: "+2" },
        {
          title: "Darkvision",
          value:
            "Withing 18 m sees dim light as bright and darkness as dim light",
        },
        {
          title: "Hellish Resistance",
          value: "Fire damage is halved",
        },
        {
          title: "Infernal Legacy",
          value:
            "lvl 1 - Thaumaturgy cantrip; lvl 3 - once per long rest cast Hellish Rebuke as 2nd lvl spell; lvl 5 - once per long rest cast Darkness; Use charisma for these spells",
        },
      ],
    },
  ],
};

const human = {
  id: "human",
  title: "Human",
  info: [
    {
      title: "Stats",
      rows: [
        { title: "Height", value: "1.5-1.8 m (medium)" },
        { title: "Weight", value: "55-115 kg" },
        { title: "Lifespan", value: "70-90 y" },
        { title: "Adulthood", value: "20 y" },
        {
          title: "Speed",
          value: "9 m (normal)",
        },
      ],
    },
    {
      title: "Traits",
      rows: [
        { title: "Language", value: "Common, +1 Any language" },
        { title: "Ability Scores", value: "+1 Any two different" },
        { title: "Skills", value: "Proficiency in any 1 skill" },
        {
          title: "Feat",
          value: "Any 1 feat",
        },
      ],
    },
  ],
};

const half_orc = {
  id: "half_orc",
  title: "Half-Orc",
  info: [
    {
      title: "Stats",
      rows: [
        { title: "Height", value: "1.5-2.15 m (medium)" },
        { title: "Weight", value: "80-115 kg" },
        { title: "Lifespan", value: "75 y" },
        { title: "Adulthood", value: "14 y" },
        {
          title: "Speed",
          value: "9 m (normal)",
        },
      ],
    },
    {
      title: "Traits",
      rows: [
        { title: "Language", value: "Common, Orcish" },
        { title: "Strength", value: "+2" },
        { title: "Constitution", value: "+1" },
        {
          title: "Darkvision",
          value:
            "Withing 18 m sees dim light as bright and darkness as dim light",
        },
        {
          title: "Menacing",
          value: "Proficiency in Intimidation",
        },
        {
          title: "Relentless Endurance",
          value: "Once per long rest dropping to 0 hp sets you 1 hp",
        },
        {
          title: "Savage Attacks",
          value: "When crit roll one additional dice of the weapon",
        },
      ],
    },
  ],
};

const dragonborn = {
  id: "dragonborn",
  title: "Dragonborn",
  info: [
    {
      title: "Stats",
      rows: [
        { title: "Height", value: "180 m (medium)" },
        { title: "Weight", value: "115 kg" },
        { title: "Lifespan", value: "80 y" },
        { title: "Adulthood", value: "15 y" },
        {
          title: "Speed",
          value: "9 m (normal)",
        },
        {
          title: "Subraces",
          value:
            "Black, Blue, Brass, Bronze, Copper, Gold, Green, Red, Silver and White",
        },
      ],
    },
    {
      title: "Traits",
      rows: [
        { title: "Language", value: "Common, Draconic" },
        { title: "Strength", value: "+2" },
        { title: "Charisma", value: "+1" },
        {
          title: "Breath Weapon",
          value:
            "Draconic Ancestry weapon. Creatures take saving throw DC 8 + your Constitution + your Proficiency. lvl 1 - 2d6 damage on fail, half on success; lvl 6 - 3d6 instead; lvl 11 - 4d6 instead; lvl 16 - 5d6 instead",
        },
        {
          title: "Damage Resistance",
          value: "Type of Draconic Ancestry damage is halved against you",
        },
      ],
    },
  ],
};

const all = [
  halfling,
  gnome,
  dwarf,
  elf,
  half_elf,
  tiefling,
  human,
  half_orc,
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
  half_orc,
  dragonborn,
  all,
};
