import { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import { Button, ButtonProps } from './ui/button'

const customMdxComponents: MDXComponents = {
  a: (props) => <a {...props} target="_blank" rel="noopener noreferrer" />,
  // eslint-disable-next-line jsx-a11y/alt-text
  img: (props) => <Image {...(props as ImageProps)} width={1920} height={1080} />,
  button: (props) => <Button {...(props as ButtonProps)} />,
  code: (props) => <code {...props} className="font-mono" />,
}

export default customMdxComponents
