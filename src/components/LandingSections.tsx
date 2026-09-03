import { useState } from 'react'
import {
  ArrowRight,
  AtSign,
  Check,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  X,
} from 'lucide-react'
import { contact, faqs, gallery, services } from '../data/site'

const navItems = [
  ['Servicios', '#servicios'],
  ['Enfoque', '#enfoque'],
  ['Dirección', '#direccion'],
  ['Consultorio', '#consultorio'],
  ['Preguntas', '#preguntas'],
]

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a className="brand" href="#inicio" aria-label="Consultorio Integral Psique, inicio">
      <img src="/assets/logo-psique.png" alt="" width="54" height="54" />
      <span>
        Consultorio Integral
        {!compact && <strong>Psique</strong>}
      </span>
    </a>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <button
          className="menu-button"
          type="button"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? 'nav open' : 'nav'} aria-label="Navegación principal">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="button button-small" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
            <MessageCircle size={18} /> Consultar
          </a>
        </nav>
      </div>
    </header>
  )
}

export function Hero() {
  return (
    <main id="inicio">
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">Salud mental infantojuvenil</p>
            <h1>Consultorio Integral <em>Psique</em></h1>
            <p className="hero-lead">
              Acompañamos a niños, adolescentes y sus familias con una mirada cercana, profesional e interdisciplinaria.
            </p>
            <div className="hero-actions">
              <a className="button" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={20} /> Consultar por WhatsApp
              </a>
              <a className="text-link" href="#servicios">
                Conocer las áreas <ArrowRight size={18} />
              </a>
            </div>
            <p className="hero-note">
              <MapPin size={17} /> Atención presencial en Monte Grande y opciones virtuales.
            </p>
          </div>
          <div className="hero-visual reveal delay-1">
            <img
              src="/assets/consultorio-infantil.jpeg"
              alt="Espacio de atención infantil de Consultorio Integral Psique"
              width="960"
              height="1280"
            />
            <div className="hero-badge">
              <span>Atención integral</span>
              <strong>Psicología · Psicopedagogía · Fonoaudiología</strong>
            </div>
          </div>
        </div>
      </section>
      <TrustStrip />
    </main>
  )
}

