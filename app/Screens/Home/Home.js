import {View, Text, StyleSheet} from 'react-native';
import React, {version} from 'react';
import MainContainer from '../../components/MainContainer';
import TopHeader from '../../components/TopHeader/TopHeader';
import scale, {verticalScale} from '../../utils/scale';
import {themecolor, white} from '../../utils/color';
import {Card} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const Home = () => {
  return (
    <MainContainer>
      <TopHeader title={'Dashboard'} />

      <View style={styles.container}>
        {/* card 1 */}
        <View style={styles.lableview}>
          <Text style={styles.labletext}>Upcoming Consultations</Text>
        </View>
        <Card style={styles.cardcontainer}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text style={styles.cardlable}> Dr. marta Juarez</Text>
              <Text style={styles.cardlable}> Dr. hans Gerhoss</Text>
            </View>
            <View
              style={{
                marginTop: verticalScale(40),
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'flex-end',
              }}>
              <FontAwesome name="stethoscope" size={60} color={themecolor} />
              <Text
                style={[
                  styles.biglable,
                  {
                    // marginBottom: verticalScale(10),
                  },
                ]}>
                2
              </Text>
            </View>
          </View>
        </Card>

        {/* card 2 */}
        <View style={styles.lableview}>
          <Text style={styles.labletext}>Medical Files</Text>
        </View>
        <Card style={styles.cardcontainer}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 1}}>
              <Text style={styles.cardlable}>Blood tests.pdf</Text>
              <Text style={styles.cardlable}>Cardiology redults.pdf</Text>
              <Text style={styles.cardlable}>Blood tests 20-02-2020.pdf</Text>
              <Text style={styles.cardlable}>MRI redults.pdf</Text>
            </View>
            <View
              style={{
                marginTop: verticalScale(30),
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'flex-end',
              }}>
              <FontAwesome name="stethoscope" size={60} color={themecolor} />
              <Text
                style={[
                  styles.biglable,
                  {
                    // marginBottom: verticalScale(10),
                  },
                ]}>
                7
              </Text>
            </View>
          </View>
        </Card>

        <View style={styles.card3container}>
          <Card style={[styles.cardcontainer, {flex: 1}]}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: verticalScale(20),
              }}>
              <AntDesign
                name="pluscircle"
                size={scale(50)}
                color={themecolor}
              />
              <Text style={styles.cardlable}>Schedule</Text>
            </View>
          </Card>
          <Card style={[styles.cardcontainer, {flex: 1}]}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: verticalScale(20),
              }}>
              <Feather name="phone" size={scale(50)} color={themecolor} />
              <Text style={styles.cardlable}>Call</Text>
            </View>
          </Card>
        </View>
      </View>
    </MainContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {flex: 1, marginHorizontal: scale(10)},
  labletext: {
    fontSize: scale(20),
    color: 'blue',
    fontWeight: 'bold',
  },
  lableview: {
    marginVertical: verticalScale(20),
  },
  cardlable: {
    fontSize: scale(15),
    color: themecolor,
  },
  cardcontainer: {
    padding: scale(10),
    backgroundColor: white,
  },

  biglable: {fontSize: scale(70), color: themecolor},
  card3container: {
    marginTop: verticalScale(20),
    flexDirection: 'row',
    gap: scale(30),
  },
});
