import React from "react";

// Use the VITE_API_URL environment variable - didnt work so i had to hardcode my URL  - "https://weather-app-react-backend.onrender.com"
const API_URL = import.meta.env.VITE_API_URL; 

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
