import { defineBackend } from '@aws-amplify/backend';
import { sayHello } from './functions/say-hello/resource';
import { auth } from './auth/resource';
import { data } from './data/resource';

const backend = defineBackend({
  auth,
  data,
  sayHello,
});

const { cfnUserPool } = backend.auth.resources.cfnResources
cfnUserPool.userPoolAddOns = {
  advancedSecurityMode: "AUDIT"
};
cfnUserPool.mfaConfiguration = "ON",
cfnUserPool.enabledMfas = ['EMAIL_OTP']
