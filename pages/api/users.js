// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {
  const response = await axios.get('https://reqres.in/api/users?page=1');
  const users = response.data.data;

  setTimeout(() => {
    res.status(200).json(users)
  }, 2000)
}
