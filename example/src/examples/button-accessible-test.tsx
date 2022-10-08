import * as React from 'react';
import {StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {Label, Wrapper} from '../common';

import Images from '../images';

const Buttons = () => {
  return (
    <View style={styles.container}>
      <Wrapper>
        <Label text={"No defined 'accessible' prop"} />
        <TouchableOpacity style={styles.button}>
          <Image source={Images.heart['32px']} />
        </TouchableOpacity>
      </Wrapper>

      <Wrapper>
        <Label text={'Explicity defined accessible={true}'} />
        <TouchableOpacity style={styles.button} accessible={true}>
          <Image source={Images.heart['32px']} />
        </TouchableOpacity>
      </Wrapper>

      <Wrapper>
        <Label text={'Explicity defined accessible={false}'} />
        <TouchableOpacity style={styles.button} accessible={false}>
          <Image source={Images.heart['32px']} />
        </TouchableOpacity>
      </Wrapper>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 2,
    paddingVertical: 10,
    borderRadius: 20,
    width: 120,
  },
});
