import "./about.css"
import Award from "../../img/blue.png"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src="https://images.unsplash.com/photo-1519224335631-9f58c3f4b285?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=864&q=80" alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
      <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am all-go at all times, give me a task, or work with me on a project - let's build something 
          beautiful together. 
        </p>
        <p className="a-desc">
        Born in a flooding hospital. 
        Simon King is one of the few known direct decendants 
        of Skandinavian Viking settler and conqueror Ragnar Lothbrok; 
        made famous presently by the series 'Vikings'. 
        Simon King wields the power passed down to him from Odin and Zeus. 
        He forges webpages and writes code with a hammer and anvil. 
        Gods new and old gaze from the clouds in disbelief. 
        A well known prophecy was foretold about a chosen one that 
        would bring peace to both the worlds of the living and undead. 
        Simon King doesn't have time for fairytales, so don't hit him up
        unless you have work. 
        </p>
        <div className="a-award">
          <img src={Award} alt="Blue tree" className="a-award-img"/>
          <div className="a-awards-texts">
          <h4 className="a-award-title">Donate to the Blue Tree Project</h4>
            <p className="a-award-desc">
            Our mission is to help spark difficult conversations and encourage people 
            to speak up when battling mental health concerns. By spreading the paint 
            and spreading the message that "it’s OK to not be OK", we can help break 
            down the stigma that’s still largely attached to mental health.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default About
