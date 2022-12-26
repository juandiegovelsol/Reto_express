const express = require("express");
const app = express();
const port = 8080;
const endPoint = "/my-first-endpoint";
app.get(endPoint, (req, res) => {
  res.statusMessage = "Curso encontrado satisfactoriamente";
  res.status(200).json({
    top: {
      version_top: 26,
      students: 10,
      names: [
        "Felipe",
        "Laura",
        "Jailer",
        "Jaime",
        "Juan",
        "Andrés",
        "Nicolas",
        "Carlos",
        "Ivan",
        "Diana",
      ],
    },
  });
});

app.listen(port, () => {
  console.log(`Listening on ${port}, endpoint ${endPoint}`);
});
