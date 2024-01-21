import express from "express";
const app = express();
const port = 9001; // Use the provided PORT or 9000 by default
import cors from "cors";

const cities = [
  {
    cityName: "Lisbon",
    country: "Portugal",
    emoji: "🇵🇹",
    date: "2027-10-31T15:59:59.138Z",
    notes: "My favorite city so far!",
    position: {
      lat: 38.727881642324164,
      lng: -9.140900099907554,
    },
    id: "73930385",
  },
  {
    cityName: "Madrid",
    country: "Spain",
    emoji: "🇪🇸",
    date: "2027-07-15T08:22:53.976Z",
    notes: "",
    position: {
      lat: 40.46635901755316,
      lng: -3.7133789062500004,
    },
    id: "17806751",
  },
  {
    cityName: "Berlin",
    country: "Germany",
    emoji: "🇩🇪",
    date: "2027-02-12T09:24:11.863Z",
    notes: "Amazing 😃",
    position: {
      lat: 52.53586782505711,
      lng: 13.376933665713324,
    },
    id: "98443197",
  },
  {
    cityName: "Nijar",
    country: "Spain",
    emoji: "🇪🇸",
    date: "2023-04-03T07:47:59.202Z",
    notes: "",
    position: {
      lat: "36.967508314568164",
      lng: "-2.13128394200588",
    },
    id: "98443198",
  },
  {
    id: "6bdb",
    cityName: "Chikmagalur",
    country: "India",
    emoji: "",
    date: "2024-01-14T18:03:12.353Z",
    notes: "",
    position: {
      lat: "13.539200668930816",
      lng: "75.73974609375001",
    },
  },
];

app.use(
  cors({
    origin: ["https://worldwise-frontend.vercel.app"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.json("Welcome to worldwise app!!");
});

app.get("/cities", (req, res) => {
  res.json(cities);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
