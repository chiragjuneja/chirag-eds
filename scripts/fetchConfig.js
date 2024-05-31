let config = null;

export const fetchConfig = async () => {
  if (config) {
    return config; // Return the cached config if it's already been fetched
  }

  let currentUrl = window.location.href;
  const url = new URL(currentUrl);

  // If there are query parameters, strip them
  if (url.search) {
    currentUrl = url.origin + url.pathname;
  }

  const configUrl = new URL('/config.json', currentUrl).href;

  try {
    const response = await fetch(configUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    config = await response.json();
    console.log('Fetched Config:', config);
    return config;
  } catch (err) {
    console.error('Error fetching config:', err);
    throw err;
  }
};
