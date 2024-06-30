const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

const API_KEY = "ggONZebDvHTza9V2_tZ0i0_9at0rVNlK2vnRsOIoQ5LT";
const SCORING_URL = "https://us-south.ml.cloud.ibm.com/ml/v4/deployments/dataset/predictions?version=2021-05-01";

app.use(cors());
app.use(express.json());

app.post('/api/token', async (req, res) => {
  try {
    const response = await axios.post('https://iam.cloud.ibm.com/identity/token', `grant_type=urn:ibm:params:oauth:grant-type:apikey&apikey=${API_KEY}`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json'
      }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/predict', async (req, res) => {
  try {
    const { token, payload } = req.body;
    const response = await axios.post(SCORING_URL, payload, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
