# Frontend - Country Explorer Dashboard

## Country Explorer Dashboard

A modern, responsive React dashboard for exploring countries around the world. Users can view country details, filter by region and population, search with debouncing, mark favorites.

Built with **React**, **Tailwind CSS**, and **React Router DOM**,

---

## Features

- **Country List:** Displays all countries in a responsive grid.
- **Country Details:** View detailed information including flag, capital, population, area, timezones, and more.
- **Favorites:** Add and remove countries to a favorites list.
- **Filters:** Filter countries by region and population.
- **Search:** Search countries with debouncing to reduce unnecessary API calls.
- **Pagination:** View countries with pagination for better UX, (frontend pagination).
- **Dark Mode:** Toggle between light and dark themes.
- **Responsive Design:** Works on mobile, tablet, and desktop.

---


# Backend

   used express framework to build a REST API for the backend.

1. **List of countries** - Fetch country data  
   Endpoint: `https://localhost:3000/api/countries`  

2. **Get Country Details** - Fetch country details .
   Endpoint: `https://localhost:3000/api/countries/code/{ccn2}`  

3. **Search Country By name** - Search country by name .
   Endpoint: `https://localhost:3000/api/countries/{name}`
4. **Get Countries By Region** -
   Endpoint: `https://localhost:3000/api/countries/region/{name}`

---

## Setup & Installation

1. **Clone the repository**

```bash
git clone https://github.com/abidta/country-dashboard.git

cd country-explorer-dashboard

cd server
Install dependencies

npm install

Create .env file

Copy .env.example to .env and add environment variables.

Start the server

npm run dev

cd ../webapp

Install dependencies

npm install


Create .env file

Copy .env.example to .env and add your environment variables


Start the development server

npm run dev


Open the app

Navigate to http://localhost:5173

```
