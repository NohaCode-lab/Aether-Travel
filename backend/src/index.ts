import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Initialize OpenAI securely on backend server only
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'mock-api-key',
});

// Mock in-memory database fallback when PostgreSQL is not running
const destinations = [
  {
    id: 'dest-1',
    name: 'Kyoto',
    country: 'Japan',
    description: 'Ancient temples, sublime gardens, and traditional tea houses.',
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
    pricePerNight: 180,
    rating: 4.9,
    tags: ['Culture', 'Historic', 'Nature'],
  },
  {
    id: 'dest-2',
    name: 'Santorini',
    country: 'Greece',
    description: 'Iconic whitewashed buildings overlooking deep blue Aegean Aegean sea.',
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
    pricePerNight: 240,
    rating: 4.8,
    tags: ['Island', 'Romance', 'Views'],
  },
  {
    id: 'dest-3',
    name: 'Munich',
    country: 'Germany',
    description: 'Bavarian charm, rich history, magnificent palaces, and lively beer gardens.',
    imageUrl: 'https://images.unsplash.com/photo-1595867818082-083862f3d630?w=800&q=80',
    pricePerNight: 160,
    rating: 4.7,
    tags: ['City', 'Beer', 'Castles'],
  },
];

const bookings: any[] = [];

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'ok', service: 'Aether-Travel Backend API', timestamp: new Date() });
});

// Destinations API
app.get('/api/destinations', (req: Request, res: Response) => {
  res.json({ success: true, data: destinations });
});

// Bookings API
app.post('/api/bookings', (req: Request, res: Response) => {
  const { destinationId, startDate, endDate, guests } = req.body;
  const newBooking = {
    id: `bk-${Date.now()}`,
    destinationId,
    startDate,
    endDate,
    guests: guests || 1,
    status: 'CONFIRMED',
    createdAt: new Date(),
  };
  bookings.push(newBooking);
  res.status(201).json({ success: true, data: newBooking });
});

app.get('/api/bookings', (req: Request, res: Response) => {
  res.json({ success: true, data: bookings });
});

// Secure Backend AI Proxy Endpoint
app.post('/api/ai/chat', async (req: Request, res: Response) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid messages array' });
    }

    if (process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY !== 'mock-api-key') {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are Aether-Travel AI Concierge, a helpful and knowledgeable SaaS travel architect.',
          },
          ...messages,
        ],
      });
      return res.json({ reply: response.choices[0].message.content });
    }

    // Fallback AI response if API key is not configured
    const userPrompt = messages[messages.length - 1]?.content || 'travel';
    res.json({
      reply: `[Aether AI Concierge] Here is your custom travel advice for "${userPrompt}": We suggest 4-5 days exploring city landmarks, visiting top rated restaurants, and enjoying curated day trips!`,
    });
  } catch (error: any) {
    console.error('AI Proxy Error:', error);
    res.status(500).json({ error: 'AI Concierge service error', details: error.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Aether-Travel Backend API listening on http://localhost:${PORT}`);
});
