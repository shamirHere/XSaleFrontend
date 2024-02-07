import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { BottomNavigation, TitleHeader, InputText, Button} from '../../component/shared'
import styles from '../../assets/styles'
import ChatCard from '../../component/Chats/ChatCard'

const List = () => {
  const button = [
    {id : 1, label : 'All'},
    {id : 2, label : 'Buy'},
    {id : 3, label : 'Sell'}
  ]

  return (
    <SafeAreaView style={[styles.pdh16,{height : "100%"}]}>
        <TitleHeader />
        <InputText />
        <View style={[ styles.fdRow, styles.mt12, {height : "auto",  width : "100%"}]}>
          {
            button.map((item , index) => {
              return <Button label={item.label} style={[styles.mr16]} key={item.id}/>
            })
          }
        </View>
        <ScrollView style={[styles.mt16, {marginBottom : 70}]}>
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
          <ChatCard />
        </ScrollView>
        
      <BottomNavigation />
    </SafeAreaView>
  )
}

export default List; 