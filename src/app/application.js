const PORT = process.env.PORT || 3000;

const app = ({ server }) => async () => {
  await server.listen(+PORT, '0.0.0.0');
};

export default app;
