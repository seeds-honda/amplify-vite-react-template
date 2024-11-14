import { defineAuth, secret } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    externalProviders: {
      google: {
        clientId: secret('GOOGLE_CLIENT_ID'),
        clientSecret: secret('GOOGLE_CLIENT_SECRET'),        
        attributeMapping: {
          email: 'email'
        }
      },
      callbackUrls: [
        'http://localhost:3000/profile',
        'https://mywebsite.com/profile'
      ],
      logoutUrls: ['http://localhost:3000/', 'https://mywebsite.com'],
  },
  email: true,
},
  senders:{
    email: {
      fromEmail: "k.honda@seeds-std.co.jp"
    }
  },
  accountRecovery:"PHONE_WITHOUT_MFA_AND_EMAIL",  
});
