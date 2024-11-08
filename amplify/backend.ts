import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

const backend = defineBackend({
  auth,
  data,
});

const { cfnUserPool } = backend.auth.resources.cfnResources
cfnUserPool.userPoolAddOns = {
  advancedSecurityMode: "AUDIT"
};
cfnUserPool.mfaConfiguration = "ON",
cfnUserPool.enabledMfas = ['EMAIL_OTP']
