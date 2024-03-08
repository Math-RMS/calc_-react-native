import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import SettingsPage from "../pages/SettingsPage";
import HomePage from "../pages/HomePage";
import Calc from "../pages/Calc";

const Tab = createBottomTabNavigator();

const AppRoute = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomePage} />
                <Tab.Screen name="Settings" component={SettingsPage} />
                <Tab.Screen name="Calc" component={Calc} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default AppRoute;