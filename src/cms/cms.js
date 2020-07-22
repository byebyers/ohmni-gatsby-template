/* Data from Netlify.com */
import CMS from 'netlify-cms-app'

/* Data from typography.js */
import typography from '../utils/typography'

/* Data from Cloudinary */
import cloudinary from 'netlify-cms-media-library-cloudinary'

//Components
import IndexPagePreview from './preview-templates/IndexPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import AuthorPagePreview from './preview-templates/AuthorPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import EventPostPreview from './preview-templates/EventPagePreview'

/* This registers templates with the corresponding
  data from netlify config file */
CMS.registerPreviewTemplate('home', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('authors', AuthorPagePreview)
CMS.registerPreviewTemplate('blogPost', BlogPostPreview)
CMS.registerPreviewTemplate('events', EventPostPreview)

/* This registers styles from typography.js */
CMS.registerPreviewStyle(typography.toString(), { raw: true })

/* This registers media library from Cloudinary */
CMS.registerMediaLibrary(cloudinary);
