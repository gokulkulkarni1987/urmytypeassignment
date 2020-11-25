import React from 'react';
import {View} from 'react-native';

export default ReverserBorder = (props) => {
  return (
    <View style={{alignSelf: props.borderParentAlignment}}>
      <View
        style={{
          width: props.borderWidthAndRadius,
          height: props.borderWidthAndRadius,
          backgroundColor: props.borderColor,
          alignItems: 'center',
          justifyContent: props.borderSide,
        }}>
        <View
          style={[{
            backgroundColor: props.parentBgColor,
            height: props.borderWidthAndRadius,
            width: props.borderWidthAndRadius,
            alignSelf: 'flex-start',
          }, props.borderLocation]}
        />
      </View>
    </View>
  );
};
