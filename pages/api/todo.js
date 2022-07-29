// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const todo = [ 'work', 'sleep', 'eat'];
  setTimeout(() => {
    res.status(200).json(todo)
  }, 2000)
}
