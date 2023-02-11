const styles = (theme) => ({
  '.word-break': {
    wordBreak: 'break-word',
  },
  '.center': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '.text-ellipsis': {
    whiteSpace: 'nowrap',
    overflow: ' hidden !important',
    textOverflow: 'ellipsis',
  },
  '.text-ellipsis-2row': {
    overflow: 'hidden',
    wordBreak: 'break-word',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': '2',
    '-webkit-box-orient': 'vertical',
  },
  '.text-ellipsis-5row': {
    overflow: 'hidden',
    wordBreak: 'break-word',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': '5',
    '-webkit-box-orient': 'vertical',
  },
});

export default styles;
