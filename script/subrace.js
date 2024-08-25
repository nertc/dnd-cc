const lightfoot = {
  id: "lightfoot",
  title: "Lightfoot",
  info: [
    {
      title: "Traits",
      rows: [
        {
          title: "Charisma",
          value: "+1",
        },
        {
          title: "Naturally Stealthy",
          value: "Can hide when obscured by at least 1 size larger creature",
        },
      ],
    },
  ],
};

const stout = {
  id: "stout",
  title: "Stout",
  info: [
    {
      title: "Traits",
      rows: [
        {
          title: "Constitution",
          value: "+1",
        },
        {
          title: "Stout Resilience",
          value: "Advantage on poison saving throws, poison damage is halved",
        },
      ],
    },
  ],
};

const forest = {
  id: "forest",
  title: "Forest",
  info: [
    {
      title: "Traits",
      rows: [
        {
          title: "Dexterity",
          value: "+1",
        },
        {
          title: "Natural Illusionist",
          value: "Knows minor illusion cantrip (casts with Intelligence)",
        },
        {
          title: "Speak With Small Beasts",
          value: "Communicates simple ideas with small and smaller beasts",
        },
      ],
    },
  ],
};

const rock = {
  id: "rock",
  title: "Rock",
  info: [
    {
      title: "Traits",
      rows: [
        {
          title: "Constitution",
          value: "+1",
        },
        {
          title: "Artificer's Lore",
          value:
            "Magic items, alchemical objects and technological devices Intelligence (History) checks + 2 * proficiency bonus",
        },
        {
          title: "Tinker",
          value:
            "Proficiency with artisan tools. 1 hour and 10 gp = clocwork device (AC 5, 1 hp, 24 hour)",
        },
      ],
    },
  ],
};

const hill = {
  id: "hill",
  title: "Hill",
  info: [
    {
      title: "Traits",
      rows: [
        {
          title: "Wisdom",
          value: "+1",
        },
        {
          title: "Dwarven Toughness",
          value: "+1 hp, +1 hp per level",
        },
      ],
    },
  ],
};

const mountain = {
  id: "mountain",
  title: "Mountain",
  info: [
    {
      title: "Traits",
      rows: [
        {
          title: "Strength",
          value: "+2",
        },
        {
          title: "Dwarven Armor Training",
          value: "Proficiency with light and medium armor",
        },
      ],
    },
  ],
};

const high = {
  id: "high",
  title: "High",
  info: [
    {
      title: "Traits",
      rows: [
        {
          title: "Intelligence",
          value: "+1",
        },
        {
          title: "Elf Weapon Training",
          value: "Proficiency with longsword, shortsword, shortbow and longbow",
        },
        {
          title: "Cantrip",
          value:
            "Knows 1 cantrip from wizard spell list, cast with Intelligence",
        },
        {
          title: "Extra Language",
          value: "+1 Any language",
        },
      ],
    },
  ],
};

const wood = {
  id: "wood",
  title: "Wood",
  info: [
    {
      title: "Traits",
      rows: [
        {
          title: "Wisdom",
          value: "+1",
        },
        {
          title: "Elf Weapon Training",
          value: "Proficiency with longsword, shortsword, shortbow and longbow",
        },
        {
          title: "Fleet Of Foot",
          value: "Speed 10.5 m (fast)",
        },
        {
          title: "Mask Of The Wild",
          value: "Can try to hide when lightly obscured by nature",
        },
      ],
    },
  ],
};

const dark = {
  id: "dark",
  title: "Dark (Drow)",
  info: [
    {
      title: "Traits",
      rows: [
        {
          title: "Charisma",
          value: "+1",
        },
        {
          title: "Drow Weapon Training",
          value: "Proficiency with rapiers, shortswords and hand crossbows",
        },
        {
          title: "Superior Dark Vision",
          value: "Dark vision radius 36 m",
        },
        {
          title: "Sunlight Sensitivity",
          value:
            "Attack and Wisdom (Perception) rolls disadvantage, when target is in direct sunlight",
        },
        {
          title: "Drow Magic",
          value:
            "Lvl 1 - Dancing Lights cantrip; lvl 3 - once per long rest Faerie Fire; lvl 5 - once per long rest Darkness. Cast with Charisma",
        },
      ],
    },
  ],
};

module.exports = {
  halfling: {
    lightfoot,
    stout,
    all: [lightfoot, stout],
  },
  gnome: {
    forest,
    rock,
    all: [forest, rock],
  },
  dwarf: {
    hill,
    mountain,
    all: [hill, mountain],
  },
  elf: {
    high,
    wood,
    dark,
    all: [high, wood, dark],
  },
};
