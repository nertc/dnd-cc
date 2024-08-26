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
        savingThrow("Strength and Constitution"),
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
        savingThrow("Dexterity and Charisma"),
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
        savingThrow("Wisdom and Charisma"),
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
        savingThrow("Intelligence and Wisdom"),
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

const rangerClass = {
  id: "ranger",
  title: "Ranger",
  info: [
    {
      title: "General",
      rows: [
        description(
          "A warrior who uses martial powers and nature magic to combat threats on the edges of civilization"
        ),
        hitDie("d10"),
        primaryAbility("Dexterity and Wisdom"),
        savingThrow("Strength and Dexterity"),
        armorWeapon(
          "Light and medium armor, shields, simple and martial weapons"
        ),
      ],
    },
    {
      title: "Usecase",
      rows: [
        melee(3.5),
        ranger(4),
        defender(2),
        healer(2),
        magic(2.5),
        magicDefense(2),
        social(2),
        explore(4),
      ],
    },
  ],
};

const rogue = {
  id: "rogue",
  title: "Rogue",
  info: [
    {
      title: "General",
      rows: [
        description(
          "A scoundrel who uses stealth and trickery to overcome obstacles and enemies"
        ),
        hitDie("d8"),
        primaryAbility("Dexterity"),
        savingThrow("Dexterity and Intelligence"),
        armorWeapon(
          "Light armor, simple weapons, hand crossbows, longswords, rapiers, shortswords"
        ),
      ],
    },
    {
      title: "Usecase",
      rows: [
        melee(4),
        ranger(4),
        defender(2.5),
        healer(0),
        magic(2),
        magicDefense(2),
        social(3.5),
        explore(3.5),
      ],
    },
  ],
};

const sorcerer = {
  id: "sorcerer",
  title: "Sorcerer",
  info: [
    {
      title: "General",
      rows: [
        description(
          "A spellcaster who draws on inherent magic from a gift or bloodline"
        ),
        hitDie("d6"),
        primaryAbility("Charisma"),
        savingThrow("Constitution and Charisma"),
        armorWeapon("Daggers, darts, slings, quarterstaffs, light crossbows"),
      ],
    },
    {
      title: "Usecase",
      rows: [
        melee(1),
        ranger(1),
        defender(1.5),
        healer(1),
        magic(5),
        magicDefense(3.5),
        social(3),
        explore(3),
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
  ranger: rangerClass,
  rogue,
  sorcerer,
  all: [
    barbarian,
    bard,
    cleric,
    druid,
    fighter,
    monk,
    paladin,
    rangerClass,
    rogue,
    sorcerer,
  ],
};
