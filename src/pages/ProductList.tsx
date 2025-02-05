// src/pages/ProductList.tsx
import React from 'react';
import { StatusBar, ScrollView, Dimensions, SafeAreaView, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../shared/store/store';
import { ProductCard } from '../entities/product/ui/ProductCard';
import {
    DESIGN_IMAGE_WIDTH,
    DESIGN_IMAGE_HEIGHT,
    DESIGN_CONTAINER_SIZE,
} from '../shared/config/design';

export const ProductList = () => {
    const products = useSelector((state: RootState) => state.products.items);
    const { width: screenWidth } = Dimensions.get('window');

    // Container size for image inside card
    const containerSize = (screenWidth / DESIGN_IMAGE_WIDTH) * DESIGN_CONTAINER_SIZE;

    // Scale factor for offsets
    const scaleFactor = containerSize / DESIGN_CONTAINER_SIZE;

    const imageWidth = DESIGN_IMAGE_WIDTH * scaleFactor;
    const imageHeight = DESIGN_IMAGE_HEIGHT * scaleFactor;

    return (
        <>
            <StatusBar hidden />
            <SafeAreaView className="flex-1">
                <ScrollView contentContainerStyle={{ padding: 8 }} className="bg-customBg">
                    <View className="flex flex-row flex-wrap justify-between w-full">
                        {products.map((product, index) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                index={index}
                                containerSize={containerSize}
                                imageWidth={imageWidth}
                                imageHeight={imageHeight}
                                scaleFactor={scaleFactor}
                            />
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};
