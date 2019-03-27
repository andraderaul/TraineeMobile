import { Colors, Fonts } from '../../Themes'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
  },
  topInput: {
    fontSize: 17,
  },
  bottomInput: {
    fontSize: 17,
    marginBottom: 25,
  },
  button: {
    color: Colors.purple,
  },
  input: {
    marginTop: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h1 * 1.5,
    marginBottom: 40,
  }
})
