import React from 'react'

export default function About() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontWeight: 400, textAlign: 'center', marginBottom: '2rem' }}>ABOUT</h1>
      
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontWeight: 400, borderBottom: '1px solid #000', paddingBottom: '0.5rem', marginBottom: '1rem' }}>THE PROJECT</h2>
        <p style={{ marginBottom: '1rem' }}>
          Every Record Store is a guide to vinyl record shops throughout New York City. 
          This project began from a desire to document and share experiences finding music 
          in the physical world, creating a resource for vinyl enthusiasts across the city.
        </p>
        <p>
          As streaming dominates how we consume music, physical record stores remain important 
          cultural spaces where music is celebrated, discovered, and discussed. Each store has 
          its own character and community - this site aims to document these unique spaces.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontWeight: 400, borderBottom: '1px solid #000', paddingBottom: '0.5rem', marginBottom: '1rem' }}>RATING SYSTEM</h2>
        <p style={{ marginBottom: '1rem' }}>
          Ratings are represented by colored vinyl records on the map:
        </p>
        
        <div style={{ border: '1px solid #000', padding: '1.5rem', marginBottom: '1rem' }}>
          <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '16px', height: '16px', borderRadius: '50%', marginRight: '1rem', background: '#ff0000', border: '1px solid #fff' }}></div>
            <div>
              <strong>BAD</strong> - Poor selection, condition, disorganization, or service issues.
            </div>
          </div>
          
          <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '16px', height: '16px', borderRadius: '50%', marginRight: '1rem', background: '#000000', border: '1px solid #fff' }}></div>
            <div>
              <strong>OK</strong> - Standard record store, decent selection, worth visiting if in the area.
            </div>
          </div>
          
          <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '16px', height: '16px', borderRadius: '50%', marginRight: '1rem', background: '#FFD700', border: '1px solid #fff' }}></div>
            <div>
              <strong>GREAT</strong> - Exceptional selection, fair pricing, knowledgeable staff.
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '16px', height: '16px', borderRadius: '50%', marginRight: '1rem', background: '#B9F2FF', border: '1px solid #fff' }}></div>
            <div>
              <strong>BEST IN BOROUGH</strong> - The crown jewel, reserved for the single best store in each borough.
            </div>
          </div>
        </div>
        
        <p>
          Ratings consider selection breadth and depth, record condition, pricing fairness, 
          staff knowledge, store organization, special offerings, and overall atmosphere.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontWeight: 400, borderBottom: '1px solid #000', paddingBottom: '0.5rem', marginBottom: '1rem' }}>ABOUT ME</h2>
        <p style={{ marginBottom: '1rem' }}>
          I'm a music enthusiast and vinyl collector living in New York City. My collection 
          spans from jazz to indie rock, with a particular interest in soul and funk records 
          from the 1970s. Physical media offers a connection to music that digital formats can't replicate.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          This project combines my passion for music, writing, and exploring NYC. Every store is 
          personally visited, and all reviews represent my honest, uncompensated opinions.
        </p>
        <p>
          Have suggestions or spotted a record store I've missed? 
          Contact me at <a href="mailto:contact@everyrecordstorenyc.com" style={{ textDecoration: 'underline' }}>
          contact@everyrecordstorenyc.com</a>
        </p>
      </section>
    </div>
  )
} 