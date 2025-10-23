
import {IframeLocal } from "../ConvenceAboutUS/style" 

function Local() {

return(
    <div
  className="local-prestar-solar"
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "5rem",
  }}
>
  <h1 className="h1-loc-prestar" style={{ marginBottom: "2rem" }}>
    <strong style={{ fontSize: "2rem", fontWeight: 700 }}>LOCALIZAÇÃO</strong>
  </h1>

  <IframeLocal
    className="iframe-localization"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.6570170759464!2d-52.5486442237166!3d-25.979286654853208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eff9f12d38c3ad%3A0x60f9f0cd7ca7b993!2sR.%20da%20Liberdade%2C%202021%20-%20Cel.%20Vivida%2C%20PR%2C%2085550-000!5e0!3m2!1sen!2sbr!4v1749150522825!5m2!1sen!2sbr"
    width="600"
    height="300"
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
   
  ></IframeLocal>
</div>
)
}
export default Local;