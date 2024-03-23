import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setOrigin } from '../slices/navSlice'
import { GOOGLE_MAPS_APIKEY } from '@env'
import { useNavigation } from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';



const HomeScreen = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <GooglePlacesAutocomplete 
          placeholder='Where From?'
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          returnKeyType={'search'}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          nearbyPlacesAPI='GooglePlacesSearch'
          minLength={2}
          enablePoweredByContainer={false}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }}
          debounce={400}
        />
        <Button title="Click" onPress={() => navigation.navigate('MapScreen')} />
    </SafeAreaView>
  )
}

export default HomeScreen
