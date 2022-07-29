// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { user, password } = req.body;
  if (user === 'test@test.com' && password === '123') {
    res.status(200).json({
      token: 'bnh5yzdirjinqaorq0ox1tf383nb3xr',
      profile: {
        id: 1,
        name: 'John',
        lastName: 'Doe',
        rol: ['ADMIN'],
      } })
  }
  else {
    res.status(401).json({ message: 'User or password not valid' })
  }
}
