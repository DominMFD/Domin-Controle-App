import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { TMainButton } from "./MainButton.types";

export default function MainButton({text, ...props}: TMainButton) {
    
    return (
        <TouchableOpacity
        className="w-full py-4 bg-gray-50 text-center rounded-md"
        style={{elevation: 8}}
        activeOpacity={.8}
        {...props}>
            <Text 
            className="text-red-700 text-base font-bold tracking-widest text-center">
                {text}
            </Text>
        </TouchableOpacity>
    )
}