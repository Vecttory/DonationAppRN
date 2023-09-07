import { StyleSheet } from 'react-native'
import {
  horizontalScale,
  scaleFontSize,
  verticalScale
} from '../../assets/styles/scaling'
import Colors from '../../assets/styles/Colors'

const style = StyleSheet.create({
  inactiveTab: {
    backgroundColor: Colors.lightGray
  },
  inactiveTitle: {
    color: Colors.gray
  },
  tab: {
    backgroundColor: Colors.blue,
    borderRadius: horizontalScale(50),
    height: verticalScale(50),
    justifyContent: 'center'
  },
  title: {
    color: Colors.white,
    fontFamily: 'Inter',
    fontSize: scaleFontSize(14),
    fontWeight: '500',
    lineHeight: scaleFontSize(17),
    textAlign: 'center'
  }
})

export default style
