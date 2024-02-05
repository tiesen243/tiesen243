import Image, { ImageProps } from 'next/image'
import { Button, ButtonProps } from './ui/button'
import type { MDXComponents } from 'mdx/types'

const customMdxComponents: MDXComponents = {
  a: (props) => <a {...props} target="_blank" rel="noopener noreferrer" />,
  img: (props) => (
    <Image {...(props as ImageProps)} alt={props.alt ?? ''} width={1920} height={1080} />
  ),
  button: (props) => <Button {...(props as ButtonProps)} />,
  code: (props) => <code {...props} className="font-mono" />,
  pre: (props) => <pre {...props} className="*:selection:bg-white *:selection:text-black" />,
}

export default customMdxComponents
