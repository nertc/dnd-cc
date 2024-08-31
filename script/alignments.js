const all = ["Good", "Neutral", "Evil"]
  .reduce(
    (acc, kindness) => [
      ...acc,
      ["Lawful", "Neutral", "Chaotic"].reduce(
        (acc, lawfulness) => [
          ...acc,
          {
            id: `${lawfulness.toLowerCase()}_${kindness.toLowerCase()}`,
            title: `${lawfulness} ${kindness}`,
          },
        ],
        []
      ),
    ],
    []
  )
  .flat();

module.exports = all.reduce(
  (acc, alignment) => ({
    ...acc,
    [alignment.id]: alignment,
  }),
  { all }
);
