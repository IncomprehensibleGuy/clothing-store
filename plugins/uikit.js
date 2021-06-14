import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

export default (context, inject) => {
  UIkit.use(Icons)
  inject('uikit', UIkit)
}
