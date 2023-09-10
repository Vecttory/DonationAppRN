import React from 'react'
import { Pressable, SafeAreaView, Text } from 'react-native'
import globalStyle from '../assets/styles/globalStyle'
// import Search from '../components/Search/Search'
// import SingleDonationItem from '../components/SingleDonationItem/SingleDonationItem'
// import style from './style'
import Header from '../components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import Colors from '../assets/styles/Colors'
import { updateFirstName } from '../redux/reducers/User'

const Home = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  return (
    <SafeAreaView style={{ ...globalStyle.backgroundWhite, ...globalStyle.flex }}>
      <Header
        title={user.firstName + ' ' + user.lastName}
        color={Colors.darkBlue}
      />
      <Pressable
        onPress={() => dispatch(updateFirstName({ firstName: 'Boris' }))}>
        <Text>Press me to change first name</Text>
      </Pressable>
      {/* <Search onSearch={value => console.log(value)} /> */}
      {/* <View style={style.itemsContainer}> */}
      {/*  <SingleDonationItem */}
      {/*    uri={ */}
      {/*        'https://i.pinimg.com/originals/a8/5b/40/a85b40ec450b21ef98cc363ec713ab99.jpg' */}
      {/*    } */}
      {/*    badgeTitle={'Environment'} */}
      {/*    donationTitle={'Tree Cactus'} */}
      {/*    price={44} */}
      {/*  /> */}
      {/*  <SingleDonationItem */}
      {/*    uri={ */}
      {/*        'https://i.pinimg.com/originals/a8/5b/40/a85b40ec450b21ef98cc363ec713ab99.jpg' */}
      {/*    } */}
      {/*    badgeTitle={'Environment'} */}
      {/*    donationTitle={'Tree Cactus'} */}
      {/*    price={44} */}
      {/*  /> */}
      {/* </View> */}
    </SafeAreaView>
  )
}

export default Home
