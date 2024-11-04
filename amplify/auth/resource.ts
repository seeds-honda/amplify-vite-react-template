import { defineAuth } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  senders:{
    email: {
      fromEmail: "k.honda@seeds-std.co.jp"
    }
  },
  accountRecovery:"PHONE_WITHOUT_MFA_AND_EMAIL",  
});
