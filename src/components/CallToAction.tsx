import { config } from "../config";
import "./styles/CallToAction.css";

const CallToAction = () => {
  return (
    <div className="cta-section">
      <div className="cta-content">
        <span className="cta-label">LET'S BUILD SOMETHING</span>

        <h2>
          Have an idea?
          <br />
          <span>Let's talk.</span>
        </h2>

        <div className="cta-buttons">
          <a
            href={config.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
            data-cursor="disable"
          >
            View GitHub →
          </a>

          <a
            href={config.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn"
            data-cursor="disable"
          >
            Connect on LinkedIn →
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;