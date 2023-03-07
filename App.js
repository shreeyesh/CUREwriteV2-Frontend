const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SPLASH from "./screens/SPLASH";
import ADDQUESTION from "./screens/ADDQUESTION";
import ONBOARDING from "./screens/ONBOARDING";
import LEADERBOARDGLOBAL from "./screens/LEADERBOARDGLOBAL";
import LEADERBOARDFRIENDS from "./screens/LEADERBOARDFRIENDS";
import HOWITWORK from "./screens/HOWITWORK";
import QUESTIONSUBMITTED from "./screens/QUESTIONSUBMITTED";
import PAPERSUBMITTED from "./screens/PAPERSUBMITTED";
import ADDRESEARCH from "./screens/ADDRESEARCH";
import HOMEPAGERESEARCHBUYNOW from "./screens/HOMEPAGERESEARCHBUYNOW";
import HOMEPAGERESEARCHBUYNOW1 from "./screens/HOMEPAGERESEARCHBUYNOW1";
import HOMEPAGEQUESTIONCOMMENTS from "./screens/HOMEPAGEQUESTIONCOMMENTS";
import HOMEPAGEPOSTCOMMENTS from "./screens/HOMEPAGEPOSTCOMMENTS";
import HOMEPAGEPOST from "./screens/HOMEPAGEPOST";
import HOMEPAGEQUESTION from "./screens/HOMEPAGEQUESTION";
import HOMEPAGERESEARCH from "./screens/HOMEPAGERESEARCH";
import REELADDED from "./screens/REELADDED";
import ADDLEARN from "./screens/ADDLEARN";
import POSTSUCCESS from "./screens/POSTSUCCESS";
import ADDPOST from "./screens/ADDPOST";
import LEADERBOARDNATIONAL from "./screens/LEADERBOARDNATIONAL";
import PROFILELIFESTYLE from "./screens/PROFILELIFESTYLE";
import NOTIFICATION1 from "./screens/NOTIFICATION1";
import HOMEPAGELEARN from "./screens/HOMEPAGELEARN";
import SIGNUP from "./screens/SIGNUP";
import VERIFICATION from "./screens/VERIFICATION";
import WELCOME from "./screens/WELCOME";
import FORGOTPASSWORD from "./screens/FORGOTPASSWORD";
import SIGNIN from "./screens/SIGNIN";
import PASSWORDRESET from "./screens/PASSWORDRESET";
import WELCOME1 from "./screens/WELCOME1";
import PERSONALINFORMATION from "./screens/PERSONALINFORMATION";
import PERSONALINFORMATION1 from "./screens/PERSONALINFORMATION1";
import VERIFICATION1 from "./screens/VERIFICATION1";
import PROFILEPUBLICATION from "./screens/PROFILEPUBLICATION";
import PROFILEPUBLICATION1 from "./screens/PROFILEPUBLICATION1";
import SIGNUP1 from "./screens/SIGNUP1";
import Button1 from "./screens/Button1";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import {
  GestureHandlerRootView,
  RectButton,
} from "react-native-gesture-handler";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    "Readex Pro": require("./assets/fonts/Readex_Pro.ttf"),
    "Readex Pro_regular": require("./assets/fonts/Readex_Pro_regular.ttf"),
    "Readex Pro_bold": require("./assets/fonts/Readex_Pro_bold.ttf"),
    Poppins: require("./assets/fonts/Poppins.ttf"),
    Poppins_light: require("./assets/fonts/Poppins_light.ttf"),
    Poppins_regular: require("./assets/fonts/Poppins_regular.ttf"),
    Poppins_medium: require("./assets/fonts/Poppins_medium.ttf"),
    Poppins_semibold: require("./assets/fonts/Poppins_semibold.ttf"),
    Poppins_bold: require("./assets/fonts/Poppins_bold.ttf"),
    Poppins_medium_italic: require("./assets/fonts/Poppins_medium_italic.ttf"),
    Roboto: require("./assets/fonts/Roboto.ttf"),
    Roboto_light: require("./assets/fonts/Roboto_light.ttf"),
    Roboto_medium: require("./assets/fonts/Roboto_medium.ttf"),
    Nunito: require("./assets/fonts/Nunito.ttf"),
    Nunito_regular: require("./assets/fonts/Nunito_regular.ttf"),
    Nunito_semibold: require("./assets/fonts/Nunito_semibold.ttf"),
    Nunito_bold: require("./assets/fonts/Nunito_bold.ttf"),
    Nunito_extrabold: require("./assets/fonts/Nunito_extrabold.ttf"),
    "Nunito Sans": require("./assets/fonts/Nunito_Sans.ttf"),
    "Nunito Sans_regular": require("./assets/fonts/Nunito_Sans_regular.ttf"),
    "Nunito Sans_semibold": require("./assets/fonts/Nunito_Sans_semibold.ttf"),
    "Nunito Sans_bold": require("./assets/fonts/Nunito_Sans_bold.ttf"),
    "Nunito Sans_extrabold": require("./assets/fonts/Nunito_Sans_extrabold.ttf"),
    "Nunito Sans_black": require("./assets/fonts/Nunito_Sans_black.ttf"),
    "Roboto Mono": require("./assets/fonts/Roboto_Mono.ttf"),
    "Roboto Mono_bold": require("./assets/fonts/Roboto_Mono_bold.ttf"),
    Outfit: require("./assets/fonts/Outfit.ttf"),
    Outfit_regular: require("./assets/fonts/Outfit_regular.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            {hideSplashScreen ? (
              <Stack.Navigator
                initialRouteName="SPLASH"
                screenOptions={{ headerShown: false }}
              >
                <Stack.Screen
                  name="SPLASH"
                  component={SPLASH}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ADDQUESTION"
                  component={ADDQUESTION}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ONBOARDING"
                  component={ONBOARDING}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="LEADERBOARDGLOBAL"
                  component={LEADERBOARDGLOBAL}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="LEADERBOARDFRIENDS"
                  component={LEADERBOARDFRIENDS}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="HOWITWORK"
                  component={HOWITWORK}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="QUESTIONSUBMITTED"
                  component={QUESTIONSUBMITTED}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="PAPERSUBMITTED"
                  component={PAPERSUBMITTED}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ADDRESEARCH"
                  component={ADDRESEARCH}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="HOMEPAGERESEARCHBUYNOW"
                  component={HOMEPAGERESEARCHBUYNOW}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="HOMEPAGERESEARCHBUYNOW1"
                  component={HOMEPAGERESEARCHBUYNOW1}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="HOMEPAGEQUESTIONCOMMENTS"
                  component={HOMEPAGEQUESTIONCOMMENTS}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="HOMEPAGEPOSTCOMMENTS"
                  component={HOMEPAGEPOSTCOMMENTS}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="HOMEPAGEPOST"
                  component={HOMEPAGEPOST}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="HOMEPAGEQUESTION"
                  component={HOMEPAGEQUESTION}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="HOMEPAGERESEARCH"
                  component={HOMEPAGERESEARCH}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="REELADDED"
                  component={REELADDED}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ADDLEARN"
                  component={ADDLEARN}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="POSTSUCCESS"
                  component={POSTSUCCESS}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="ADDPOST"
                  component={ADDPOST}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="LEADERBOARDNATIONAL"
                  component={LEADERBOARDNATIONAL}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="PROFILELIFESTYLE"
                  component={PROFILELIFESTYLE}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="NOTIFICATION"
                  component={NOTIFICATION1}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="HOMEPAGELEARN"
                  component={HOMEPAGELEARN}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="SIGNUP"
                  component={SIGNUP}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="VERIFICATION"
                  component={VERIFICATION}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="WELCOME"
                  component={WELCOME}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="FORGOTPASSWORD"
                  component={FORGOTPASSWORD}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="SIGNIN"
                  component={SIGNIN}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="PASSWORDRESET"
                  component={PASSWORDRESET}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="WELCOME1"
                  component={WELCOME1}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="PERSONALINFORMATION"
                  component={PERSONALINFORMATION}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="PERSONALINFORMATION1"
                  component={PERSONALINFORMATION1}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="VERIFICATION1"
                  component={VERIFICATION1}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="PROFILEPUBLICATION"
                  component={PROFILEPUBLICATION}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="PROFILEPUBLICATION1"
                  component={PROFILEPUBLICATION1}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="SIGNUP1"
                  component={SIGNUP1}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="Button"
                  component={Button1}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            ) : (
              <SPLASH />
            )}
          </NavigationContainer>
        </GestureHandlerRootView>
      </ApplicationProvider>
    </>
  );
};
export default App;
