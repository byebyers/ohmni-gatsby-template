import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout/layout'
import Container from '../components/container/container'
import PreviewCompatibleImage from '../components/preview-compatible-image'
import Content, { HTMLContent } from '../components/content/content'
import { kebabCase } from 'lodash'
import TagSection from '../components/tag-section/tag-section'
import Share from '../components/share/share'
import './blog-post.scss'

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  featuredimage,
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
    <Container>
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
              image: featuredimage,
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
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  author: PropTypes.string,
  thumbnail: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { blogposts: post } = data
  const siteUrl = data.blogsite.siteMetadata.siteUrl
  const imgPath = post.frontmatter.featuredimage.childImageSharp.fluid.src
  const siteImg = siteUrl + imgPath
  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        featuredimage={post.frontmatter.featuredimage}
        author={post.frontmatter.author}
        thumbnail={post.fields.author.frontmatter.thumbnail}
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
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
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
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 120, quality: 100) {
              ...GatsbyImageSharpFluid
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
