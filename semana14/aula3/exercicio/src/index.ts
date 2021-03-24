import app from "./app";
import connection from "./connection";
import createActor from "./endpoints/createActor";
import getActorByGender from "./endpoints/getActorByGender";
import getActorById from "./endpoints/getActorById";
import getActorByName from "./endpoints/getActorByName";
import getAllActor from "./endpoints/getAllActors";
import updateActor from "./endpoints/updateActor";

app.get("/actor/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const results = await getActorByName(name);

    res.status(200).send(results);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Invalid Server Error");
  }
});
app.get("/actor/gender/:gender", async (req, res) => {
  try {
    const gender = req.params.gender;
    const results = await getActorByGender(gender);
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send("Invalid server error");
  }
});

app.get("/", getAllActor)

app.post("/actor", createActor);

app.put("/actor/:id", updateActor)
