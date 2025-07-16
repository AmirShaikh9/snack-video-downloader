import axios from 'axios';

export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) return res.status(400).json({ error: 'No URL provided' });

  try {
    // Extract the video ID (assumed URL format)
    const idMatch = url.match(/video\/(\d+)/);
    if (!idMatch) return res.status(400).json({ error: 'Invalid SnackVideo URL format.' });
    const videoId = idMatch[1];

    // Placeholder for API or parsing logic (requires actual analysis of SnackVideo platform)
    const cleanVideoUrl = `https://cdn.snackvideo.fakecdn.com/videos/${videoId}_no_watermark.mp4`;

    return res.status(200).json({ videoUrl: cleanVideoUrl });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch video.' });
  }
}
