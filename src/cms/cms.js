import CMS from 'netlify-cms-app'

import typography from '../utils/typography'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPagePreview from './preview-templates/BlogPagePreview'
import AuthorPagePreview from './preview-templates/AuthorPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerPreviewTemplate('home', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('blog', BlogPagePreview)
CMS.registerPreviewTemplate('authors', AuthorPagePreview)
CMS.registerPreviewTemplate('blogPost', BlogPostPreview)


CMS.registerPreviewStyle(typography.toString(), { raw: true })
