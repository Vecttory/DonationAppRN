import { StyleSheet } from 'react-native'
import { horizontalScale } from '../assets/styles/scaling'

const style = StyleSheet.create({
  itemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(20)
  }
})

export default style
