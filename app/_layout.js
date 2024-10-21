import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React from 'react'
import { userData } from './database'


const Facebook = () => {

  // Header section
  const Header = () => {
    return (
      <View>
        {/* User's image */}
        <View style={{ backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center', paddingBottom: 5 }}>
          <Image source={{ uri: 'https://media.licdn.com/dms/image/v2/D4D03AQF2fRbNLN3RBg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1728774962073?e=1734566400&v=beta&t=f5Vsosz-OwiBYYpXs-xcqaYFBtUdpSdWdZbFKUMYgt0' }} style={{ width: 35, height: 35, borderRadius: 50 }} />

          {/* Input search section */}
          <View style={{ flexDirection: 'row', backgroundColor: '#d4d4d4', width: 245, height: 30, borderRadius: 5, alignItems: 'center', paddingLeft: 10 }}>
            <Image source={require('../assets/icons/search-icon.png')} style={{ tintColor: '#717376', width: 20, height: 20, marginRight: 5 }} />
            <Text style={{ color: '#717376' }}>Search</Text>
          </View>

          {/* Follow and message icons */}
          <Image style={{ width: 20, height: 20, borderRadius: 5 }} source={require('../assets/icons/first-aid.png')}/>
          <Image source={require('../assets/icons/top-messaging.png')} style={{ width: 20, height: 20, tintColor: 'black' }}/>
        </View>
      </View>
    )
  }
  // Contents section
  return (
    <View style={styles.parent_view}>
      <FlatList
        data={userData}
        ListHeaderComponent={Header}
        renderItem={({ item }) => {
          return (
            // User info
            <View style={{ marginTop: 8, backgroundColor: 'white', paddingHorizontal: 10, paddingTop: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={{ uri: item.profile_picture }} />
                <View style={{ paddingLeft: 10, flex: 1 }}>
                  <Text style={{ fontSize: 17, fontWeight: '500' }}>{item.username} <Text style={{ fontSize: 10, color: 'grey' }}>• {item.user_pos}</Text></Text>
                  <Text numberOfLines={1} style={{ fontSize: 12, color: 'grey', paddingRight: 50 }}>{item.user_description}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: 10, color: 'grey' }}>{item.time_posted} • </Text>
                    <Image source={require('../assets/icons/globe.png')} style={{ width: 10, height: 10 }} />
                  </View>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', marginTop: 7 }}>
                  <Image style={{ width: 15, height: 17 }} source={require('../assets/icons/three-dots.png')}/>
                  <Image style={{ width: 15, height: 15, marginLeft: 20, marginRight: 10 }} source={require('../assets/icons/cancel.png')}/>
                </View>
              </View>
              {/* User post description and image */}
              <View style={{ paddingTop: 10 }}>
                <Text numberOfLines={3}>{item.user_post}</Text>
                <Image source={{ uri: item.user_post_img }} style={{ width: '100%', height: 500, marginTop: 10 }} />
              </View>
              <View style={{ flexDirection: 'row', paddingVertical: 15, alignItems: 'center' }}>
                <Image source={require('../assets/icons/like-icon.png')} style={{ width: 20, height: 20 }} />
                <Image source={require('../assets/icons/love-icon.png')} style={{ width: 20, height: 20 }} />
                <Image source={require('../assets/icons/think-icon.png')} style={{ width: 20, height: 20 }} />
                <Text style={{ flex: 1, color: 'grey', fontSize: 12, paddingLeft: 5 }}>{item.username} and 33 others</Text>
                <Text style={{ color: 'grey', fontSize: 12 }}>{item.comments} comments</Text>
              </View>

              {/* Horizontal line */}
              <View style={{ borderBottomColor: 'grey', borderBottomWidth: 0.5, marginBottom: 5 }} />

              {/* Thumbs up, comment, repost and send icon section */}
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingBottom: 2 }}>
                <View style={{ alignItems: 'center' }}>
                  <Image source={require('../assets/icons/thumbsup-icon.jpg')} style={{ width: 20, height: 20, transform: [{ scaleX: -1 }] }} />
                  <Text style={{ fontSize: 10, paddingTop: 3 }}>Like</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Image source={require('../assets/icons/top-messaging.png')} style={{ width: 20, height: 20 }} />
                  <Text style={{ fontSize: 10 }}>Comment</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Image source={require('../assets/icons/repost-icon.png')} style={{ width: 20, height: 20 }} />
                  <Text style={{ fontSize: 10 }}>Repost</Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                  <Image source={require('../assets/icons/send.png')} style={{ width: 20, height: 20 }} />
                  <Text style={{ fontSize: 10 }}>Send</Text>
                </View>
              </View>
            </View>
          )
        }}
      />
    </View>
  )
}

export default Facebook

const styles = StyleSheet.create({
  parent_view: {
    backgroundColor: '#f0e4dc',
    flex: 1,
    marginTop: 20
  }
})
// #f0e4dc