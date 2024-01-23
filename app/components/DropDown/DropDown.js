import React, {Component, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import scale, {verticalScale} from '../../utils/scale';
import {Dropdown} from 'react-native-element-dropdown';
import {
  bg2,
  bg3,
  black,
  fontmedium,
  fontregular,
  fontsemibold,
  grey4,
  grey5,
  grey6,
  grey7,
  textcolor,
  red,
  white,
  textcolor1,
} from '../../utils/color';

const DropdownCustom = ({
  data,
  label,
  value,
  onChangeText,
  onBlur,
  touched,
  errors,
  errorStyle,
  labelstyle,
  toplabel,
  dropDownStyle,
  ...props
}) => {
  const renderDocumentItem = item => {
    return (
      <View style={styles.itemStyle}>
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    );
  };

  return (
    <>
      {toplabel && (
        <Text style={[styles.labelTxt, labelstyle]}>{toplabel}</Text>
      )}
      <Dropdown
        {...props}
        style={[styles.dropdown, dropDownStyle]}
        iconStyle={styles.iconStyle}
        search
        data={data}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        maxHeight={300}
        valueField="id"
        labelField="name"
        placeholder={label}
        value={value}
        onChange={item => {
          onChangeText?.(item.id);
        }}
        renderItem={renderDocumentItem}
        onBlur={() => onBlur()}
      />
      {!value && touched && errors && (
        <Text style={[styles.errorText, errorStyle]} numberOfLines={1}>
          {errors}
        </Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: verticalScale(55),
    borderRadius: scale(12),
    borderWidth: scale(1),
    borderColor: black,
    paddingHorizontal: scale(10),
    backgroundColor: bg3,
    paddingLeft: scale(12),
    fontFamily: fontmedium,
  },

  placeholderStyle: {
    fontSize: scale(17),
    color: '#b0b1b6',
    fontFamily: fontmedium,
  },

  selectedTextStyle: {
    fontSize: scale(15),
    color: black,
    fontFamily: fontregular,
  },

  iconStyle: {
    width: 20,
    height: 20,
  },

  itemStyle: {
    padding: scale(15),
    flexDirection: 'row',
    borderBottomWidth: scale(0.5),
    borderBottomColor: '#d3d3d3',
  },

  itemText: {
    color: grey7,
    fontFamily: fontregular,
  },

  labelTxt: {
    fontFamily: fontsemibold,
    color: textcolor1,
    fontSize: scale(14),
  },

  errorText: {
    fontSize: scale(12),
    color: red,
    fontFamily: fontregular,
  },
});

export default DropdownCustom;
