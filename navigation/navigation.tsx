import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../screens/Home/index";
import { CreateCampaignScreen } from "../screens/CreateCampaign/index";
import { CampaignScreen } from "../screens/Campaign/index";
import { CampaignDetailsScreen } from "../screens/CampaignDetails/index";

const StackNavigator = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          animation: "fade",
        }}
      >
        <StackNavigator.Screen name="HomeScreen" component={HomeScreen} />
        <StackNavigator.Screen
          name="CreateCampaignScreen"
          component={CreateCampaignScreen}
        />
        <StackNavigator.Screen
          name="CampaignScreen"
          component={CampaignScreen}
        />
        <StackNavigator.Screen
          name="CampaignDetailsScreen"
          component={CampaignDetailsScreen}
        />
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
