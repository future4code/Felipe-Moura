import app from "./app";
import connection from "./connection";

app.post("/actor", async (req, res) => {
  try {
    await connection.raw(`
        INSERT INTO Actor (id, name, gender, birth_date, salary) 
        VALUES(
            "${Date.now()}",
            "${req.body.name}",
            "${req.body.gender}",
            "${req.body.birthDate}",
            ${req.body.salary}
        );
    `);

    res.status(201).send("Created!");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/actor", async (req, res) => {
  try {
    // const result = await connection.raw(`SELECT * FROM Actor`);
    const actors = await connection("Actor");

    res.send(actors);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal Server Error");
  }
});

app.put("/actor/:id", async (req, res) => {
  try {
    await connection("Actor")
      .update({
        name: req.body.name,
        salary: req.body.salary,
        birth_date: req.body.birthDate,
        gender: req.body.gender
      })
      .where({ id: req.params.id });


      res.end()
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Internal server Error");
  }
});
