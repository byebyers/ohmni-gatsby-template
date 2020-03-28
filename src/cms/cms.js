import CMS from 'netlify-cms-app'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'

CMS.registerPreviewTemplate('home', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
