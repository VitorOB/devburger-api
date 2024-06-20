import app from './app';

const PORT = process.env.PORT || 3002; // Change to a different port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
