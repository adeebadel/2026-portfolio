import "./styles/certificates.css";
import { config } from "../config";

const Certificates = () => {
  return (
    <section className="certificates-section" id="certificates">
      <div className="certificates-container">
        <div className="certificates-heading">
          <span>CERTIFICATIONS / 008</span>

          <h2>
            My <strong>Certificates</strong>
          </h2>

          <p>
            Certifications, courses, and professional learning across
            data science, software, business, and technology.
          </p>
        </div>

        <div className="certificates-grid">
          {config.certificates.map((certificate, index) => (
            <div className="certificate-card" key={certificate.title}>
              <div className="certificate-top">
                <span className="certificate-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="certificate-type">
                  {certificate.credential}
                </span>
              </div>

              <div className="certificate-content">
                <div className="certificate-mark">
                  {certificate.issuer.includes("IBM")
                    ? "IBM"
                    : certificate.issuer.includes("AIESEC")
                    ? "AIESEC"
                    : certificate.issuer.includes("Peunier")
                    ? "PEUNIER"
                    : certificate.issuer.includes("Udemy")
                    ? "UDEMY"
                    : "CERT"}
                </div>

                <h3>{certificate.title}</h3>

                <p className="certificate-issuer">
                  {certificate.issuer}
                </p>

                {certificate.date && (
                  <p className="certificate-date">
                    {certificate.date}
                  </p>
                )}
              </div>

              <div className="certificate-bottom">
                <div className="certificate-line" />

                {certificate.verifyLink && (
                  <a
                    href={certificate.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certificate-verify"
                  >
                    VERIFY CREDENTIAL ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;