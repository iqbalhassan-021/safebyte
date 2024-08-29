import React from 'react';
import Navbar from '../components/NavBAr';
import Footer from '../components/Footer';


function Main(props) {
  let encVisible = true;
  let decVisible = true;

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
                <div
                  className="tab"
                  style={{
                    width: '100%',
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <h3>Encryption</h3>
                  <label htmlFor="encryptiondata">Message</label>
                  <textarea
                    name="encryptiondata"
                    id="encryptiondata"
                    className="enc"
                    placeholder="message"
                    rows="10"
                  ></textarea>
                </div>
                <div className="tab temp">
                  <input
                    type="text"
                    className="key"
                    placeholder="key"
                    id="key"
                    name="key"
                  />
                  <button className="primary-button encrypt">Encrypt</button>
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
                  ></textarea>
                </div>
                <div className="tab temp">
                  <input
                    type="text"
                    className="key"
                    placeholder="key"
                    id="key"
                    name="key"
                  />
                  <button className="primary-button">Decrypt</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<Footer></Footer>
    </>
  );
}

export default Main;