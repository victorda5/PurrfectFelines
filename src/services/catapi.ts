// https://thecatapi.com/

export const getCatBy = async ({ breed }: { breed: string }) => {
  const res = await fetch(
    `https://api.thecatapi.com/v1/breeds/${breed}/?api_key=live_C99hOix4TAiVvixtDB3hW3RRvie2yhQAhfvbPVWVeLH5Imy1vq3GnHcaIAi0rC8V&size=small`
  );

  const data = await res.json();
  return data;
};

export const getCatList = async () => {
  const res = await fetch(
    "https://api.thecatapi.com/v1/breeds/?api_key=live_C99hOix4TAiVvixtDB3hW3RRvie2yhQAhfvbPVWVeLH5Imy1vq3GnHcaIAi0rC8V&size=small"
  );

  const data = await res.json();
  return data;
};

export const displayCats = async () => {
  const res = await fetch(
    "https://api.thecatapi.com/v1/images/search?api_key=live_C99hOix4TAiVvixtDB3hW3RRvie2yhQAhfvbPVWVeLH5Imy1vq3GnHcaIAi0rC8V&limit=20&has_breeds=true&size=small"
  );

  const data = await res.json();
  return data;
};

//export const fetchBreeds = async () => {
  //const res = await fetch(`https://api.thecatapi.com/v1/images/search?api_key=live_C99hOix4TAiVvixtDB3hW3RRvie2yhQAhfvbPVWVeLH5Imy1vq3GnHcaIAi0rC8V&limit=42&has_breeds=true&size=small`, {
  //});

  //const data = await res.json();
  //return data;
//}

export const getCatImage = async ({ refId }: { refId: string }) => {
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/${refId}`
  );

  const data = await res.json();
  return data.url;
};

export const getCatByBreed = async ({ breedId }: { breedId: string }) => {
  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=16&breed_ids=${breedId}&api_key=live_C99hOix4TAiVvixtDB3hW3RRvie2yhQAhfvbPVWVeLH5Imy1vq3GnHcaIAi0rC8V`
  );

  const data = await res.json();
  return data;
};