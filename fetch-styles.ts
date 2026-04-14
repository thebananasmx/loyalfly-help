import https from 'https';

https.get('https://www.loyalfly.com.mx/', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const jsLinks = data.match(/src="([^"]+\.js[^"]*)"/g);
    console.log('JS Links:', jsLinks);
    
    if (jsLinks) {
      jsLinks.forEach(linkMatch => {
        let url = linkMatch.replace('src="', '').replace('"', '');
        if (url.startsWith('/')) {
          url = 'https://www.loyalfly.com.mx' + url;
        }
        console.log('Fetching JS:', url);
        https.get(url, (jsRes) => {
          let jsData = '';
          jsRes.on('data', (c) => jsData += c);
          jsRes.on('end', () => {
            const hexColors = jsData.match(/#[0-9a-fA-F]{6}\b/g);
            if (hexColors) {
              const uniqueColors = [...new Set(hexColors)];
              console.log(`Colors in ${url}:`, uniqueColors.slice(0, 20));
            }
          });
        });
      });
    }
  });
});
