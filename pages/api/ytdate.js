import axios from 'axios'

const getData = async () => {
  const req = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${process.env.KEY}&channelId=${process.env.CHID}&part=snippet,id&order=date&maxResults=50`)
  const data = req.data
  return data
}

export default async (req, res) => {
  const data = await getData()
  res.status(200).json(data)
}