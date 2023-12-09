async function getIPAddress() {
  try {
    const response = await fetch('https://api64.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error('Error fetching IP address:', error);
    return null;
  }
}

function getStoredIPAddress() {
  const cookies = document.cookie.split(';');
  for (const cookie of cookies) {
    const [name, value] = cookie.split('=').map((c) => c.trim());
    if (name === 'userIP') {
      return value;
    }
  }
  return null;
}

function setIPAddressCookie(ipAddress) {
  document.cookie = `userIP=${ipAddress}; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/`;
}

async function trackUserIP() {
  const storedIPAddress = getStoredIPAddress();

  if (storedIPAddress) {
    console.log('User IP address from cookie:', storedIPAddress);
  } else {
    const ipAddress = await getIPAddress();

    if (ipAddress) {
      setIPAddressCookie(ipAddress);
      console.log('User IP address stored in cookie:', ipAddress);
    } else {
      console.log('Unable to retrieve user IP address.');
    }
  }
}

trackUserIP();
