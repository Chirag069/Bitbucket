import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import MainContainer from '../../components/MainContainer';
import scale, {verticalScale} from '../../utils/scale';
import DeviceInfoo from 'react-native-device-info';
import {black} from '../../utils/color';

const DeviceInfo = () => {
  const [batteryLevel, setBatteryLevel] = useState('Loading...');
  const [diskspace, setDiskSpace] = useState('Loading...');

  useEffect(() => {
    const fetchBatteryLevel = async () => {
      const level = await DeviceInfoo.getBatteryLevel();
      // Converting to percentage for display
      setBatteryLevel(`${(level * 100).toFixed(0)}%`);

      const diskspace = await DeviceInfoo.getTotalDiskCapacity().then(
        diskSpace => {
          // Convert bytes to GB using base 10 (as manufacturers do)
          const diskSpaceGB = diskSpace / 1000 / 1000 / 1000;
          return `${diskSpaceGB.toFixed(2)} GB`;
        },
      );
      setDiskSpace(diskspace);
    };

    fetchBatteryLevel();
  }, []);

  return (
    <MainContainer>
      <View style={styles.container}>
        {/* Text Input */}

        <View style={styles.lableview}>
          <Text style={styles.labletext}>App Version</Text>
        </View>

        <Text style={styles.textstyle}>{DeviceInfoo.getVersion()}</Text>

        <View style={styles.lableview}>
          <Text style={styles.labletext}>Build Version</Text>
        </View>

        <Text style={styles.textstyle}>{DeviceInfoo.getBuildNumber()}</Text>

        <View style={styles.lableview}>
          <Text style={styles.labletext}>Bundle Identifier</Text>
        </View>

        <Text style={styles.textstyle}>{DeviceInfoo.getBundleId()}</Text>
        <View style={styles.lableview}>
          <Text style={styles.labletext}>Battery Level</Text>
        </View>

        <Text style={styles.textstyle}>{batteryLevel}</Text>
        <View style={styles.lableview}>
          <Text style={styles.labletext}>Total Disk Space</Text>
        </View>

        <Text style={styles.textstyle}>{diskspace}</Text>
      </View>
    </MainContainer>
  );
};

export default DeviceInfo;

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
  textstyle: {
    fontSize: scale(12),
    color: black,
  },
});
