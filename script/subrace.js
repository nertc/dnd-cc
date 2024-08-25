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
};
