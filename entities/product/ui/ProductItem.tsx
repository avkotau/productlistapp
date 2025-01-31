import React from "react";
import { View, Text } from "react-native";
import { Product } from "../types";

interface Props {
    product: Product;
    isEven?: boolean;
}

export function ProductItem({ product, isEven }: Props) {
    const rowBg = isEven ? "bg-white" : "bg-gray-50";

    return (
        <View className={`flex-row p-4 border-b border-gray-200 ${rowBg}`}>
            <Text className="flex-1 text-center text-gray-800">{product.id}</Text>
            <Text className="flex-2 text-center text-gray-800">{product.name}</Text>
            <Text className="flex-1 text-center text-gray-800">
                ${product.price.toFixed(2)}
            </Text>
        </View>
    );
}
