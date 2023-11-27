import Badge from '../badge'

const Bio: React.FC = () => (
  <article className="typography">
    <p>
      I am Tran Tien, an {new Date().getFullYear() - 2004} years old Developer from Vietnam. I am a
      self-taught developer who loves to code and build things.
    </p>

    <span className="flex flex-wrap items-center gap-2">
      <p>I am working with </p>
      <Badge src="/skills/typescript.svg" alt="TS" text="TypeScript" />
      <Badge src="/skills/nextjs.svg" alt="NextJS" text="NextJS" />
      <Badge src="/skills/nestjs.svg" alt="NestJs" text="NestJs" />
      <p> and more.</p>
    </span>
  </article>
)

export default Bio
