import { Tabs } from "expo-router";
import { AntDesign, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

export default function Layout() {
    return(
        <Tabs>
            <Tabs.Screen 
                name="home" 
                options={{
                    tabBarLabel: "Home",
                    tabBarLabelStyle: { color: '#7CB9E8'},
                    headerShown:false,
                    tabBarIcon:({focused}) =>
                    focused? (
                        <AntDesign name="home" size={24} color="#7CB9E8" />
                    ) : (
                        <AntDesign name="home" size={24} color="black" />
                    )
                }}
            />
            <Tabs.Screen 
                name="task" 
                options={{
                    tabBarLabel: "Inbox",
                    tabBarLabelStyle: { color: '#7CB9E8'},
                    headerShown:false,
                    tabBarIcon:({focused}) =>
                    focused? (
                        <MaterialCommunityIcons name="inbox-full" size={24} color="#7CB9E8" />
                    ) : (
                        <MaterialCommunityIcons name="inbox-full" size={24} color="black" />
                    )
                }}
            />
            <Tabs.Screen 
                name="calender" 
                options={{
                    tabBarLabel: "Calender",
                    tabBarLabelStyle: { color: '#7CB9E8'},
                    headerShown:false,
                    tabBarIcon:({focused}) =>
                    focused? (
                        <AntDesign name="calendar" size={24} color="#7CB9E8" />
                    ) : (
                        <AntDesign name="calendar" size={24} color="black" />
                    )
                }}
            />
            <Tabs.Screen 
                name="profile" 
                options={{
                    tabBarLabel: "Profile",
                    tabBarLabelStyle: { color: '#7CB9E8'},
                    headerShown:false,
                    tabBarIcon:({focused}) =>
                    focused? (
                        <Feather name="user" size={24} color="#7CB9E8" />
                    ) : (
                        <Feather name="user" size={24} color="black" />
                    )
                }}
            />
        </Tabs>
    )
}