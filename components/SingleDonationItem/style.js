import { StyleSheet } from 'react-native'
import { horizontalScale, verticalScale } from '../../assets/styles/scaling'

const style = StyleSheet.create({
  badge: {
    left: horizontalScale(10),
    position: 'absolute',
    top: verticalScale(13),
    zIndex: 1
  },
  donationInformation: {
    marginTop: verticalScale(16)
  },
  image: {
    height: verticalScale(140),
    width: horizontalScale(140)
  },
  price: {
    marginTop: verticalScale(5)
  }
})

export default style
