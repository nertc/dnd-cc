const titleValueFn = require("./title-value-fn");

const description = titleValueFn("Description");
const hitDie = titleValueFn("Hit Die");
const primaryAbility = titleValueFn("Primary Ability");
const savingThrow = titleValueFn("Saving Throw Proficiency");
const armorWeapon = titleValueFn("Armor And Weapon Proficiency");

const scoreFn = (title) => (score) => titleValueFn(title)(`${score} / 5`);
const melee = scoreFn("Melee");
const ranger = scoreFn("Ranger");
const defender = scoreFn("Defender");
const healer = scoreFn("Heal");
const magic = scoreFn("Magic");
const magicDefense = scoreFn("Magic Defense");
const social = scoreFn("Social");
const explore = scoreFn("Explore");

const barbarian = {
  id: "barbarian",
  title: "Barbarian",
  info: [
    {
      title: "General",
      rows: [
        description("A fierce warrior who can enter a battle rage"),
        hitDie("d12"),
        primaryAbility("Strength"),
        savingThrow("Strength & Constitution"),
        armorWeapon(
          "Light and medium armor, shields, simple and martial weapons"
        ),
      ],
    },
    {
      title: "Usecase",
      rows: [
        melee(4),
        ranger(1),
        defender(5),
        healer(0),
        magic(0),
        magicDefense(3),
        social(2),
        explore(2),
      ],
    },
  ],
};

const bard = {
  id: "bard",
  title: "Bard",
  info: [
    {
      title: "General",
      rows: [
        description(
          "An inspiring magician whose power echoes the music creation"
        ),
        hitDie("d8"),
        primaryAbility("Charisma"),
        savingThrow("Dexterity & Charisma"),
        armorWeapon(
          "Light armor, simple weapons, hand crossbows, longswords,rapiers, shortswords"
        ),
      ],
    },
    {
      title: "Usecase",
      rows: [
        melee(2),
        ranger(2),
        defender(2.5),
        healer(3),
        magic(4),
        magicDefense(2),
        social(5),
        explore(3),
      ],
    },
  ],
};

const cleric = {
  id: "cleric",
  title: "Cleric",
  info: [
    {
      title: "General",
      rows: [
        description(
          "A priestly champion who wields divine magic in service of a higher power"
        ),
        hitDie("d8"),
        primaryAbility("Wisdom"),
        savingThrow("Wisdom & Charisma"),
        armorWeapon("Light and medium armor, shields, simple weapons"),
      ],
    },
    {
      title: "Usecase",
      rows: [
        melee(2),
        ranger(1),
        defender(3.5),
        healer(5),
        magic(4),
        magicDefense(2),
        social(3),
        explore(3),
      ],
    },
  ],
};

const druid = {
  id: "druid",
  title: "Druid",
  info: [
    {
      title: "General",
      rows: [
        description(
          "A priest of the Old Faith, wielding the powers of nature and adopting animal forms"
        ),
        hitDie("d8"),
        primaryAbility("Wisdom"),
        savingThrow("Intelligence & Wisdom"),
        armorWeapon(
          "Light and medium armor (nonmetal), shields (nonmetal), clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears"
        ),
      ],
    },
    {
      title: "Usecase",
      rows: [
        melee(3),
        ranger(1),
        defender(4),
        healer(3),
        magic(3),
        magicDefense(2),
        social(2),
        explore(4.5),
      ],
    },
  ],
};

const fighter = {
  id: "fighter",
  title: "Fighter",
  info: [
    {
      title: "General",
      rows: [
        description(
          "A master of martial combats, skilled with a variety of weapons and armor"
        ),
        hitDie("d10"),
        primaryAbility("Strength or Dexterity"),
        savingThrow("Strength and Constitution"),
        armorWeapon("All armor, shields, simple and martial weapons"),
      ],
    },
    {
      title: "Usecase",
      rows: [
        melee(4),
        ranger(3.5),
        defender(4),
        healer(1),
        magic(2),
        magicDefense(3),
        social(1),
        explore(2),
      ],
    },
  ],
};

const monk = {
  id: "monk",
  title: "Monk",
  info: [
    {
      title: "General",
      rows: [
        description(
          "A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection"
        ),
        hitDie("d8"),
        primaryAbility("Dexterity and Wisdom"),
        savingThrow("Strength and Dexterity"),
        armorWeapon("Simple weapons, shortswords"),
      ],
    },
    {
      title: "Usecase",
      rows: [
        melee(3.5),
        ranger(1.5),
        defender(2),
        healer(1),
        magic(1),
        magicDefense(4),
        social(2),
        explore(3),
      ],
    },
  ],
};

const paladin = {
  id: "paladin",
  title: "Paladin",
  info: [
    {
      title: "General",
      rows: [
        description("A holy warrior bound to a sacred oath"),
        hitDie("d10"),
        primaryAbility("Strength and Charisma"),
        savingThrow("Wisdom and Charisma"),
        armorWeapon("All armor, shields, simple and martial weapons"),
      ],
    },
    {
      title: "Usecase",
      rows: [
        melee(4),
        ranger(2.5),
        defender(4),
        healer(2.5),
        magic(2.5),
        magicDefense(4),
        social(2),
        explore(2),
      ],
    },
  ],
};

module.exports = {
  barbarian,
  bard,
  cleric,
  druid,
  fighter,
  monk,
  paladin,
  all: [barbarian, bard, cleric, druid, fighter, monk, paladin],
};
