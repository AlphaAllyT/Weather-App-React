import React from "react";

// Use the VITE_API_URL environment variable - .env didnt work so i had to hardcode my URL  - "http://localhost:5000"
const API_URL = "https://weather-app-react-backend.onrender.com" ; 

export async function SendInputToServer(inputValue) {
  try {
    const res = await fetch(`${API_URL}/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inputValue }),
    });

    if (!res.ok) {
      throw new Error("Request failed");
    }

    const data = await res.json();
    console.log("API response:", data);
    return data;
  } catch (err) {
    console.error("API error:", err);
    return { error: err.message };
  }
}
