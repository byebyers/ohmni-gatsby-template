import React from 'react'
import PropTypes from 'prop-types'

//Components
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout/layout'
import Container from '../components/container/container'
import PreviewCompatibleImage from '../components/preview-compatible-image'
import Content, { HTMLContent } from '../components/content/content'
import { kebabCase } from 'lodash'
import TagSection from '../components/tag-section/tag-section'
import Share from '../components/share/share'

//Styles
import './blog-post.scss'

/* Check Netlify Config file for field data */
export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  image,
  author,
  thumbnail,
  date,
  timeToRead,
  tags,
  title,
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
          <div className="post-info">
            <div className="post-author-pic">
              <Link to={`/authors/authors-${kebabCase(author)}/`}>
                <PreviewCompatibleImage
                  imageInfo={{
                    image: thumbnail,
                    alt: `featured image for post ${title}`,
                  }}
                />
              </Link>
            </div>
            <div className="post-detail-block">
              <div className="post-author">
                <Link to={`/authors/authors-${kebabCase(author)}/`} className="text-black">
                  {author}
                </Link>
              </div>
              <div className="post-fine-details">
                <span>{date} ·&nbsp;</span>
                <span>{timeToRead} min read</span>
              </div>
            </div>
          </div>
          <Share
            socialConfig={{
              config: {
                url: `${url}${slug}`,
                title,
              },
            }}
            tags={tags}
          />
        </div>
        <div className="post-image">
          <PreviewCompatibleImage
            imageInfo={{
              image: image,
              alt: `featured image thumbnail for author ${title}`,
            }}
          />
          <div className="post-fine-details photo-details">
            <span>Photo by: {photoCredit}</span>
          </div>
        </div>
        <div className="post-text">
          <PostContent content={content} />
        </div>
        <TagSection tags={tags} />
      </section>
    </Container>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  author: PropTypes.string,
  thumbnail: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { blogposts: post } = data
  const siteUrl = data.blogsite.siteMetadata.siteUrl
  const imgPath = post.frontmatter.image.childImageSharp.fluid.originalImg
  const siteImg = siteUrl + imgPath
  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
        author={post.frontmatter.author}
        thumbnail={post.fields.author.frontmatter.image}
        date={post.frontmatter.date}
        timeToRead={post.timeToRead}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
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
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        photoCredit={post.frontmatter.photoCredit}
        url={siteUrl}
        slug={post.fields.slug}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

/* Filters the following.
  blogsite = gets blog post page's metadata for share.js
  blogposts = gets markdownRemark for specified posts */
export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    blogsite: site {
      siteMetadata {
        siteUrl
        social {
          twitter
        }
      }
    }
    blogposts: markdownRemark(id: { eq: $id }) {
      id
      html
      timeToRead
      fields {
        author {
          frontmatter {
            image {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        image {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
              originalImg
            }
          }
        }
        author
        tags
        photoCredit
      }
    }
  }
`
