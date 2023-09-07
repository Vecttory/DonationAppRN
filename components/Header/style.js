import { StyleSheet } from 'react-native'
import { scaleFontSize } from '../../assets/styles/scaling'

const style = StyleSheet.create({
  title1: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(24),
    fontWeight: '600',
    lineHeight: scaleFontSize(29)
  },
  title2: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(18),
    fontWeight: '600',
    lineHeight: scaleFontSize(22)
  },
  title3: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    fontWeight: '600',
    lineHeight: scaleFontSize(19)
  }
})

export default style
