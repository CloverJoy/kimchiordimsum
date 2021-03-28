// https://www.googleapis.com/youtube/v3/search?key={KEY}}&channelId={id}&part=snippet,id&order=viewCount&maxResults=50
import axios from 'axios'

const getData = async () => {
  const req = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?key=${process.env.KEYTWO}&playlistId=${process.env.PLID}&part=snippet&maxResults=50`)
  const data = req.data
  console.log('YT API CALLED FROM SERVER')
  return data
}

export default async (req, res) => {
  const data = await getData()
  res.status(200).json(data)
}