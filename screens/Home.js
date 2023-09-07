import React from 'react'
import { SafeAreaView, View } from 'react-native'
import globalStyle from '../assets/styles/globalStyle'
import Search from '../components/Search/Search'
import SingleDonationItem from '../components/SingleDonationItem/SingleDonationItem'
import style from './style'

const Home = () => {
  return (
    <SafeAreaView style={{ ...globalStyle.backgroundWhite, ...globalStyle.flex }}>
      <Search onSearch={value => console.log(value)} />
      <View style={style.itemsContainer}>
        <SingleDonationItem
          uri={
            'https://images.unsplash.com/photo-1554631221-f9603e6808be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FjdHVzfGVufDB8fDB8fHww&w=1000&q=80'
          }
          badgeTitle={'Environment'}
          donationTitle={'Tree Cactus'}
          price={44}
        />
        <SingleDonationItem
          uri={
            'https://images.unsplash.com/photo-1554631221-f9603e6808be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FjdHVzfGVufDB8fDB8fHww&w=1000&q=80'
          }
          badgeTitle={'Environment'}
          donationTitle={'Tree Cactus'}
          price={44}
        />
      </View>
    </SafeAreaView>
  )
}

export default Home
