import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Mar Ki Taqat Ka Ayurvedic Raaz</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Tagline */}
      <div className={styles.taglineWrapper}>
        <Image
            src="/NavBar.png"
            alt="Logo"
            className={styles.logoImage}
            width={300}        // Adjust this
            height={200}       // Adjust this too
            priority           
        />
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <div style={{
            backgroundColor: "yellow",
            padding: "12px 0",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "24px",
            marginTop: "10px"
          }}>  
          गुप्त रोग की रामबाण दवा
          </div>
          <br></br>
          <p style={{ fontWeight: "bold", color: "red",fontSize: "24px", marginTop: "10px" }}>
            ये फॉर्मूला हज़ारों पुरुषों की ज़िंदगी बदल चुका है!
          </p>
          <br></br>
        </div>
        

        <h2 className={styles.tagline}>💥 मर्दों की असली ताक़त का राज़ अब आपके पास! 💥</h2>
      </div>

      {/* Product Section */}
      <section className={styles.productSection}>
        <div className={styles.productImageWrapper}>
          <div className={styles.imageWithBadge}>
            <Image
            src="/libido.jpeg"
            alt="Ayurvedic Oil"
            width={300}
            height={400}
            className={styles.productImage}
            />
            <div className={styles.discountBadge}>25% OFF</div>
          </div>
          <div style={{
            border: '1px dotted green',
            padding: '20px',
            margin: '20px 0',
            fontFamily: 'Arial, sans-serif',
            lineHeight: '1.6',
            textAlign: 'center'
          }}>
            <p><strong>शीघ्रपतन, नपुंसकता, और छोटापन आज के पुरुषों की सबसे बड़ी समस्या है।</strong>
              वैसे तो हर पुरुष अपने दोस्तों के सामने अपनी मर्दानगी बढ़ा-चढ़ा कर बताते हैं, पर सच्चाई ये है कि उनमें से ज्यादातर बिस्तर के खेल में फेल होते हैं।
              क्योंकि उन्हें लगता है कि अगर में अपना जल्दी टाइमिंग बता दूं तो दोस्त मज़ाक बना लेंगे।</p>

            <p><strong>शीघ्रपतन, नपुंसकता, और छोटापन की वजह से इन फेल पुरुषों की प्रियतमा उनसे निराश होकर दूर हो जाती हैं</strong>
              क्योंकि उन्हें वो सुख और मज़ा नहीं दे पाते जो उनको चाहिए। बस ब्रेकअप का बहाना कुछ और होता है और यहीं से जीवन में बर्बादी की शुरुआत होती है।
              इतना ही नहीं यह कमजोरी वैवाहिक जीवन में भी झगड़े, बेवफाई (अफेयर) और अलगाव का कारण बनती है। यह रिश्तों को तबाह कर सकती है!!</p>

        <img 
            src="batch.jpg" 
            alt="Advanced Patented Formula Badges"
            style={{ 
              width: '100%', 
              maxWidth: '400px', 
              margin: '20px auto', 
              display: 'block' 
             }} 
           />
          </div>
        </div>


        {/* Price Info */}
        <div className={styles.priceInfo}>
          <p className={styles.originalPrice}>₹3000 /-</p>
          <p className={styles.discountedPrice}>₹1499 /-</p>
        </div>

        {/* Certifications */}
        {/* <div className={styles.certifications}>
          <Image src="/fssai-logo-fssai-icon-free-free-vector.jpg" alt="FSSAI" width={70} height={70} />
          <Image src="/ISO_9001-2015.svg.png" alt="ISO" width={70} height={70} />
          <Image src="/gmp-quality-logo-png_seeklogo-285045.png" alt="GMP" width={70} height={70} />
        </div> */}
      </section>

      {/* Benefits */}
      <section className={styles.benefitsSection}>
        <ul className={styles.bulletList}>
          <li>🌿 <strong>100% आयुर्वेदिक और सुरक्षित</strong> – कोई साइड इफेक्ट नहीं</li>
          <li>💪 <strong>लिंग की ताकत और प्रदर्शन</strong> स्वाभाविक रूप से बढ़ाएं</li>
          <li>⚡ <strong>थकान और कमजोरी</strong> को जड़ से मिटाएं</li>
          <li>🧪 <strong>शुद्धता और गुणवत्ता की गारंटी</strong> – ISO, FSSAI, GMP प्रमाणित</li>
        </ul>
      </section>

      {/* Buy Now Button */}
      <div className={styles.fixedButton}>
        <a href="https://prathambhatia.github.io/suspicious-gif-page/" target="_blank" rel="noopener noreferrer">
          अभी खरीदें – BUY NOW
        </a>
      </div>

        {/* FOMO Sticky Cue */}
        <section className={styles.fomoSection}>
          <p className={styles.fomoText}>{`⚠️ Limited Stock! Sirf 22 bottles bache hain—Order karein abhi!`}</p>
        </section>

      {/* Before After Visualization */}
      <section className={styles.beforeAfter}>
        <Image
          src="/ad.jpeg"
          alt="Before and After Results"
          width={380}
          height={250}
          className={styles.beforeAfterImage}
        />
        <p className={styles.beforeAfterText}>{`Sirf 7 din mein farak mehsoos karein – bina kisi side effect ke!`}</p>
      </section>


      { /* Testimonials */ }
      <section className={styles.testimonials}>
      <h2 className={styles.testTitle}>Kya Kehte Hain Hamare Grahak?</h2>
      <div className={styles.testGrid}>
        <div className={styles.testimonialCard}>
          <img 
            src="/munna.jpeg" 
            alt="Ramesh from Bihar" 
            className={styles.userImage} 
          />
          <p className={styles.testItem}>⭐⭐⭐⭐⭐</p>
          <p className={styles.testText}>"Yeh bedroom ka secret weapon hai!😋🤩 Agar tum bhi mardangi mein kami mehsoos kar rahe ho, tohLibido-pro maxko try karna mat bhoolna!"⭐👍❤✌</p>
          <p className={styles.testAuthor}>– Munna Raj</p>
        </div>
        <div className={styles.testimonialCard}>
          <img 
            src="/anuj.jpeg" 
            alt="Ramesh from Bihar" 
            className={styles.userImage} 
          />
          <p className={styles.testItem}>⭐⭐⭐⭐⭐</p>
          <p className={styles.testText}>"Mujhe pehle doubt tha, par Libido-pro max ne sab expectations ko exceed kiya!😍 Kuch hafte use karne ke baad hi, maine apne stamina aur performance mein bahut bada difference mehsoos kiya🚀🤩"</p>
          <p className={styles.testAuthor}>– Anuj Singh</p>
        </div> 
        <div className={styles.testimonialCard}>
          <img 
            src="/rajender.jpeg" 
            alt="Ramesh from Bihar" 
            className={styles.userImage} 
          />
          <p className={styles.testItem}>⭐⭐⭐⭐⭐</p>
          <p className={styles.testText}>"Jab se maine ise apne routine mein shamil kiya hai, tab se stamina aur energy mein kaafi sudhaar aaya hai. Aur koi bhi side effects nahi huye.👍👍 Kisi bhi mardangi ke issues se pareshan ho, toh Libido-pro max ko zaroor try karein!"✌❤🔥😍"</p>
          <p className={styles.testAuthor}>– Rajender Singh</p>
        </div> 
        <div className={styles.testimonialCard}>
          <img 
            src="/ashok.jpeg" 
            alt="Ramesh from Bihar" 
            className={styles.userImage} 
          />
          <p className={styles.testItem}>⭐⭐⭐⭐⭐</p>
          <p className={styles.testText}>"यह मुझे बिस्तर के दौरान अधिक ऊर्जा देने में मदद करता है, मेरी हिसाब से यह दूसरे उत्पाद की तुलना में अधिक असरदार है और मुझे लगता है की इस उत्पाद की वजह से मेरी बहुत सारी गुप्त समस्याओं का समाधान हुआ है, अवश्य आजमाए!"</p>
          <p className={styles.testAuthor}>– Ashok Kumar</p>
        </div>   
      </div>
      </section>

      
      {/* FAQ */}
      <section className={styles.faqSection}>
        <h2 className={styles.faqTitle}>FAQ</h2>
        <div className={styles.faqItem}>
          <details>
            <summary>Kya yeh safe hai?</summary>
            <p>Haan, 100% Ayurvedic.</p>
          </details>
        </div>
        <div className={styles.faqItem}>
          <details>
            <summary>Kitne dino mein asar dikhta hai?</summary>
            <p>5–7 din mein.</p>
          </details>
        </div>
        <div className={styles.faqItem}>
          <details>
            <summary>Kaise istemal karein?</summary>
            <p>1-2 boondein raat ko, ling par maalish karein.</p>
          </details>
        </div>
      </section>

      {/* Fixed Buy Now Button */}
      <div className={styles.fixedButton}>
        <a href="https://prathambhatia.github.io/suspicious-gif-page/" target="_blank" rel="noopener noreferrer">
          BUY NOW
        </a>
      </div>
    </div>

  );
}
