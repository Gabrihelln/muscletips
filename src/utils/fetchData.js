export const exercisesOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '79a0715322msh27d10e6bfebcb4cp19a31ejsn15b51d2ebe1f',
      'X-RapidAPI-Host': 'work-out-api1.p.rapidapi.com'
    }
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}