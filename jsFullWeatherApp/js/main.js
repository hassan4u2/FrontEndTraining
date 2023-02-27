async function getIPAddress() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const ipAddress = data.ip;
        return ipAddress;
    } catch (error) {
        console.error(error);
        return null;
    }
}

//   // Example usage
//   (async function() {
//     const ip = await getIPAddress();
//     console.log('Current IP address:', ip);
//   })();
