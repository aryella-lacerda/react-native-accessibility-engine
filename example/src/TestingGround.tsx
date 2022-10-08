import React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import type {StackNavigationProp} from '@react-navigation/stack';
import type {ScreensParamList} from './navigation/RootNavigator';
import {Card} from './common';

interface Props {
  navigation: StackNavigationProp<ScreensParamList, 'TestingGround'>;
}

const TestingGround: React.FC<Props> = ({navigation}) => {
  const data = React.useMemo(() => {
    return [
      {
        component: 'Button',
        property: 'accessible',
        onPress: () => navigation.navigate('ButtonAccessibleTest'),
      },
      {
        component: 'Button',
        property: 'accessibilityLabel',
        onPress: () => navigation.navigate('ButtonLabelTest'),
      },
      {
        component: 'Button',
        property: 'accessibilityRole',
        onPress: () => navigation.navigate('ButtonRoleTest'),
      },
      {
        component: 'Button',
        property: 'accessibilityState',
        onPress: () => navigation.navigate('ButtonStateTest'),
      },
      {
        component: 'Link',
        property: 'link-role-required',
        onPress: () => navigation.navigate('LinkRoleRequiredTest'),
      },
      {
        component: 'Link',
        property: 'link-role-misused',
        onPress: () => navigation.navigate('LinkRoleMisusedTest'),
      },
      {
        component: 'Text',
        property: 'no-empty-text',
        onPress: () => navigation.navigate('EmptyTextTest'),
      },
    ];
  }, [navigation]);

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.property}
      renderItem={({item}) => <Card {...item} />}
      ItemSeparatorComponent={Separator}
      ListHeaderComponent={Header}
    />
  );
};

const Separator = () => {
  return <View style={styles.separator} />;
};

const Header = () => {
  return (
    <View style={styles.introContainer}>
      <Text style={styles.introTitle}>How to use</Text>
      <Text style={styles.introText}>
        The following screens are testing grounds for the component and
        accessibility prop in question.
      </Text>
      <Text style={styles.introText}>
        Within each, you'll find implementation variations that you can inspect
        using Accessibility Scanner, Accessibility Inspector, or by turning on
        your screen reader.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: 'lightgray',
  },
  introContainer: {
    paddingVertical: 16,
    paddingHorizontal: 16,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 170,
  },
  introText: {
    width: '100%',
  },
  introTitle: {
    width: '100%',
    fontWeight: '700',
    fontSize: 19,
    marginBottom: 5,
  },
});

export default TestingGround;
