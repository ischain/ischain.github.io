const baseUrl = process.env.NODE_ENV === "production" 
? 'https://ischain.github.io' 
: 'http://localhost:3000';

export default baseUrl;