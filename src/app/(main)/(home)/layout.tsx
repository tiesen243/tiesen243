interface Props {
  hero: React.ReactNode
  about: React.ReactNode
  projects: React.ReactNode
  contact: React.ReactNode
}

const HomePage: React.FC<Props> = (props) => (
  <>
    {props.hero}
    {props.about}
    {props.projects}
    {props.contact}
  </>
)

export default HomePage
