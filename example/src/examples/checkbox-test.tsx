import * as React from 'react';
import {StyleSheet, ScrollView, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Label, Wrapper} from '../common';
import Images from '../images';

const Checkboxes = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Wrapper>
        <Label text={'checkbox without role'} />
        <TouchableOpacity>
          <Image
            source={Images.checkbox.filled['512px']}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
      </Wrapper>
      <Wrapper>
        <Label text={'checkbox with role'} />
        <TouchableOpacity accessibilityRole="checkbox">
          <Image
            source={Images.checkbox.filled['512px']}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
      </Wrapper>
      <Wrapper>
        <Label text={'checkbox with role and \nstate checked === true'} />
        <TouchableOpacity
          accessibilityRole="checkbox"
          accessibilityState={{checked: true}}>
          <Image
            source={Images.checkbox.filled['512px']}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
      </Wrapper>
      <Wrapper>
        <Label text={'checkbox with role and \nstate checked === false'} />
        <TouchableOpacity
          accessibilityRole="checkbox"
          accessibilityState={{checked: false}}>
          <Image
            source={Images.checkbox.filled['512px']}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
      </Wrapper>
      <Wrapper>
        <Label text={'checkbox with role and \nstate checked === mixed'} />
        <TouchableOpacity
          accessibilityRole="checkbox"
          accessibilityState={{checked: 'mixed'}}>
          <Image
            source={Images.checkbox.filled['512px']}
            style={{height: 30, width: 30}}
          />
        </TouchableOpacity>
      </Wrapper>
    </ScrollView>
  );
};

export default Checkboxes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },
  other: {
    borderWidth: 3,
  },
});
