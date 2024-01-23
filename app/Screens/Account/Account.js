import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import MainContainer from '../../components/MainContainer';
import {TextInput} from 'react-native-paper';
import scale, {verticalScale} from '../../utils/scale';
import DropdownCustom from '../../components/DropDown/DropDown';
import moment from 'moment';
import {
  black,
  grey6,
  themecolor2,
  white,
  bg3,
  fontregular,
  grey8,
  fontbold,
  grey5,
  themecolor,
} from '../../utils/color';
import FastImage from 'react-native-fast-image';
import Entypo from 'react-native-vector-icons/Entypo';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';

const Account = () => {
  const data = [
    {name: 'ahmedabad', id: 1},
    {name: 'surat', id: 2},
    {name: 'vadodra', id: 3},
    {name: 'gandhinagar', id: 4},
  ];
  const [ddValue, setDDValue] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [response, setResponse] = React.useState(null);
  const [profileimage, setProfileImage] = React.useState('');
  const [inputvel, setInputvel] = useState('');

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDate(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const onTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTime(Platform.OS === 'ios');
    setTime(currentTime);
  };

  const formatDate = moment(date).format('YYYY-MM-DD');
  const formatTime = moment(time).format('HH:mm');

  const launchcamera = async () => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
      // includeExtra,
    };
    launchCamera(options, setResponse)
      .then(result => {
        console.log(result);
        if (result?.assets[0]?.uri) {
          setProfileImage(result?.assets[0]?.uri);

          setModalVisible(!isModalVisible);
        } else {
          console.log('something went worg');
        }
      })
      .catch(error => console.log('error', error));
  };

  const gallerypress = () => {
    const options = {
      selectionLimit: 0,
      mediaType: 'photo',
      includeBase64: false,
    };
    launchImageLibrary(options, setResponse)
      .then(result => {
        console.log(result);
        if (result?.assets[0]?.uri) {
          setProfileImage(result?.assets[0]?.uri);
          setModalVisible(!isModalVisible);
        } else {
          console.log('something went worg');
        }
      })
      .catch(error => console.log('error', error));
  };

  return (
    <MainContainer>
      {/* Profile Modal */}

      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => setModalVisible(!isModalVisible)}>
          <TouchableOpacity
            style={styles.modalview}
            onPress={() => setModalVisible(!isModalVisible)}>
            <TouchableOpacity style={styles.modalview1} activeOpacity={1}>
              <View style={styles.modaldetailview}>
                <Text style={[styles.headertext, {marginLeft: scale(10)}]}>
                  Profile Photo
                </Text>
                <View style={styles.modalimgview}>
                  <TouchableOpacity
                    onPress={launchcamera}
                    style={{alignItems: 'center'}}>
                    <FastImage
                      style={styles.imgview}
                      source={require('../../assets/img/camera.png')}
                    />
                    <Text style={styles.headertext}>Camera</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={gallerypress}
                    style={{alignItems: 'center'}}>
                    <FastImage
                      style={styles.imgview}
                      source={require('../../assets/img/gallery.png')}
                    />
                    <Text style={styles.headertext}>Gallery</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </TouchableOpacity>
        </Modal>
      </View>

      <View style={styles.container}>
        {/* Text Input */}

        <View style={styles.lableview}>
          <Text style={styles.labletext}>Text Input</Text>
        </View>
        <TextInput
          mode="outlined"
          label="Full Name"
          onChange={setInputvel}
          value={inputvel}
        />

        {/* Select Box */}

        <View style={styles.lableview}>
          <Text style={styles.labletext}>Select Box</Text>
        </View>
        <DropdownCustom
          data={data}
          label="Select city"
          value={ddValue}
          onChangeText={setDDValue}
          onBlur={() => {}}
        />

        {/* Date Picker */}

        <View style={styles.lableview}>
          <Text style={styles.labletext}>Select Date</Text>
        </View>

        <TouchableOpacity
          onPress={() => setShowDate(true)}
          style={{
            borderColor: black,
            borderWidth: scale(1),

            height: verticalScale(50),
            justifyContent: 'center',
            borderRadius: scale(10),
            paddingHorizontal: scale(10),
          }}>
          <View>
            <Text style={styles.dateTimeText}> {formatDate}</Text>
          </View>
        </TouchableOpacity>

        {showDate && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onDateChange}
          />
        )}

        {/* Time Picker */}

        <View style={styles.lableview}>
          <Text style={styles.labletext}>Select Time</Text>
        </View>

        <TouchableOpacity
          onPress={() => setShowTime(true)}
          style={{
            borderColor: grey6,
            borderWidth: scale(1),
            height: verticalScale(50),
            justifyContent: 'center',
            borderRadius: scale(10),
            paddingHorizontal: scale(10),
          }}>
          <View>
            <Text style={styles.dateTimeText}> {formatTime}</Text>
          </View>
        </TouchableOpacity>

        {showTime && (
          <DateTimePicker
            value={time}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={onTimeChange}
          />
        )}

        {/* Image Picker */}
        <View style={styles.lableview}>
          <Text style={styles.labletext}>Image Picker</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: verticalScale(20),
            shadowColor: themecolor2,
            elevation: 10,
          }}>
          <View
            style={{
              borderColor: themecolor2,
              borderWidth: 2,
              borderRadius: 100,
              padding: 5,
            }}>
            <Image
              style={{
                resizeMode: 'contain',
                width: scale(90),
                height: scale(90),
                borderRadius: scale(100),
                overflow: 'hidden',
                // backgroundColor: themecolor1,
              }}
              source={
                profileimage
                  ? {uri: profileimage}
                  : require('../../assets/img/guest_user.jpg')
              }
            />
            <Pressable onPress={() => setModalVisible(!isModalVisible)}>
              <View
                style={{
                  backgroundColor: themecolor,
                  position: 'absolute',
                  bottom: -7,
                  right: -7,
                  padding: scale(8),
                  borderRadius: scale(20),
                }}>
                <Entypo name={'camera'} size={scale(15)} color={white} />
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </MainContainer>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {flex: 1, marginHorizontal: scale(10)},

  labletext: {
    fontSize: scale(20),
    color: '#221d69',
    fontWeight: 'bold',
  },
  lableview: {
    marginVertical: verticalScale(20),
  },
  dateTimeText: {
    fontSize: scale(15),
    color: black,
  },
  iconestyle: {
    color: black,
    size: 30,
  },
  backgroundimage: {
    height: verticalScale(300),
    width: 'auto',
  },
  modalview: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalview1: {
    width: 'auto',
    height: verticalScale(150),
    backgroundColor: white,
    borderTopLeftRadius: scale(15),
    borderTopRightRadius: scale(15),
  },
  modaldetailview: {
    marginHorizontal: scale(10),
    marginVertical: verticalScale(10),
  },
  modalimgview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(10),
  },
  imgview: {height: scale(80), width: scale(80)},
  cardview: {
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(10),
    backgroundColor: '#FFF',
    borderRadius: scale(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    color: black,
    fontSize: scale(23),
    fontStyle: fontbold,
  },

  detailContainer: {
    marginTop: verticalScale(5),
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },

  detailTital: {
    color: grey5,
    fontSize: scale(15),
    fontFamily: fontregular,
  },

  detailResponse: {
    color: grey8,
    fontSize: scale(15),
  },

  underline: {
    paddingVertical: verticalScale(0.2),
    elevation: 0.1,
    backgroundColor: '#808080',
    width: '100%',
    marginTop: verticalScale(5),
  },
});
