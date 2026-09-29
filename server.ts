import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Initialize Google GenAI if key is present
const ai = process.env.GEMINI_API_KEY
  ? new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    })
  : null;

// Travel Assistant Endpoint
app.post('/api/assistant', async (req, res) => {
  try {
    const { message, destination, preferences, history } = req.body;

    const systemPrompt = `You are the empathetic, expert travel companion of "Travel Chapter", a platform where "Every destination can become a beautiful chapter of your life."
Current Destination Context: ${destination ? JSON.stringify(destination) : 'World Destinations'}
User Travel Profile: ${preferences ? JSON.stringify(preferences) : 'Traveler exploring world'}

Guidelines:
1. Provide evocative, practical, culturally respectful advice.
2. Structure your answers with clear formatting (headings, bullet points, time of day suggestions when discussing itineraries).
3. Distinguish genuine local experiences from generic tourist traps.
4. When teaching phrases, provide the original script/word, english phonetic pronunciation, and cultural context.
5. If budget, days, or interests are mentioned, weave them naturally into actionable ideas.
6. Tone: Warm, insightful, inspiring, organized, and culturally sensitive.`;

    if (ai) {
      try {
        const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];

        // Add recent history if available
        if (Array.isArray(history) && history.length > 0) {
          history.slice(-6).forEach((h: { sender: string; text: string }) => {
            contents.push({
              role: h.sender === 'user' ? 'user' : 'model',
              parts: [{ text: h.text }],
            });
          });
        }

        contents.push({
          role: 'user',
          parts: [{ text: message }],
        });

        let responseText = '';
        try {
          const timeoutPromise = new Promise<never>((_, reject) =>
            setTimeout(() => reject(new Error('AI response timeout')), 10000)
          );

          const response = await Promise.race([
            ai.models.generateContent({
              model: 'gemini-2.5-flash',
              contents,
              config: {
                systemInstruction: systemPrompt,
                temperature: 0.7,
              },
            }),
            timeoutPromise,
          ]);

          if (response?.text) {
            responseText = response.text;
          }
        } catch (firstErr) {
          console.warn('Primary model error, attempting secondary model:', firstErr);
          try {
            const fallbackResponse = await ai.models.generateContent({
              model: 'gemini-2.5-flash-lite',
              contents,
              config: {
                systemInstruction: systemPrompt,
                temperature: 0.7,
              },
            });
            if (fallbackResponse?.text) {
              responseText = fallbackResponse.text;
            }
          } catch (secondErr) {
            console.warn('Both model calls failed or exceeded quota; using rich contextual travel engine:', secondErr);
          }
        }

        if (responseText) {
          return res.json({ reply: responseText });
        }
      } catch (geminiErr) {
        console.warn('Gemini API call encountered an issue; falling back gracefully:', geminiErr);
      }
    }

    // High quality contextual fallback if Gemini is offline
    const destName = destination?.name || 'this wondrous destination';
    let fallbackReply = `Here is your personalized guidance for **${destName}**:\n\n`;

    const lower = (message || '').toLowerCase();
    if (lower.includes('tirupati') || lower.includes('tirumala') || lower.includes('darshan') || lower.includes('laddu')) {
      fallbackReply += `### Sacred Pilgrimage Guide for Tirumala & Tirupati
- **Sri Venkateswara Swamy Darshan**: Book the **₹300 Special Entry Darshan (SED)** online in advance via the official TTD portal (\`ttdevasthanams.ap.gov.in\`) or use Sarva Darshan tokens at foothill counters (Alipiri/Srinivasam).
- **Sacred Srivari Laddu Prasadam**: Every SED ticket includes a complimentary consecrated laddu; additional laddus can be purchased at the computerized laddu complex with token barcode.
- **Strict Dress Code**: Men must wear traditional Dhoti (white) with Angavastram or Kurta-Pyjama. Women must wear Saree, Half-saree, or Churidar with Dupatta. Western clothes, jeans, and shorts are not permitted inside the sanctum.
- **Footpath Trails**: For a spiritually transformative experience, climb either the **Alipiri Footpath** (3,550 steps, ~3.5 hours) or **Srivari Mettu** (2,388 steps, ~2 hours). Free luggage transport to the hill top is provided by TTD.
- **Geological Wonder**: Don't miss **Silathoranam**, a natural 2.5-billion-year-old rock arch located 1 km from the main temple.`;
    } else if (lower.includes('book') || lower.includes('ticket') || lower.includes('hotel') || lower.includes('reserve')) {
      fallbackReply += `### Booking & Reservation Support
- **Autonomous E-Tickets & Stays**: You can book accommodations, transit tickets, and experience entry passes directly on **Travel Chapter**!
- **Instant Voucher Generation**: Once you select an accommodation or ticket, choose your room/seat tier and confirm with credit card, UPI, or "Pay at Property".
- **Print & Boarding Passes**: Your official voucher is generated with a dedicated Booking Reference (\`TC-...\`), PNR code, and scan QR code, and saved to your **"My Trip"** dashboard.`;
    } else if (lower.includes('phrase') || lower.includes('language') || lower.includes('words')) {
      fallbackReply += `### Essential Phrases for ${destName}
- **Hello / Greetings**: Friendly everyday greeting used with a smile.
- **Thank you very much**: Showing gratitude opens doors with locals.
- **Please / Excuse me**: Polite way to ask for assistance or navigate crowded bazaars and transport.
- **How much is this?**: Useful for open-air markets and artisanal stalls.
- **Where is...?**: Great for finding historic monuments and hidden alleyways.
- **Delicious!**: Complimenting the cook or street vendor brings huge smiles!

*Tip:* Polite body language and a warm greeting before asking questions is appreciated everywhere.`;
    } else if (lower.includes('1 day') || lower.includes('one day')) {
      fallbackReply += `### Curated 1-Day Chapter in ${destName}
- **Morning (8:30 AM - 12:00 PM)**: Start early at the prime cultural or sacred icon while the morning light is serene. Enjoy a traditional local breakfast at a beloved heritage café.
- **Afternoon (12:30 PM - 4:30 PM)**: Explore an authentic neighborhood market or historic district on foot. Sample authentic local specialities for lunch.
- **Evening (5:30 PM - 8:30 PM)**: Head to a scenic lookout or waterfront promenade for golden hour. Conclude with dinner at a regional restaurant celebrating local recipes.`;
    } else if (lower.includes('budget') || lower.includes('low budget') || lower.includes('cheap')) {
      fallbackReply += `### Budget-Smart Travel Chapter in ${destName}
- **Transportation**: Use the local metro/bus network or scenic walking routes; day passes offer fantastic value.
- **Dining**: Eat where local families and working people eat. Street food hubs and local canteens offer the freshest, most authentic flavors for a fraction of tourist restaurant prices.
- **Attractions**: Many sacred sites, public gardens, coastal walks, and architectural viewpoints are free or very low cost. Look out for free museum admission days.`;
    } else {
      fallbackReply += `To make your chapter in **${destName}** unforgettable:
1. **Pace Yourself**: Allow at least 2 hours of unscheduled discovery each day to wander backstreets, sip tea or coffee at local stalls, and watch daily life unfold.
2. **Local Flavors**: Try the signature dishes recommended by neighborhood vendors rather than international hotel menus.
3. **Respect & Etiquette**: Dress modestly when visiting spiritual sites, remove footwear where requested, and always ask permission before taking close-up portraits of people.
4. **Golden Hours**: Early mornings and late afternoons offer the best photography lighting and cooler temperatures.`;
    }

    return res.json({ reply: fallbackReply });
  } catch (error: any) {
    console.error('Assistant error:', error);
    res.status(500).json({ error: error.message || 'Failed to process assistant request' });
  }
});

