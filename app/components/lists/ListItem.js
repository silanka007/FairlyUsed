import React from "react";
import { View, Image, StyleSheet, TouchableHighlight } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

import colors from "../configs/colors";
import AppText from "./AppText";

const ListItem = ({ image, title, subTitle, onPress, renderRightActions }) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.listContainer}>
          <Image style={styles.image} source={image} />
          <View style={styles.textSection}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    width: "100%",
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginHorizontal: 20,
  },
  title: {
    fontWeight: "600",
    fontSize: 20,
  },
  subTitle: {
    fontWeight: "500",
    color: colors.medium,
  },
  textSection: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
});
