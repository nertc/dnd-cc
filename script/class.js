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

module.exports = {
  barbarian,
  all: [barbarian],
};
