import Badge from '@/components/badge'

const Bio: React.FC = () => (
  <>
    <p>
      I am Tran Tien, an {new Date().getFullYear() - 2004} years old Developer from Vietnam. I am a
      self-taught developer who loves to code and build things.
    </p>
    <p className="flex flex-wrap items-center gap-2">
      I am working with
      <Badge src="/nextjs.svg" alt="NextJS" text="NextJS" href="https://nextjs.org/" />
      <Badge src="/react.svg" alt="React" text="React" href="https://reactjs.org/" />
      <Badge
        src="/typescript.svg"
        alt="TypeScript"
        text="TypeScript"
        href="https://typescriptlang.org/"
      />
      and more.
    </p>
  </>
)

export default Bio
