// app/page.tsx
export const revalidate = 10; // Website akan mengecek pembaruan data setiap 10 detik
import { client } from '../sanity/lib/client'
import FadeIn from './components/FadeIn' // Memanggil komponen animasi

export default async function Home() {
  const profileData = await client.fetch(`*[_type == "profile"][0]{ ..., "profileImageUrl": profileImage.asset->url, "cvUrl": cv.asset->url }`)
  const experiences = await client.fetch(`*[_type == "experience"] | order(_createdAt asc) {
    _id, period, company, role, description, "imageUrl": image.asset->url
  }`)
  const works = await client.fetch(`*[_type == "work"] | order(_createdAt desc) {
    _id, tag, title, description, "imageUrl": image.asset->url
  }`)

  const p = profileData || {
    fullName: "Aliya Maysandra",
    title: "Undergraduate Law Student",
    keywords: "Legal research, legal writing, public policy analysis, case management.",
    heroTitle: "A composed portfolio for a precise legal mind.",
    heroDescription: "A luxury-minimal direction for Aliya Maysandra: black, ivory, taupe, and deep burgundy. Much more elegant, restrained, and different from Pustaka Asyfi’s warm Islamic publisher visual.",
    gpa: "3.90",
    statTwo: "3rd",
    statTwoLabel: "Legal Opinion",
    statThree: "17",
    statThreeLabel: "of 94 countries",
    committee: "44",
    profileTitle: "Law as clarity, discipline, and impact.",
    profileDescription: "Aliya memandang hukum sebagai instrumen keadilan yang membumi. Mockup ini menampilkan personal brand secara elegan, minimal, dan premium — bukan menggunakan gaya kartu warm seperti Pustaka Asyfi.",
    location: "Bekasi, Indonesia",
    phone: "+62 813-2489-1320",
    email: "aliyamaysandra77@gmail.com",
    linkedin: "linkedin.com/in/aliya-maysandra"
  }

  return (
    <div className="page">
      <aside className="rail">
        <div className="monogram">{p.fullName?.toUpperCase()}</div>
        <nav className="railnav">
          <a href="#profile">Profile</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="monogram">2026</div>
      </aside>

      <main className="content">
        
        {/* Hero menggunakan FadeIn */}
        <FadeIn className="hero">
          <div className="copy">
            <div>
              <div className="label">Legal Portfolio</div>
              <h1 className="h1">{p.heroTitle}</h1>
              <p className="lead">{p.heroDescription}</p>
              
              <div className="buttons">
                <a 
                  href={p.cvUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-download" // (Gunakan class CSS bawaan template Anda)
                >
                  Download CV
                </a>
                <a href="#work" className="btn alt">View Work</a>
              </div>
            </div>
            
            <div className="cards">
              <div className="card"><strong>{p.gpa}</strong><span>GPA</span></div>
              <div className="card"><strong>{p.statTwo}</strong><span>{p.statTwoLabel}</span></div>
              <div className="card"><strong>{p.statThree}</strong><span>{p.statThreeLabel}</span></div>
              <div className="card"><strong>{p.committee}</strong><span>Committee led</span></div>
            </div>
          </div>
          
          <aside className="side">
            <div className="portrait">
              {p.profileImageUrl ? (
                <img src={p.profileImageUrl} alt={p.fullName} className="portrait-img" />
              ) : (
                /* Fallback gradien jika foto belum diunggah di Sanity */
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(160deg, #0d0d0d, #6e182b 65%, #a89582)' }}></div>
              )}
            </div>
            <div>
              <div className="fact">
                <strong>{p.fullName}</strong><span>{p.title}</span>
              </div>
              <p className="muted">{p.keywords}</p>
            </div>
          </aside>
        </FadeIn>

        {/* Profile menggunakan FadeIn */}
        <FadeIn className="section split" id="profile">
          <div>
            <div className="label">Profile</div>
            <h2>{p.profileTitle}</h2>
          </div>
          <p className="lead">{p.profileDescription}</p>
        </FadeIn>

        {/* Experience menggunakan FadeIn */}
        <FadeIn className="section" id="experience">
          <div className="label">Experience</div>
          <h2>Experience with evidence.</h2>
          <div className="list">
            {experiences.map((exp: any) => (
              <div className="row" key={exp._id}>

                <div className="tag">{exp.period}</div>
                <div>
                  <h3>{exp.company}</h3>
                  <p className="muted">{exp.description}</p>
                </div>
                <div>{exp.role}</div>

                {/* Gambar Rahasia yang akan muncul saat di-hover */}
                {exp.imageUrl && (
                  <img src={exp.imageUrl} alt={exp.company} className="row-hover-image" />
                )}

              </div>
            ))}
          </div>
        </FadeIn>

        {/* Work menggunakan FadeIn */}
        <FadeIn className="section" id="work">
          <div className="label">Selected Work</div>
          <h2>Writing, advocacy, research.</h2>
          <div className="writing">
            {works.map((work: any) => (
              <article className="paper" key={work._id}>

                {/* Bagian Foto */}
                {work.imageUrl && (
                  <div className="paper-image-wrapper">
                    <img src={work.imageUrl} alt={work.title} className="paper-image" />
                  </div>
                )}

                {/* Bagian Teks */}
                <div className="paper-content">
                  <div>
                    <div className="tag">{work.tag}</div>
                    <h3>{work.title}</h3>
                  </div>
                  <p className="muted">{work.description}</p>
                </div>

              </article>
            ))}
          </div>
        </FadeIn>

        {/* Contact menggunakan FadeIn */}
        <FadeIn className="section contact" id="contact">
          <div className="split">
            <div>
              <div className="label">Contact</div>
              <h2>Available for internship and research collaboration.</h2>
            </div>
            <p className="muted">
              {p.location}<br />
              {p.phone}<br />
              {p.email}<br />
              {p.linkedin}
            </p>
          </div>
        </FadeIn>

      </main>
    </div>
  )
}