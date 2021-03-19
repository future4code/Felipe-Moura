import express, { Request, Response } from "express";
import cors from "cors";
import { countries } from "./countries";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/countries/all", (req: Request, res: Response) => {
  res.status(201).send(countries);
});

app.get("/countries/search", (req: Request, res: Response) => {
  const country: string = req.query.country as string;
  const myCountries = countries;
  const filteredCountries = myCountries.filter((ct) => {
    return ct.name.includes(country);
  });

  if(filteredCountries.length){

      res.status(200).send(filteredCountries);
  }else{
      res.status(404).send('Not Found')
  }



});

app.get("/countries/:id", (req: Request, res: Response) => {
  const id: number = Number(req.params.id);
  const country = countries.find((ct) => {
    return ct.id === id;
  });
  res.status(200).send(country);
});

app.delete("/countries/:id"), ((req: Request, res: Response) =>{
    
    try {
        const authorization = req.headers.authorization
        if(!authorization){
            throw new Error('Please fill the field, Invalid Authorization')
        }

        const id = req.params.id
        if(isNaN(Number(id))){
            throw new Error('Please fill the field, Invalid Authorization')
        }
        res.status(200).send('SUCESSO')
    } catch (error) {
        res.status(400).send(error.message)
    }
})

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
