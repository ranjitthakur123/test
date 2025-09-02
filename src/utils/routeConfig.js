
export const routesNeedingReload = [
  '/english-to-hindi-translation',
  '/english-to-marathi-translation', 
  '/english-to-tamil-translation',
  '/english-to-telugu-translation',
  '/english-to-kannada-translation',
  '/english-to-malayalam-translation',
  '/english-to-punjabi-transliteration',
  '/english-to-gujarati-transliteration', 
  '/english-to-bengali-transliteration',
  '/english-to-odia-transliteration',
  '/english-to-assamese-transliteration',
  '/english-to-urdu-transliteration',
  '/banking-finance-translation',
  '/ecommerce-translation',
  '/government-translation',
  '/direct-to-consumer-translation',
  '/chatbot',
  '/voice-bot',
  '/ocr',
  '/book-a-demo',
  '/website-translation',
  '/app-localization',
  '/translation-api',
  '/transliteration-api',
  '/document-translation'
];

// Generate language-based routes dynamically
const languages = ['hindi', 'marathi', 'tamil', 'telugu', 'kannada', 'malayalam', 'punjabi', 'gujarati', 'bengali', 'odia', 'assamese', 'urdu'];

export const generateLanguageRoutes = (type) => {
  return languages.map(lang => `/english-to-${lang}-${type}`);
};

export const allDynamicRoutes = [
  ...generateLanguageRoutes('translation'),
  ...generateLanguageRoutes('transliteration'),
  ...routesNeedingReload
];
