import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function test() {
  return (
    <SafeAreaView className='flex-1 justify-center items-center'>
      <Text>test</Text>
    </SafeAreaView>
  )
}