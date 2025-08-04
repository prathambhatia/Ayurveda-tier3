import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Mar Ki Taqa Ka Ayurvedic Raaz</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hook & Benefits */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>{`Mardo Ki Taqat Ka Ayurvedic Raaz!`}</h1>
        <Image
          src="/combo.jpg"
          alt="DAS Ayurvedic Oil"
          width={300}
          height={300}
          className={styles.productImage}
          priority
        />
        <ul className={styles.bulletList}>
          <ul className={styles.featureList}>
            <li className={styles.featureItem}>
              🌿 <strong>बिल्कुल सुरक्षित, बाहरी उपयोग के लिए</strong> — बिना किसी साइड इफेक्ट के
            </li>
            <li className={styles.featureItem}>
              ⚡ <strong>शरीर की थकावट और कमजोरी</strong> को जड़ से मिटाए
            </li>
            <li className={styles.featureItem}>
              💪 <strong>स्वाभाविक रूप से बढ़ाए लिंग की ताकत</strong> और प्रदर्शन क्षमता
            </li>
            <li className={styles.featureItem}>
              🧪 <strong>100% शुद्ध आयुर्वेदिक तेल</strong>, बिना किसी केमिकल मिलावट के
            </li>
          </ul>
        </ul>
      <div className={styles.fixedButton}>
        <a href="https://prathambhatia.github.io/suspicious-gif-page/" target="_blank" rel="noopener noreferrer">
          BUY NOW
        </a>
      </div>
      </section>

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

      {/* Testimonials */}
      <section className={styles.testimonials}>
        <h2 className={styles.testTitle}>Kya Kehte Hain Hamare Grahak?</h2>
        <p className={styles.testItem}>{`⭐⭐⭐⭐⭐ "Pehle main thak jata tha, ab toh biwi bhi khush!" – Ramesh, Bihar`}</p>
        <p className={styles.testItem}>{`⭐⭐⭐⭐⭐ "Natural hai, asli asar karta hai" – Ashok, UP`}</p>
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
//https://forms.gle/your-google-form-link