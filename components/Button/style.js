import { StyleSheet } from 'react-native'
import {
  horizontalScale,
  scaleFontSize,
  verticalScale
} from '../../assets/styles/scaling'
import Colors from '../../assets/styles/Colors'

const style = StyleSheet.create({
  button: {
    backgroundColor: Colors.blue,
    borderRadius: horizontalScale(50),
    height: verticalScale(55),
    justifyContent: 'center'
  },
  disabled: {
    opacity: 0.5
  },
  title: {
    color: Colors.white,
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    fontWeight: '500',
    lineHeight: scaleFontSize(19),
    textAlign: 'center'
  }
})

export default style
