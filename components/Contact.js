import React from 'react';

const Contact = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Contact Us</h2>
      <div style={styles.contactInfo}>
        <p style={styles.infoItem}>Email: <a href="mailto:KUSHWANTH2250@GMAIL.COM" style={styles.link}>KUSHWANTH2250@GMAIL.COM</a></p>
        <p style={styles.infoItem}>Phone: <a href="tel:+910963852741" style={styles.link}>+910963852741</a></p>
        <p style={styles.infoItem}>Address: HYD</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#333',
  },
  contactInfo: {
    textAlign: 'left',
  },
  infoItem: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default Contact;
