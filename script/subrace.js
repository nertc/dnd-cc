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

module.exports = {
  halfling: {
    lightfoot,
    stout,
    all: [lightfoot, stout],
  },
};
