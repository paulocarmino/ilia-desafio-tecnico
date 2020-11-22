const app = ({ server }) => () => {
  const PORT = process.env.PORT || 3000

  server.listen(+PORT, '0.0.0.0')
}

export default app
