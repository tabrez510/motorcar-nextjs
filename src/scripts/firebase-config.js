require('dotenv').config({ path: '.env.local' })
const fs = require('fs')
const path = require('path')

const templatePath = path.join(__dirname, '../../public/firebase-config.template.js')
const outPath      = path.join(__dirname, '../../public/firebase-config.js')

const configTemplate = fs.readFileSync(templatePath, 'utf8')

const output = configTemplate
  .replace('__API_KEY__', process.env.NEXT_PUBLIC_FIREBASE_API_KEY)
  .replace('__AUTH_DOMAIN__', process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN)
  .replace('__PROJECT_ID__', process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID)
  .replace('__MESSAGING_SENDER_ID__', process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID)
  .replace('__APP_ID__', process.env.NEXT_PUBLIC_FIREBASE_APP_ID)

fs.writeFileSync(outPath, output)
console.log('✅ firebase-config.js generated successfully')
