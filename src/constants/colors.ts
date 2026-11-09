/**
 * Bảng màu dùng chung cho toàn ứng dụng.
 * Mọi màn hình phải lấy màu từ đây để giao diện đồng nhất.
 */
const colors = {
  primary: '#386B54',
  primaryDark: '#28503F',
  primaryLight: '#E4EEE7',

  background: '#F4F1E8',
  surface: '#FFFEFA',
  border: '#E5DFD3',
  hero: '#28503F',
  heroText: '#FFFEFA',
  heroMuted: '#D5E2D9',

  text: '#25312B',
  textMuted: '#7C8179',
  white: '#FFFFFF',

  online: '#438B69',
  danger: '#C8504E',
  dangerLight: '#FBE8E2',
  warning: '#B57828',
  warningLight: '#FFF1D8',

  bubbleMine: '#386B54',
  bubbleMineText: '#FFFFFF',
  bubbleOther: '#FFFEFA',
  bubbleOtherText: '#25312B',
} as const;

export default colors;
