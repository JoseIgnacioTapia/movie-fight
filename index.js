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

let timeoutId;
const onInput = (event) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    fetchData(event.target.value);
  }, 500);
};

input.addEventListener("input", onInput);