function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Información destacada">
      <div className="container trust-grid">
        {[
          ['Atención especializada', 'Infancia y adolescencia'],
          ['Modalidad flexible', 'Presencial y virtual'],
          ['Atención coordinada', 'Trabajo interdisciplinario'],
          ['Cobertura', 'Consultanos por atención con CUD'],
        ].map(([title, description]) => (
          <div key={title}>
            <Check aria-hidden="true" />
            <span><strong>{title}</strong>{description}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Services() {
  return (
    <section className="section services-section" id="servicios">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Áreas de atención</p>
            <h2>Un equipo que mira cada historia de forma integral</h2>
          </div>
          <p>Distintas especialidades trabajan con objetivos claros y una orientación acorde a cada etapa.</p>
        </div>
        <div className="services-grid">
          {services.map(({ title, description, icon: Icon }, index) => (
            <article className="service-item reveal" style={{ '--order': index } as React.CSSProperties} key={title}>
              <div className="service-icon"><Icon aria-hidden="true" /></div>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Approach() {
  return (
    <section className="section approach-section" id="enfoque">
      <div className="container approach-grid">
        <div className="approach-image">
          <img src="/assets/consultorio-enfoque.jpeg" alt="Consultorio privado preparado para entrevistas y orientación familiar" loading="lazy" width="1200" height="1600" />
        </div>
        <div className="approach-copy">
          <p className="eyebrow">Nuestro enfoque</p>
          <h2>Escuchar, comprender y acompañar en equipo</h2>
          <p>El trabajo integral permite observar cada situación desde diferentes perspectivas y acompañar también al entorno familiar.</p>
          <ul className="feature-list">
            <li><Check /> <span><strong>Mirada interdisciplinaria</strong>Articulamos entre profesionales cuando el proceso lo requiere.</span></li>
            <li><Check /> <span><strong>Objetivos personalizados</strong>Cada acompañamiento parte de necesidades y tiempos propios.</span></li>
            <li><Check /> <span><strong>Familias acompañadas</strong>Ofrecemos orientación para comprender y sostener los procesos cotidianos.</span></li>
          </ul>
        </div>
      </div>
      <div className="container process-block">
        <div className="process-title">
          <p className="eyebrow">Primer encuentro</p>
          <h2>Empezar es simple</h2>
        </div>
        <ol className="process-list">
          <li><span>1</span><div><strong>Escribinos</strong><p>Contanos brevemente el motivo de la consulta por WhatsApp.</p></div></li>
          <li><span>2</span><div><strong>Te orientamos</strong><p>Relevamos la información necesaria para comprender qué área puede acompañarlos.</p></div></li>
          <li><span>3</span><div><strong>Coordinamos</strong><p>Asignamos al profesional adecuado y acordamos el primer encuentro.</p></div></li>
        </ol>
      </div>
    </section>
  )
}

export function Director() {
  const [portraitAvailable, setPortraitAvailable] = useState(true)

  return (
    <section className="section director-section" id="direccion">
      <div className="container director-grid">
        <div className={portraitAvailable ? 'director-photo' : 'director-photo pending-photo'}>
          {portraitAvailable ? (
            <img
              className="director-portrait"
              src="/assets/jimena-cofman.jpg"
              alt="Licenciada Jimena Cofman, directora de Consultorio Integral Psique"
              width="900"
              height="1600"
              loading="lazy"
              onError={() => setPortraitAvailable(false)}
            />
          ) : (
            <>
              <img src="/assets/logo-psique.png" alt="" width="185" height="185" />
              <span>Retrato profesional pendiente</span>
            </>
          )}
        </div>
        <div className="director-copy">
          <p className="eyebrow">Sobre Jimena</p>
          <blockquote>“Cada proceso comienza por hacer lugar a una escucha atenta y a una mirada integral.”</blockquote>
          <h2>Lic. Jimena Cofman</h2>
          <p className="director-role">Psicóloga TCC · Clínica infantojuvenil · Directora</p>
        </div>
      </div>
    </section>
  )
}

export function Gallery() {
  return (
    <section className="section gallery-section" id="consultorio">
      <div className="container">
        <div className="section-heading">
          <div><p className="eyebrow">El consultorio</p><h2>Nuestro espacio</h2></div>
          <p>Ambientes luminosos, privados y preparados para distintas formas de encuentro y trabajo.</p>
        </div>
        <div className="gallery-grid">
          {gallery.map((image, index) => (
            <figure key={image.src} className={`gallery-item gallery-${index + 1}`}>
              <img src={image.src} alt={image.alt} loading="lazy" width="960" height="1280" />
              <figcaption>{image.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Faq() {
  return (
    <section className="section faq-section" id="preguntas">
      <div className="container faq-grid">
        <div className="faq-intro">
          <p className="eyebrow">Preguntas frecuentes</p>
          <h2>Información clara antes de empezar</h2>
          <p>Si tu consulta no aparece acá, escribinos y te orientamos.</p>
          <a className="text-link" href={contact.whatsappUrl} target="_blank" rel="noreferrer">Hacer otra consulta <ArrowRight size={18} /></a>
        </div>
        <div className="accordion">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary>{faq.question}<ChevronDown aria-hidden="true" /></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <>
      <section className="contact-section" id="contacto">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow">Estamos para orientarte</p>
            <h2>Conversemos sobre el acompañamiento que están buscando</h2>
            <a className="button button-light" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
              <MessageCircle size={20} /> Escribir por WhatsApp
            </a>
          </div>
          <address className="contact-details">
            <a href={contact.mapsUrl} target="_blank" rel="noreferrer"><MapPin /><span><strong>Consultorio</strong>{contact.address}</span></a>
            <div><Clock3 /><span><strong>Horarios</strong>{contact.hours}</span></div>
            <a href={contact.emailUrl} aria-label={`Enviar un correo a ${contact.email}`}><Mail /><span><strong>Correo</strong>{contact.email}</span></a>
            <a href={contact.instagramUrl} target="_blank" rel="noreferrer"><AtSign /><span><strong>Instagram</strong>{contact.instagram}</span></a>
          </address>
        </div>
      </section>
      <footer className="footer">
        <div className="container footer-inner">
          <Brand compact />
          <p>© {new Date().getFullYear()} Consultorio Integral Psique.</p>
        </div>
      </footer>
      <a className="floating-whatsapp" href={contact.whatsappUrl} target="_blank" rel="noreferrer" aria-label="Consultar por WhatsApp">
        <MessageCircle />
      </a>
    </>
  )
}
