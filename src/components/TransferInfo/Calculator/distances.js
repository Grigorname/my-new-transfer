const cityDistances = {
  "Yerevan-Abovyan": 16,
  "Yerevan-Sevan": 80,
  "Yerevan-Tsaxkadzor": 50,
  "Yerevan-Goris": 236,
  "Aerapot Erevan-Centr Erevan": 47,
  "Yerevan-Gyumri": 120,
  "Yerevan-Vanadzor": 110,
  "Yerevan-Alaverdy": 160,
  "Yerevan-Kapan": 290,
  "Yerevan-Dilijan": 95,
  "Yerevan-Ijevan": 130,
  "Yerevan-Megri": 360,
  "Yerevan-Noyemberyan": 180,
  "Yerevan-Bagratashen": 210,
  "Yerevan-Berd": 190,
  "Yerevan-Jermuk": 170,
  "Yerevan-Aparan": 57,
  "Yerevan-Kapan": 296,
  "Yerevan-Spitak": 96,
};
const addReverseRoutes = (distances) => {
  const reverseDistances = {};
  for (const [route, distance] of Object.entries(distances)) {
    const [from, to] = route.split("-");
    reverseDistances[`${to}-${from}`] = distance;
  }
  return { ...distances, ...reverseDistances };
};

export default addReverseRoutes(cityDistances);
