import { defineAuth, secret } from '@aws-amplify/backend';
import AWS from 'aws-sdk';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */

const lambda = new AWS.Lambda();

async function sayhello() {
  const params = {
      FunctionName: 'sayhello', // 作成したLambda関数名
      Payload: JSON.stringify,
  };

  /*const response = await lambda.invoke(params).promise();
  //const result = JSON.parse(response);

  if (response.StatusCode !== 200 || !result.body) {
      throw new Error('Failed to fetch SAML provider settings');
  }
      */

  //return JSON.parse(result.body);
}

const samlSettings = await sayhello();
console.log(samlSettings);

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
   //カスタムドメイン
   //パスワードポリシー
   //Lambdaトリガー
   //アプリケーションクライアントの設定
   //EMAILの本文

},
  senders:{
    email: {
      fromEmail: "k.honda@seeds-std.co.jp"
    }
  },
  accountRecovery:"PHONE_WITHOUT_MFA_AND_EMAIL",  
});

