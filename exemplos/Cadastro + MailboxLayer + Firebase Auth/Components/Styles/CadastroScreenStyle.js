import { Colors, Fonts } from '../../Themes'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
  },
  underline: {
    color: Colors.purple,
  },
  input: {
    fontSize: 17,
  },
  button: {
    color: Colors.purple,
  },
  title: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h1 * 1.5,
    marginBottom: 40,
  },
  inputContainer: {
    marginBottom: 10,
  },
  emailSuggestion: {
    flexDirection: 'row',
  },
  suggestionText: {
    fontSize: 14,
    paddingLeft: 5,
  },
  suggestionButton: {
    color: Colors.purple,
  }
})
