const globalSetup = async () => {
  process.env.backgroundColors = JSON.stringify(['#F5F8FA']);
  console.log('GLOBAL SETUP RAN', process.env.backgroundColors);

  if (!process.env.PLAYWRIGHT_BASE_URL) {
    process.env.PLAYWRIGHT_BASE_URL = 'http://localhost:6006';
  }
};

export default globalSetup;
