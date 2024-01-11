import path from 'path'
import fs from 'fs'
import { compileMDX } from 'next-mdx-remote/rsc'
import rehypeHighlight from 'rehype-highlight'
import { toast } from 'react-toastify'

// ---------------- TOAST ----------------

export const successToast = (message: string) =>
  toast.success(message, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })

export const errorToast = (message: string) =>
  toast.error(message, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })

// ---------------- MDX ----------------

const rootDir = path.join(process.cwd(), 'contents')

type Post = {
  meta: PostMeta
  content: React.ReactElement<any, string | React.JSXElementConstructor<any>>
}

export const getPostBySlug = async (slug: string): Promise<Post> => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = path.join(rootDir, `${realSlug}.mdx`)

  const fileContents = fs.readFileSync(filePath, 'utf8')

  const { frontmatter, content } = (await compileMDX({
    source: fileContents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [rehypeHighlight as any],
      },
    },
  })) as {
    frontmatter: PostMeta
    content: React.ReactElement<any, string | React.JSXElementConstructor<any>>
  }

  return {
    meta: { ...frontmatter, slug: `${realSlug}.html` },
    content,
  }
}

export const getAllPostsMetadata = async (): Promise<PostMeta[]> => {
  const files = fs.readdirSync(rootDir)

  const Metas = await Promise.all(
    files.map(async (file) => {
      const { meta } = await getPostBySlug(file)
      return meta
    })
  )

  return Metas
}
