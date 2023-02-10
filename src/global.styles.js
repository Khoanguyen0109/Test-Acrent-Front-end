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
});

export default styles;
