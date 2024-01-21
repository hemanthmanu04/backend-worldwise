import express from "express";
import cors from "cors";

const app = express();
const port = 9001;

app.use(express.json());
app.use(
  cors({
    origin: ["https://worldwise-frontend.vercel.app"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true,
  })
);

const cities = [
  {
    "cityName": "Lisbon",
    "country": "Portugal",
    "emoji": "🇵🇹",
    "date": "2027-10-31T15:59:59.138Z",
    "notes": "My favorite city so far!",
    "position": { "lat": 38.727881642324164, "lng": -9.140900099907554 },
    "id": "73930385"
  },
  {
    "cityName": "Madrid",
    "country": "Spain",
    "emoji": "🇪🇸",
    "date": "2027-07-15T08:22:53.976Z",
    "notes": "",
    "position": { "lat": 40.46635901755316, "lng": -3.7133789062500004 },
    "id": "17806751"
  },
  {
    "cityName": "Berlin",
    "country": "Germany",
    "emoji": "🇩🇪",
    "date": "2027-02-12T09:24:11.863Z",
    "notes": "Amazing 😃",
    "position": { "lat": 52.53586782505711, "lng": 13.376933665713324 },
    "id": "98443197"
  },
  {
    "id": "9243",
    "cityName": "Hemel Hempstead",
    "country": "United Kingdom of Great Britain and Northern Ireland (the)",
    "emoji": "🇬🇧",
    "date": "2024-01-21T08:52:58.485Z",
    "notes": "",
    "position": { "lat": 51.781435604431195, "lng": "-0.5273437500000001" }
  },
  {
    "id": "7345",
    "cityName": "Shuanghu County",
    "country": "China",
    "emoji": "🇨🇳",
    "date": "2024-01-21T08:53:13.530Z",
    "notes": "",
    "position": { "lat": 32.54681317351517, "lng": "88.63769531250001" }
  }
];

app.get("/", (req, res) => {
  res.json("Welcome to the worldwise app!!");
});

app.get("/cities", (req, res) => {
  res.json(cities);
});

app.get("/cities/:id", (req, res) => {
  const cityId = req.params.id;
  const city = cities.find((c) => c.id === cityId);

  if (city) {
    res.json(city);
  } else {
    res.status(404).json({ error: "City not found" });
  }
});

app.post("/cities", (req, res) => {
  const newCity = req.body;
  cities.push(newCity);
  res.status(201).json(newCity);
});

app.delete("/cities/:id", (req, res) => {
  const cityId = req.params.id;
  const index = cities.findIndex((c) => c.id === cityId);

  if (index !== -1) {
    const deletedCity = cities.splice(index, 1);
    res.json({ message: "City deleted successfully", deletedCity });
  } else {
    res.status(404).json({ error: "City not found" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
