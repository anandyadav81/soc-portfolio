function App() {
  return (
    <div
      style={{
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          padding: "40px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          Anand Yadav
        </h1>

        <h2 style={{
  textAlign: "center",
  color: "#38bdf8",
  marginBottom: "20px",
}}>
  SOC Analyst L1 Aspirant
</h2>

<h3 style={{ color: "#94a3b8", textAlign: "center" }}>
  Cybersecurity | SOC Operations | Threat Detection
</h3>


        <p
          style={{
            textAlign: "center",
            maxWidth: "800px",
            margin: "auto",
            lineHeight: "1.8",
          }}
        >
          Cybersecurity enthusiast focused on Security Operations Center (SOC),
          Threat Monitoring, Vulnerability Assessment, Incident Response and
          Network Security.
        </p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "30px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="/resume/Anand_Yadav_SOC_L1_Resume.pdf"
            target="_blank"
          >
            <button
              style={{
                padding: "12px 20px",
                background: "#38bdf8",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Download Resume
            </button>
          </a>

          <a
            href="https://github.com/anandyadav81"
            target="_blank"
          >
            <button
              style={{
                padding: "12px 20px",
                background: "#1e293b",
                color: "white",
                border: "1px solid #38bdf8",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              GitHub
            </button>
          </a>

          <a
            href="https://www.linkedin.com/in/anand-yadav-4696772ab/"
            target="_blank"
          >
            <button
              style={{
                padding: "12px 20px",
                background: "#1e293b",
                color: "white",
                border: "1px solid #38bdf8",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              LinkedIn
            </button>
          </a>
        </div>

        <hr style={{ margin: "50px 0" }} />

        <h2>Technical Skills</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
            gap: "15px",
          }}
        >
          {[
            "Wireshark",
            "Nmap",
            "Burp Suite",
            "OWASP ZAP",
            "Metasploit",
            "SQLMap",
            "Kali Linux",
            "Python",
            "TCP/IP",
            "DNS",
            "SOC Fundamentals",
            "Network Security",
          ].map((skill) => (
            <div
              key={skill}
              style={{
                background: "#1e293b",
                padding: "15px",
                borderRadius: "10px",
                textAlign: "center",
              }}
            >
              {skill}
            </div>
          ))}
        </div>

        <hr style={{ margin: "50px 0" }} />

        <h2>Experience</h2>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>Cybersecurity Intern - Redynox</h3>

          <p>26 June 2025 - 25 July 2025 (Remote)</p>

          <ul>
            <li>Worked with Wireshark and OWASP ZAP</li>
            <li>Performed Vulnerability Assessment activities</li>
            <li>Learned Penetration Testing fundamentals</li>
            <li>Studied OWASP Top 10 security risks</li>
            <li>Gained exposure to Incident Response workflows</li>
          </ul>
        </div>

        <hr style={{ margin: "50px 0" }} />

        <h2>Projects</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h3>Web Vulnerability Assessment</h3>
            <p>
              Performed testing on vulnerable applications and documented
              findings with remediation recommendations.
            </p>
          </div>

          <div
            style={{
              background: "#1e293b",
              padding: "20px",
              borderRadius: "10px",
            }}
          >
            <h3>Network Traffic Analysis Lab</h3>
            <p>
              Captured and analyzed packets using Wireshark to identify traffic
              anomalies and suspicious activities.
            </p>
          </div>
        </div>

        <hr style={{ margin: "50px 0" }} />

<h2>Certifications</h2>


<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "15px",
  }}
>
  <div style={{ background:"#1e293b", padding:"15px", borderRadius:"10px" }}>
    <a href="/certificates/cisco.pdf" target="_blank" style={{ color:"white", textDecoration:"none" }}>
      Cisco Introduction to Cybersecurity
    </a>
  </div>

  <div style={{ background:"#1e293b", padding:"15px", borderRadius:"10px" }}>
    <a href="/certificates/tatacyber.pdf" target="_blank" style={{ color:"white", textDecoration:"none" }}>
      Tata Cybersecurity Analyst Simulation
    </a>
  </div>

  <div style={{ background:"#1e293b", padding:"15px", borderRadius:"10px" }}>
    <a href="/certificates/linkedin.pdf" target="_blank" style={{ color:"white", textDecoration:"none" }}>
      LinkedIn Cybersecurity Awareness
    </a>
  </div>

  <div style={{ background:"#1e293b", padding:"15px", borderRadius:"10px" }}>
    <a href="/certificates/hackerrankpython.pdf" target="_blank" style={{ color:"white", textDecoration:"none" }}>
      HackerRank Python
    </a>
  </div>

  <div style={{ background:"#1e293b", padding:"15px", borderRadius:"10px" }}>
    <a href="/certificates/EC-Council.pdf" target="_blank" style={{ color:"white", textDecoration:"none" }}>
      EC-Council Injection Attacks
    </a>
  </div>

  <div style={{ background:"#1e293b", padding:"15px", borderRadius:"10px" }}>
    <a href="/certificates/redynox.pdf" target="_blank" style={{ color:"white", textDecoration:"none" }}>
      Redynox Internship Certificate
    </a>
  </div>
</div>


<hr style={{ margin: "50px 0" }} />

        <h2>Education</h2>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>Bachelor of Computer Applications (BCA)</h3>
          <p>Maharana Pratap Group of Institutions</p>
          <p>CGPA: 6.36 / 10</p>
        </div>

        <hr style={{ margin: "50px 0" }} />

        <h2>Contact</h2>

        <p>Email: anandp9795@gmail.com</p>
        <p>Location: Kanpur, Uttar Pradesh</p>
      </div>
    </div>
  );
}

export default App;