export const fetchData = (path, data = null, method = "POST", token = null) => {
  let url = `http://localhost:7851/api/${path}`;
  let body = method == "GET" ? null : JSON.stringify(data ? { ...data } : "");

  let content = {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: body,
  };

  // Additional for auth
  if (token) {
    content.headers = {
      ...content.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  //console.log({ url });

  return fetch(url, content)
    .then(async (result) => {
      // console.log(result);
      if (result.ok) {
        return result.json();
      }
      // let text = await result.text();
      // console.error(text);
      return Promise.resolve(null);
    })
    .then((parsed) => {
      //console.log({ parsed });
      return parsed ? parsed : { success: false };
    });
};
