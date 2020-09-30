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

const debounce = (func, delay = 1000) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};

const onInput = (event) => {
  fetchData(event.target.value);
};

input.addEventListener("input", debounce(onInput, 500));
