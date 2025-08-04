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
        <img src="/NavBar.png" alt="Logo" className={styles.logoImage} />
        <h2 className={styles.tagline}>💥 मर्दों की असली ताक़त का राज़ अब आपके पास! 💥</h2>
      </div>

      {/* Product Section */}
      <section className={styles.productSection}>
        <div className={styles.productImageWrapper}>
          <Image
            src="/combo.jpg"
            alt="Ayurvedic Oil"
            width={300}
            height={400}
            className={styles.productImage}
          />
          <div className={styles.discountBadge}>25% OFF</div>
        </div>

        <section className={styles.fomoSection}>
          <p className={styles.fomoText}>{`गुप्त रोग के लिए रामबाण`}</p>
        </section>

        {/* Price Info */}
        <div className={styles.priceInfo}>
          <p className={styles.originalPrice}>₹999 /-</p>
          <p className={styles.discountedPrice}>₹749 /-</p>
        </div>

        {/* Certifications */}
        <div className={styles.certifications}>
          <Image src="/fssai-logo-fssai-icon-free-free-vector.jpg" alt="FSSAI" width={70} height={70} />
          <Image src="/ISO_9001-2015.svg.png" alt="ISO" width={70} height={70} />
          <Image src="/gmp-quality-logo-png_seeklogo-285045.png" alt="GMP" width={70} height={70} />
        </div>
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
          src="/before-after.png"
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
          <p className={styles.testItem}>{`⭐⭐⭐⭐⭐`}</p>
          <p className={styles.testText}>{`"Pehle main thak jata tha, ab toh biwi bhi khush!"`}</p>
          <p className={styles.testAuthor}>– Ramesh, Bihar</p>
        </div>
        <div className={styles.testimonialCard}>
          <p className={styles.testItem}>{`⭐⭐⭐⭐⭐`}</p>
          <p className={styles.testText}>{`"Natural hai, asli asar karta hai"`}</p>
          <p className={styles.testAuthor}>– Ashok, UP</p>
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
