
export default function Home() {
  return (
    <main style={{fontFamily:'sans-serif', background:'#0a0a0a', color:'white', minHeight:'100vh'}}>
      <header style={{padding:'20px', display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid #222'}}>
        <h1 style={{fontWeight:'bold', fontSize:'18px'}}>BHOUS INVESTMENT</h1>
        <a href="https://wa.me/237670300644" style={{background:'#25D366', padding:'10px 20px', borderRadius:'20px', color:'white', textDecoration:'none', fontSize:'14px'}}>WhatsApp</a>
      </header>

      <section style={{textAlign:'center', padding:'50px 20px'}}>
        <h2 style={{fontSize:'30px', fontWeight:'bold'}}>Invest in Buea Real Estate<br/>Earn 20% - 45% ROI</h2>
        <p style={{color:'#aaa', marginTop:'15px'}}>Secure land & rentals in Molyko, Buea</p>
        <div style={{marginTop:'25px'}}>
          <a href="#pay" style={{background:'white', color:'black', padding:'14px 28px', borderRadius:'30px', fontWeight:'bold', textDecoration:'none'}}>Invest Now - MoMo</a>
        </div>
      </section>

      <section id="plans" style={{padding:'20px', display:'grid', gap:'20px', maxWidth:'500px', margin:'auto'}}>
        <div style={{background:'#1a1a1a', padding:'25px', borderRadius:'15px', border:'1px solid #333'}}>
          <h3>Starter - 250,000 FCFA</h3>
          <p style={{fontSize:'26px', fontWeight:'bold', color:'#4ade80'}}>20% in 6 Months</p>
          <p style={{color:'#aaa', fontSize:'13px', marginTop:'8px'}}>Land banking in Molyko / Muea</p>
        </div>
        <div style={{background:'#1a1a1a', padding:'25px', borderRadius:'15px', border:'1px solid #facc15'}}>
          <h3>Growth - 1,000,000 FCFA ⭐ BEST</h3>
          <p style={{fontSize:'26px', fontWeight:'bold', color:'#facc15'}}>35% in 12 Months</p>
          <p style={{color:'#aaa', fontSize:'13px', marginTop:'8px'}}>Rental studios for UB students</p>
        </div>
        <div style={{background:'#1a1a1a', padding:'25px', borderRadius:'15px', border:'1px solid #333'}}>
          <h3>Premium - 5,000,000 FCFA</h3>
          <p style={{fontSize:'26px', fontWeight:'bold', color:'#60a5fa'}}>45% + Land Title</p>
          <p style={{color:'#aaa', fontSize:'13px', marginTop:'8px'}}>Own land with official documents</p>
        </div>
      </section>

      <section id="pay" style={{padding:'20px', maxWidth:'500px', margin:'30px auto', background:'#111', borderRadius:'15px', border:'1px solid #25D366'}}>
        <h2 style={{fontSize:'20px', fontWeight:'bold', textAlign:'center'}}>How to Invest - Pay with MoMo</h2>
        <div style={{marginTop:'20px', background:'black', padding:'20px', borderRadius:'10px'}}>
          <p style={{color:'#aaa', fontSize:'12px'}}>MTN MOMO</p>
          <p style={{fontSize:'22px', fontWeight:'bold', letterSpacing:'1px'}}>6 70 XX XX XX</p>
          <p style={{color:'#aaa', fontSize:'13px', marginTop:'5px'}}>Name: DAVID AKUB / BHOUS INVESTMENT</p>
          <hr style={{border:'none', borderTop:'1px solid #222', margin:'15px 0'}}/>
          <p style={{color:'#aaa', fontSize:'12px'}}>ORANGE MONEY</p>
          <p style={{fontSize:'22px', fontWeight:'bold'}}>6 90 XX XX XX</p>
          <p style={{color:'#aaa', fontSize:'13px', marginTop:'5px'}}>Name: DAVID AKUB</p>
        </div>
        <ol style={{marginTop:'20px', color:'#ccc', fontSize:'14px', lineHeight:'1.8', paddingLeft:'20px'}}>
          <li>Send MoMo + screenshot to WhatsApp</li>
          <li>We visit land together in Buea (Molyko)</li>
          <li>Sign contract + receive receipt</li>
          <li>Get profit after period</li>
        </ol>
        <a href="https://wa.me/23767300644?text=Hello%20Bhous%20I%20want%20to%20invest" style={{display:'block', textAlign:'center', background:'#25D366', color:'white', padding:'15px', borderRadius:'30px', marginTop:'20px', fontWeight:'bold', textDecoration:'none'}}>Send MoMo Screenshot on WhatsApp</a>
        <p style={{textAlign:'center', color:'#666', fontSize:'11px', marginTop:'12px'}}>Visit our office: Check-point Molyko, Buea - Open Mon-Sat 8am-5pm</p>
      </section>

      <footer style={{textAlign:'center', padding:'40px', color:'#555', fontSize:'12px'}}>
        © 2026 Bhous Investment - Buea, Cameroon | RC: XXXXX<br/>Investment is subject to market risk
      </footer>
    </main>
  )
}
