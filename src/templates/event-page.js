import React from 'react'
import PropTypes from 'prop-types'

//Components
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout/layout'
import Container from '../components/container/container'
import PreviewCompatibleImage from '../components/preview-compatible-image'
import Content, { HTMLContent } from '../components/content/content'
import Share from '../components/share/share'

//Styles
import './blog-post.scss'

/* Check Netlify Config file for field data */
export const EventPostTemplate = ({
  title,
  start,
  end,
  image,
  contentComponent,
  description,
  content,
  helmet,
  photoCredit,
  url,
  slug,
}) => {
  const PostContent = contentComponent || Content

  return (
    <Container size={'regular'}>
      <section>
        {helmet || ''}
        <h1 className="post-title">{title}</h1>
        <p className="post-subheader">{description}</p>
        <div className="post-details">
          <div className="post-detail-block">
            <div className="post-author">
              <span>Begins {start} - Ends&nbsp;</span>
              <span>{end}</span>
            </div>
          </div>
          <Share
            socialConfig={{
              config: {
                url: `${url}${slug}`,
                title,
              },
            }}
          />
        </div>
        <div className="post-image">
          <PreviewCompatibleImage
            imageInfo={{
              image: image,
              alt: `featured image thumbnail for event ${title}`,
            }}
          />
          <div className="post-fine-details photo-details">
            <span>Photo by: {photoCredit}</span>
          </div>
        </div>
        <div className="post-text">
          <PostContent content={content} />
        </div>
      </section>
    </Container>
  )
}

const EventPage = ({ data }) => {
  const { eventPost: date } = data
  const siteUrl = data.eventSite.siteMetadata.siteUrl
  const imgPath = date.frontmatter.image
  const siteImg = siteUrl + imgPath
  return (
    <Layout>
      <EventPostTemplate
        title={date.frontmatter.title}
        start={date.frontmatter.start_date}
        end={date.frontmatter.end_date}
        image={date.frontmatter.image}
        contentComponent={HTMLContent}
        description={date.frontmatter.description}
        content={date.html}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${date.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${date.frontmatter.description}`}
            />
            <meta
              property="og:image"
              content={`${siteImg}`}
            />
            <meta
              name="twitter:image"
              content={`${siteImg}`}
            />
          </Helmet>
        }
        photoCredit={date.frontmatter.photoCredit}
        url={siteUrl}
        slug={date.fields.slug}
      />
    </Layout>
  )
}

EventPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default EventPage

export const pageQuery = graphql`
  query EventByID($id: String!) {
    eventSite: site {
      siteMetadata {
        siteUrl
        social {
          twitter
        }
      }
    }
    eventPost: markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        start_date(formatString: "dddd, MMMM Do")
        end_date(formatString: "dddd, MMMM Do")
        image
        description
        photoCredit
      }
    }
  }
`
