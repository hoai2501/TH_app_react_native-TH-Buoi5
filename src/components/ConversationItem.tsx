/**
 * ConversationItem: một cuộc trò chuyện trên màn hình HomeScreen.
 * Hiển thị avatar, họ tên đối phương, tin nhắn cuối, thời gian gửi và badge số tin chưa đọc.
 */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../constants/colors';
import type { ConversationListItem } from '../types/conversation';
import { formatLastMessagePreview } from '../utils/chatUtils';
import { formatConversationTime } from '../utils/dateUtils';
import { formatDisplayName } from '../utils/displayUtils';
import Avatar from './Avatar';

export interface ConversationItemProps {
  item: ConversationListItem;
  currentUid: string;
  onPress: (item: ConversationListItem) => void;
}

export const ConversationItem: React.FC<ConversationItemProps> = ({
  item,
  currentUid,
  onPress,
}) => {
  const { conversation, partner, unreadCount } = item;
  const fullName = formatDisplayName(partner?.fullName || 'Người dùng');
  const avatar = partner?.avatar || '';
  const isOnline = partner?.isOnline ?? false;
  const hasUnread = unreadCount > 0;

  const previewText = formatLastMessagePreview(
    conversation.lastMessage,
    currentUid,
  );
  const timeText = formatConversationTime(
    conversation.lastMessage?.createdAt || conversation.updatedAt,
  );

  return (
    <TouchableOpacity
      style={[styles.card, hasUnread && styles.cardUnread]}
      onPress={() => onPress(item)}
      activeOpacity={0.75}>
      <Avatar
        fullName={fullName}
        uri={avatar}
        size={52}
        showOnline
        isOnline={isOnline}
      />
      <View style={styles.contentBox}>
        <View style={styles.topRow}>
          <Text
            style={[styles.name, hasUnread && styles.nameUnread]}
            numberOfLines={1}>
            {fullName}
          </Text>
          <Text style={[styles.time, hasUnread && styles.timeUnread]}>
            {timeText}
          </Text>
        </View>
        <View style={styles.bottomRow}>
          <Text
            style={[styles.preview, hasUnread && styles.previewUnread]}
            numberOfLines={1}>
            {previewText}
          </Text>
          {hasUnread ? (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                {unreadCount > 99 ? '99+' : unreadCount}
              </Text>
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    paddingHorizontal: 16,
    paddingVertical: 15,
    borderRadius: 20,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#34483B',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 2,
  },
  cardUnread: {
    borderColor: colors.primaryLight,
    backgroundColor: '#F7FBF7',
  },
  contentBox: {
    flex: 1,
    marginLeft: 12,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  name: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    marginRight: 8,
  },
  nameUnread: {
    fontWeight: '700',
  },
  time: {
    fontSize: 12,
    color: colors.textMuted,
  },
  timeUnread: {
    color: colors.primary,
    fontWeight: '600',
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  preview: {
    flex: 1,
    fontSize: 14,
    color: colors.textMuted,
    marginRight: 8,
  },
  previewUnread: {
    color: colors.text,
    fontWeight: '600',
  },
  badge: {
    minWidth: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
  },
  badgeText: {
    color: colors.white,
    fontSize: 11,
    fontWeight: '700',
  },
});

export default ConversationItem;
