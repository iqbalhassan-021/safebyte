import React, { useState } from 'react';
import Navbar from '../components/NavBAr';
import Footer from '../components/Footer';
import Ads from '../components/Ads';

function Main(props) {
  let encVisible = true;
  let decVisible = true;
  const [message, setMessage] = useState('');
  const [key, setKey] = useState('');
  const [encryptedMessage, setEncryptedMessage] = useState('');
  const [decryptedMessage, setDecryptedMessage] = useState('');
  const [isEncrypted, setIsEncrypted] = useState(false);

  const handleEncrypt = () => {
    // Generate a random key
    const generatedKey = Math.random().toString(36).substr(2, 10);
    setKey(generatedKey);

    // Encrypt the message using the generated key
    let encrypted = '';
    for (let i = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i) ^ generatedKey.charCodeAt(i % generatedKey.length);
      encrypted += String.fromCharCode(charCode);
    }
    setEncryptedMessage(encrypted);
    setMessage(encrypted); // Replace the original message with the encrypted message
    setIsEncrypted(true);
  };

  const handleDecrypt = () => {
    // Decrypt the message using the provided key
    let decrypted = '';
    for (let i = 0; i < message.length; i++) {
      const charCode = message.charCodeAt(i) ^ key.charCodeAt(i % key.length);
      decrypted += String.fromCharCode(charCode);
    }
    setDecryptedMessage(decrypted);
    setMessage(decrypted); // Replace the encrypted message with the decrypted message
    setIsEncrypted(false);
  };

  const handleKeyChange = (e) => {
    setKey(e.target.value);
  };

  const handleDecryptInputChange = (e) => {
    setMessage(e.target.value);
  };

  function switchHitEnc() {
    encVisible = true;
    decVisible = false;
    document.getElementById('encHolder').style.display = 'flex';
    document.getElementById('decHolder').style.display = 'none';
  }

  function switchHitDec() {
    decVisible = true;
    encVisible = false;
    document.getElementById('decHolder').style.display = 'flex';
    document.getElementById('encHolder').style.display = 'none';
  }

  return (
    <>
      <Navbar></Navbar>
      <Ads></Ads>
      <div className="container">
        <div className="backgrond"></div>
        <div className="body-cover">
          <div className="main-part">
            <div className="tab flex-center-row">
              <button className="tab-button" onClick={switchHitEnc}>
                Encryption
              </button>
              <button className="tab-button" onClick={switchHitDec}>
                Decryption
              </button>
            </div>
            <div className="tab flex-center-colum">
              <div className="encryption flex-center-colum" id="encHolder" style={{ display: 'flex' }}>
                <div className="tab" style={{ width: '100%', padding: '20px', display: 'flex', flexDirection: 'column', }}>
                  <h3>Encryption</h3>
                  <label htmlFor="encryptiondata">Message</label>
                  <textarea
                    name="encryptiondata"
                    id="encryptiondata"
                    className="enc"
                    placeholder="message"
                    rows="10"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="tab temp">
                  <input
                    type="text"
                    className="key"
                    placeholder="key"
                    id="key"
                    name="key"
                    value={key}
                    readOnly
                  />
                  <button className="primary-button encrypt" onClick={handleEncrypt}>Encrypt</button>
                </div>
              </div>
              <div className="decryption flex-center-colum" id="decHolder" style={{ display: 'none' }}>
                <div
                  className="tab"
                  style={{
                    width: '100%',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <h3>Decryption</h3>
                  <label htmlFor="decryptiondata">Message</label>
                  <textarea
                    name="decryptiondata"
                    id="decryptiondata"
                    className="enc"
                    placeholder="message"
                    rows="10"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="tab temp">
                  <input
                    type="text"
                    className="key"
                    placeholder="key"
                    id="key"
                    name="key"
                    value={key}
                    onChange={handleKeyChange}
                  />
                  <button className="primary-button" onClick={handleDecrypt}>Decrypt</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Ads></Ads>
<Footer></Footer>
    </>
  );
}

export default Main;