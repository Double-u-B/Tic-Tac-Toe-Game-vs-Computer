const url = "https://randomuser.me/api/";

export const getPlayer = async () => {
  const response = await fetch(url);
  const data = await response.json();

  const playerData = data.results[0];
  const {
    name: { first: playerName },
    picture: { large: image },
  } = playerData;

  const player = { name: playerName, img: image };

  return player;
};
