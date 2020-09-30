const fetchData = async (searchTeam) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "7d8680ff",
      s: searchTeam,
    },
  });

  console.log(response.data);
};

const input = document.querySelector("input");

const onInput = (event) => {
  fetchData(event.target.value);
};

input.addEventListener("input", debounce(onInput, 500));
