import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'

const RootLayout = () => {
  return (
        <Stack>
            <Stack.Screen name='index' options={{ headerShadow: false}} />
        </Stack>
      
    )
}

export default RootLayout
