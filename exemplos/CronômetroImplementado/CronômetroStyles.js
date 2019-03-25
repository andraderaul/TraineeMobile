import { StyleSheet } from 'react-native'
import { Metrics } from '../../Themes/'

export default StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  }, 
  digitContainer: {
    flexDirection: 'row', 
    backgroundColor: '#F2F2F2',
    marginBottom: 15,
    paddingHorizontal: Metrics.doubleBaseMargin,
    paddingVertical: Metrics.marginVertical,
    borderRadius: 5,
  },
  iconContainer: {
    paddingVertical: Metrics.marginVertical * 2,
    flexDirection: 'row', 
    justifyContent: 'space-around',
  },
  digit: {
    fontSize: 65,
  },
  icon: {
    fontSize: Metrics.icons.xl * 1.2,
  },
  leftMargin: {
    marginLeft: Metrics.doubleBaseMargin * 2,
  },
  divider: {
    marginHorizontal: Metrics.baseMargin,
  }

})
