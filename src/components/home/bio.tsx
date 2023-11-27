import Badge from '@/components/badge'

const Bio: React.FC = () => (
  <>
    <p>
      I am Tran Tien, an {new Date().getFullYear() - 2004} years old Developer from Vietnam. I am a
      self-taught developer who loves to code and build things.
    </p>
    <p className="flex flex-wrap items-center gap-2">
      I am working with
      <Badge src="/skills/typescript.svg" alt="TS" text="TypeScript" />
      <Badge src="/skills/nextjs.svg" alt="NextJS" text="NextJS" />
      <Badge src="/skills/nestjs.svg" alt="NestJs" text="NestJs" />
      and more.
    </p>
  </>
)

export default Bio
