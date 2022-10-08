import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image, View} from 'react-native';
import Images from '../images';

interface Props {
  component: string;
  property: string;
  onPress: () => void;
}

const Card: React.FC<Props> = ({component, property, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Text style={styles.component}>{component}</Text>
        <Text style={styles.property}>{property}</Text>
      </View>
      <Image source={Images.chevron.right['24px']} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    backgroundColor: 'white',
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  component: {
    fontWeight: '700',
    fontSize: 16,
  },
  property: {},
});

export default Card;
