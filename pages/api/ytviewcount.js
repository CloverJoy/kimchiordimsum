// https://www.googleapis.com/youtube/v3/search?key={KEY}}&channelId={id}&part=snippet,id&order=viewCount&maxResults=50
import axios from 'axios'

const getData = async () => {
  const req = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${process.env.KEYTWO}&channelId=${process.env.CHID}&part=snippet,id&order=viewCount&maxResults=20`)
  const data = req.data
  return data
}

export default async (req, res) => {
  const data = await getData()
  res.status(200).json(data)
}