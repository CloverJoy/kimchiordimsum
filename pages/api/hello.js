// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios'

const getData = async () => {
  const req = await axios.get('https://api.jikan.moe/v3/season/later')
  const data = req.data
  return data
}

export default async (req, res) => {
  const data = await getData()
  res.status(200).json(data)
}