// Dynamic AI Itinerary Customizer Endpoint
app.post('/api/generate-itinerary', async (req, res) => {
  try {
    const { destination, days, budget, interests, groupType, travelStyle, accommodation, transport } = req.body;

    if (ai) {
      const prompt = `Generate a personalized ${days || 3}-day travel chapter for ${destination?.name || 'the destination'}.
Traveler details:
- Group: ${groupType || 'Solo traveler'}
- Budget Level: ${budget || 'Moderate'}
- Style/Theme: ${travelStyle || 'Discovery'}
- Key Interests: ${(interests || []).join(', ') || 'Culture, Food, History'}
- Accommodation Preference: ${accommodation || 'Boutique Hotel'}
- Transit: ${transport || 'Mixed/Walking'}

Return a JSON array of day objects. Each day object must contain:
{
  "day": number,
  "theme": "Creative title for the day",
  "morning": { "time": "9:00 AM", "title": "Place/Activity", "description": "Engaging description", "cost": "Estimated cost", "highlight": "Key tip" },
  "afternoon": { "time": "1:00 PM", "title": "Place/Activity", "description": "Engaging description", "cost": "Estimated cost", "highlight": "Key tip" },
  "evening": { "time": "6:00 PM", "title": "Place/Activity", "description": "Engaging description", "cost": "Estimated cost", "highlight": "Key tip" },
  "localFoodTip": "What to eat today",
  "culturalNote": "Insightful etiquette or local lore"
}
Return ONLY valid JSON matching this schema.`;

      try {
        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: prompt,
          config: {
            responseMimeType: 'application/json',
            temperature: 0.6,
          },
        });

        const parsed = JSON.parse(response.text || '[]');
        if (Array.isArray(parsed) && parsed.length > 0) {
          return res.json({ itinerary: parsed });
        }
      } catch (genErr) {
        console.warn('Itinerary AI model quota or error, returning fallback signal:', genErr);
      }
    }

    res.json({ itinerary: null });
  } catch (err: any) {
    console.error('Itinerary generator error:', err);
    res.json({ itinerary: null });
  }
});

// Vite or Static serving
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, 'dist')));
  app.get('*', (_req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
} else {
  const { createServer: createViteServer } = await import('vite');
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });
  app.use(vite.middlewares);
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Travel Chapter server listening on http://0.0.0.0:${PORT}`);
});
