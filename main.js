const getTodos = async () => {
  await fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: document.getElementById("person_name").value,
      email: document.getElementById("person_email").value,
      password:
        document.getElementById("person_password") ===
        document.getElementById("person_password1")
          ? document.getElementById("person_password")
          : undefined,
    }),
  })
    .then((response) => response.json())
    .then((response) => console.log(JSON.stringify(response)));
};

getTodos()
  .then((data) => {
    console.log("resolved", data);
  })
  .catch((err) => {
    console.log(err);
  });
