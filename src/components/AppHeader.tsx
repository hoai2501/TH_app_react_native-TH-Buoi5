/**
 * AppHeader: thanh tiêu đề đồng nhất trên các màn hình của ứng dụng.
 */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../constants/colors';

export interface AppHeaderProps {
  title: string;
  subtitle?: string;
  onBackPress?: () => void;
  rightElement?: React.ReactNode;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  subtitle,
  onBackPress,
  rightElement,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftRow}>
        {onBackPress && (
          <TouchableOpacity
            onPress={onBackPress}
            style={styles.backButton}
            activeOpacity={0.7}>
            <Ionicons name="arrow-back" size={24} color={colors.text} />
          </TouchableOpacity>
        )}
        <View style={styles.titleBox}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          {subtitle ? (
            <Text style={styles.subtitle} numberOfLines={1}>
              {subtitle}
            </Text>
          ) : null}
        </View>
      </View>
      {rightElement ? <View style={styles.rightBox}>{rightElement}</View> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 14,
    backgroundColor: colors.background,
  },
  leftRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  backButton: {
    marginRight: 12,
    padding: 4,
  },
  titleBox: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
    color: colors.text,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 13,
    color: colors.textMuted,
    marginTop: 5,
  },
  rightBox: {
    marginLeft: 12,
  },
});

export default AppHeader;
