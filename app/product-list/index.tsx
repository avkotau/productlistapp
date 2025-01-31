import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from "@shared/store";
import { ProductItem } from "@entities/product/ui/ProductItem";

export default function ProductListPage() {
    const products = useSelector((state: RootState) => state.products.items);

    return (
        <View className="flex-1 justify-center items-center bg-gray-50 p-6">
            <View className="bg-white rounded-2xl shadow-lg overflow-hidden w-11/12 max-w-md">
                <View className="flex-row bg-blue-950 p-4">
                    <Text className="flex-1 font-bold text-white text-center">ID</Text>
                    <Text className="flex-2 font-bold text-white text-center">Name</Text>
                    <Text className="flex-1 font-bold text-white text-center">Price</Text>
                </View>
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item, index }) => (
                        <View
                            className={`flex-row items-center p-4 ${
                                index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'
                            }`}
                        >
                            <Text className="flex-1 text-center text-gray-800">{item.id}</Text>
                            <Text className="flex-2 text-center text-gray-800">{item.name}</Text>
                            <Text className="flex-1 text-center text-gray-800">${item.price.toFixed(2)}</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}
