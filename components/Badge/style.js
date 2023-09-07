import { StyleSheet } from 'react-native'
import {
  horizontalScale,
  scaleFontSize,
  verticalScale
} from '../../assets/styles/scaling'
import Colors from '../../assets/styles/Colors'

const style = StyleSheet.create({
  badge: {
    backgroundColor: Colors.green,
    borderRadius: horizontalScale(50),
    height: verticalScale(22),
    justifyContent: 'center'
  },
  title: {
    color: Colors.white,
    fontFamily: 'Inter',
    fontSize: scaleFontSize(10),
    fontWeight: '600',
    lineHeight: scaleFontSize(12),
    textAlign: 'center'
  }
})

export default style
