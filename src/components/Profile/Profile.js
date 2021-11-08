// import React, { Component } from "react";
// import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

// export default class Profile extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.header}></View>
//         <Image
//           style={styles.avatar}
//           source={{ uri: "https://bootdey.com/img/Content/avatar/avatar6.png" }}
//         />
//         <View style={styles.body}>
//           <View style={styles.bodyContent}>
//             <Text style={styles.name}>John Doe</Text>
//             <Text style={styles.info}>UX Designer / Mobile developer</Text>
//             <Text style={styles.description}>
//               Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
//               electram expetendis, omittam deseruisse consequuntur ius an,
//             </Text>

//             <TouchableOpacity style={styles.buttonContainer}>
//               <Text>Rent A Bike</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.buttonContainer}>
//               <Text>Change Password</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   header: {
//     backgroundColor: "#ffca28",
//     height: 200,
//   },
//   avatar: {
//     width: 130,
//     height: 130,
//     borderRadius: 63,
//     borderWidth: 4,
//     borderColor: "gray",
//     marginBottom: 10,
//     alignSelf: "center",
//     position: "absolute",
//     marginTop: 130,
//   },
//   name: {
//     fontSize: 22,
//     color: "#FFFFFF",
//     fontWeight: "600",
//   },
//   body: {
//     marginTop: 40,
//   },
//   bodyContent: {
//     flex: 1,
//     alignItems: "center",
//     padding: 30,
//   },
//   name: {
//     fontSize: 28,
//     color: "#696969",
//     fontWeight: "600",
//   },
//   info: {
//     fontSize: 16,
//     color: "#ffa000",
//     marginTop: 10,
//   },
//   description: {
//     fontSize: 16,
//     color: "#696969",
//     marginTop: 10,
//     textAlign: "center",
//   },
//   buttonContainer: {
//     marginTop: 10,
//     height: 45,
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     marginBottom: 20,
//     width: 250,
//     borderRadius: 30,
//     backgroundColor: "#ffca28",
//   },
// });


import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import { Button } from "../components";
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

class Profile extends React.Component {
  render() {
    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <ImageBackground
            source={Images.ProfileBackground}
            style={styles.profileContainer}
            imageStyle={styles.profileBackground}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width, marginTop: "25%" }}
            >
              <Block flex style={styles.profileCard}>
                <Block middle style={styles.avatarContainer}>
                  <Image
                    source={ Images.ProfilePicture }
                    style={styles.avatar}
                  />
                </Block>
                <Block style={styles.info}>
                  <Block
                    middle
                    row
                    space="evenly"
                    style={{ marginTop: 20, paddingBottom: 24 }}
                  >
                    <Button
                      small
                      style={{ backgroundColor: argonTheme.COLORS.INFO }}
                    >
                      CONNECT
                    </Button>
                    <Button
                      small
                      style={{ backgroundColor: argonTheme.COLORS.DEFAULT }}
                    >
                      MESSAGE
                    </Button>
                  </Block>
                  <Block row space="between">
                    <Block middle>
                      <Text
                        size={18}
                        color="#525F7F"
                        style={{ marginBottom: 4, fontFamily: 'open-sans-bold' }}
                      >
                        2K
                      </Text>
                      <Text style={{ fontFamily: 'open-sans-regular' }} size={12} color={argonTheme.COLORS.TEXT}>Orders</Text>
                    </Block>
                    <Block middle>
                      <Text
                        color="#525F7F"
                        size={18}
                        style={{ marginBottom: 4, fontFamily: 'open-sans-bold' }}
                      >
                        10
                      </Text>
                      <Text style={{ fontFamily: 'open-sans-regular' }} size={12} color={argonTheme.COLORS.TEXT}>Photos</Text>
                    </Block>
                    <Block middle>
                      <Text
                        color="#525F7F"
                        size={18}
                        style={{ marginBottom: 4, fontFamily: 'open-sans-bold' }}
                      >
                        89
                      </Text>
                      <Text style={{ fontFamily: 'open-sans-regular' }} size={12} color={argonTheme.COLORS.TEXT}>Comments</Text>
                    </Block>
                  </Block>
                </Block>
                <Block flex>
                  <Block middle style={styles.nameInfo}>
                    <Text style={{ fontFamily: 'open-sans-regular' }} size={28} color="#32325D">
                      Jessica Jones, 27
                    </Text>
                    <Text size={16} color="#32325D" style={{ marginTop: 10, fontFamily: 'open-sans-light' }}>
                      San Francisco, USA
                    </Text>
                  </Block>
                  <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                    <Block style={styles.divider} />
                  </Block>
                  <Block middle>
                    <Text
                      size={16}
                      color="#525F7F"
                      style={{ textAlign: "center", fontFamily: 'open-sans-regular' }}
                    >
                      An artist of considerable range, Jessica name taken by
                      Melbourne …
                    </Text>
                    <Button
                      color="transparent"
                      textStyle={{
                        color: "#233DD2",
                        fontWeight: "500",
                        fontSize: 16, 
                        fontFamily: 'open-sans-regular'
                      }}
                    >
                      Show more
                    </Button>
                  </Block>
                  <Block
                    row
                    style={{ paddingVertical: 14 }}
                    space="between"
                  >
                    <Text bold size={16} color="#525F7F" style={{ marginTop: 3 }}>
                      Album
                    </Text>
                    <Button
                      small
                      color="transparent"
                      textStyle={{ color: "#5E72E4", fontSize: 14 }}
                    >
                      View all
                    </Button>
                  </Block>
                  <Block style={{ paddingBottom: -HeaderHeight * 2 }}>
                    <Block row space="between" style={{ flexWrap: "wrap" }}>
                      {Images.Viewed.map((img, imgIndex) => (
                        <Image
                          source={{ uri: img }}
                          key={`viewed-${img}`}
                          resizeMode="cover"
                          style={styles.thumb}
                        />
                      ))}
                    </Block>
                  </Block>
                </Block>
              </Block>
              <Block style={{ marginBottom: 25 }}/>
            </ScrollView>
          </ImageBackground>
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    // marginBottom: -HeaderHeight * 2,
    flex: 1
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1
  },
  profileBackground: {
    width: width,
    height: height / 2
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 65,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2
  },
  info: {
    paddingHorizontal: 40
  },
  avatarContainer: {
    position: "relative",
    marginTop: -80
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0
  },
  nameInfo: {
    marginTop: 35
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF"
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  }
});

export default Profile;
