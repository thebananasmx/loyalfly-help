import https from 'https';

https.get('https://www.loyalfly.com.mx/docs/flujos', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log(data.substring(0, 2000));
  });
});
