module.exports = (c) => ({
  self: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    visibility: 'hidden',
    zIndex: -1
  },

  open: {
    visibility: 'visible',
    zIndex: 15000
  },

  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,0.45)'
  },

  modal: {
    minWidth: 270,
    maxWidth: '100%',
    margin: 'auto',
    background: 'rgba(255,255,255,0.95)',
    padding: 0,
    borderRadius: 7,
    textAlign: 'center'
  },

  buttons: {
    flexFlow: 'row',
    WebkitFlexFlow: 'row'
  },

  inner: {
    padding: 15,
    borderBottom: `1px solid ${c.midGray}`
  },

  title: {
    fontSize: '18px',
    fontWeight: 500
  },

  text: {
    marginTop: 5
  }
});