import CMS from 'netlify-cms-app'

import typography from '../utils/typography'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPagePreview from './preview-templates/BlogPagePreview'

CMS.registerPreviewTemplate('home', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('blog', BlogPagePreview)

CMS.registerPreviewStyle(typography.toString(), { raw: true })
