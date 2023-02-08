import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <p className="font-light">
        This site was created to demonstrate my mastery of Redwood: Look on my
        works, ye mighty, and despair!
      </p>
      <img src="https://i.imgflip.com/r0cdr.jpg?a465192" alt="A true pirate" />
    </>
  )
}

export default AboutPage
