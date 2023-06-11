import Handlebars from 'handlebars'
import settingsProfile from './settingsProfile.tmpl'
import button from '../../partials/button/button.tmpl'
import input from '../../partials/input/input.tmpl'
import link from '../../partials/link/link.tmpl'

Handlebars.registerPartial('button', button)
Handlebars.registerPartial('input', input)
Handlebars.registerPartial('link', link)

export default Handlebars.compile(settingsProfile)({})