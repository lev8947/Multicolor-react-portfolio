import "./intro.css"
import Me from "../../img/Me.png"

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Simon King</h1>
          <div className="i-title">
           <div className="i-title-wrapper">
            <div className="i-title-item">Full Stack Web Developer</div>
            <div className="i-title-item">Frontend ✓</div>
            <div className="i-title-item">Backend ✓</div>
            <div className="i-title-item">Entrepreneur</div>
            <div className="i-title-item">Philanthropist</div>
            <div className="i-title-item">Demigod</div>
           </div>
          </div>
          <div className="i-desription">
          Wicki-wicki-wild Wicki-wild Wicki-wicki wild wild West Jim West, desperado
          Rough rider, no you don't want nada None of this, six-gunnin' this, brother runnin' this
          Buffalo soldier, look, it's like I told ya Any damsel that's in distress
          Be outta that dress when she meet Jim West Rough neck so go check the law and abide
          Watch your step or flex and get a hole in your side Swallow your pride, don't let your lip react
          You don't wanna see my hand where my hip be at With Artemus, from the start of this, runnin' the game
          James West, tamin' the West, so remember the name
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  )
}

export default Intro
