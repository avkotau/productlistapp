import { View, Image, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { getQuadrantPosition } from '../../../shared/lib/imageHelpers';
import { Product } from '../types';

interface Props {
    product: Product;
    index: number;
    containerSize: number;
    imageWidth: number;
    imageHeight: number;
    scaleFactor: number;
}

export const ProductCard = (
    {
        product,
        index,
        containerSize,
        imageWidth,
        imageHeight,
        scaleFactor,
    }: Props) => {
    return (
        <View className="relative w-[49%] mb-8 rounded-[15px]">
            {/* Container for image with fixed dimensions and hidden overflow */}
            <View
                style={{ width: containerSize, height: containerSize }}
                className="overflow-hidden"
            >
                <Image
                    source={require('../../../assets/main-pic.jpeg')}
                    resizeMode="contain"
                    style={[
                        {
                            width: imageWidth,
                            height: imageHeight,
                            position: 'absolute',
                        },
                        getQuadrantPosition(index % 4, scaleFactor),
                    ]}
                />
            </View>
            <View className="p-0">
                <View className="flex-row gap-2.5">
                    <Text className="text-[rgb(255,253,254)] text-base font-semibold">
                        {product.name}
                    </Text>
                    <Text className="text-[rgb(153,152,150)] text-base font-semibold">
                        {product.weight}
                    </Text>
                </View>
                <Text className="text-[rgb(153,152,150)] text-xs mt-1">
                    {product.description}
                </Text>
                <TouchableOpacity
                    className="bg-[rgb(54,53,51)] py-2 px-3 rounded-[15px] mt-2 flex-row items-center self-start"
                    onPress={() => {}}
                >
                    <Text className="text-[rgb(255,253,254)] text-base font-semibold">
                        {product.price} ₽
                    </Text>
                    <Ionicons
                        name="arrow-forward"
                        size={20}
                        color="rgb(255,253,254)"
                        style={{ marginLeft: 8 }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};
