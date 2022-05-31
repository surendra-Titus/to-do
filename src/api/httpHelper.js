
export const GET = (url) => {
  return fetch(url)
    .then((res) => {
      res.ok 
        ? console.log("GET Successful") 
        : console.log("GET UnSuccessful");
      return res;
    })
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
};

export const POST = (url, data) => {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      res.ok
        ? console.log("POST Successful")
        : console.log("POST UnSuccessful");
    })
    .then((response) => response)
    .then((data) => data)
    .catch((err) => err);
};

export const PUT = (url, data) => {
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        res.ok
          ? console.log("PUT Successful")
          : console.log("PUT UnSuccessful");
      })
      .then((response) => response)
      .then((data) => data)
      .catch((err) => err);
  };

  export const DELETE = (url, id) => {
    fetch(url + '/' + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.ok
          ? console.log("DELETE Successful")
          : console.log("DELETE UnSuccessful");
      })
      .then((response) => response)
      .then((data) => data)
      .catch((err) => err);
  };