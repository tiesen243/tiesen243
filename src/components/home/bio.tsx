import Image from 'next/image'
import Badge from '../badge'

const Bio: React.FC = () => (
  <article className="grid grid-cols-3 gap-2">
    <section className="typography col-span-2">
      <p>
        I am Tran Tien, an {new Date().getFullYear() - 2004} years old Developer from Vietnam. I am
        a self-taught developer who loves to code and build things.
      </p>

      <span className="flex flex-wrap items-center gap-2 prose-p:my-0">
        <p>I am working with </p>
        <Badge tag="TypeScript" type="dev" />
        <Badge tag="Next.js" type="dev" />
        <Badge tag="NestJS" type="dev" />
        <p> and more.</p>
      </span>
    </section>

    <Image src="/yuki.webp" alt="Yuki" width={250} height={300} className="rounded" />
  </article>
)

export default Bio
