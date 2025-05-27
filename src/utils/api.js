import axios from 'axios';

const apiKey = "AIzaSyBNbQoZs6Fn-zCXl_BxBKTX6Q_5bf5GeFw"; // Simpan API key di tempat yang aman (gunakan .env pada pengembangan lebih lanjut)
const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;

export const sendMessage = async (message) => {
  try {
    const response = await axios.post(apiUrl, {
      contents: [{
        parts: [{
          text: message,
        }],
      }],
    });
      if(response.status === 200){
        return response.data.candidates[0].content.parts[0].text
      }
        throw new Error(`HTTP error! status: ${response.status}`);

  } catch (error) {
    console.error("Error fetching API:", error);
    throw error; // Melempar error agar bisa ditangani di komponen
  }
};
