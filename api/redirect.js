
  export default function handler(req, res) {
    const destinationURL = "https://gund.com/collections/bears/products/jumbo-philbin";
    const fallbackURL = "https://rwrds.wiki";
  
    const queryParams = new URLSearchParams(req.url.split('?')[1]);
    const hasUtmParameter = Array.from(queryParams.keys()).some(key => key.startsWith('utm_'));
    
    const userAgent = req.headers['user-agent'] || '';
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
    
    if (!hasUtmParameter || !isMobileDevice) {
        res.writeHead(302, { Location: fallbackURL });
    } else {
        res.writeHead(302, { Location: destinationURL });
    }
    
    res.end();
}