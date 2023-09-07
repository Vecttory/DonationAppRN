import { StyleSheet } from 'react-native'
import {
  horizontalScale,
  scaleFontSize,
  verticalScale
} from '../../assets/styles/scaling'
import Colors from '../../assets/styles/Colors'

const style = StyleSheet.create({
  searchInput: {
    color: Colors.darkGray,
    flex: 1,
    fontFamily: 'Inter',
    fontSize: scaleFontSize(14),
    height: '100%',
    lineHeight: scaleFontSize(14),
    marginLeft: horizontalScale(6)
  },
  searchInputContainer: {
    alignItems: 'center',
    backgroundColor: Colors.lightGray,
    borderRadius: horizontalScale(15),
    flexDirection: 'row',
    height: verticalScale(50),
    paddingHorizontal: horizontalScale(16)
  }
})

export default style
