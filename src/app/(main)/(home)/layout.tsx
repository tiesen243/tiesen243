interface Props {
  hero: React.ReactNode
  about: React.ReactNode
  projects: React.ReactNode
  contact: React.ReactNode
}

const HomePage: React.FC<Props> = (props) => (
  <div className="snap-y snap-mandatory overflow-x-hidden overflow-y-scroll">
    {props.hero}
    {props.about}
    {props.projects}
    {props.contact}
  </div>
)

export default HomePage
