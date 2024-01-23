import { OneSignal } from "react-native-onesignal";

export function tagUserInfoCreate() {
  OneSignal.User.addTags({
    'user_name': 'Fernanda',
    'user_email': 'nandarabacal02@hotmail.com'
  })
}