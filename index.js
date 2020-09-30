const fetchData = async (searchTeam) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "7d8680ff",
      s: searchTeam,
    },
  });

  return response.data.Search;
};

const input = document.querySelector("input");

const onInput = async (event) => {
  const movies = await fetchData(event.target.value);
  console.log(movies);
};

input.addEventListener("input", debounce(onInput, 500));
