import React from 'react';

function How(props) {
    return (
        <div className="how-to-use flex-center-colum">
            <div className="body-cover">
                <div className="grid-3x">
                    <div className="tab flex-center-colum">
                        <img className="tab-image" src="/assets/images/SecureServer-amico.png" alt=""/>
                        <p style={{color: 'black'}}>
                            <strong>
                                Step 1: Data Encryption 
                            </strong>
                        </p>
                        <p>
                            The plaintext data is encrypted using a symmetric encryption algorithm and a randomly generated encryption key, resulting in ciphertext data.

                        </p>
                    </div>

                    <div className="tab flex-center-colum">
                        <img className="tab-image" src="/assets/images/Key-rafiki.png" alt="image"/>
                        <p style={{color: 'black'}}>
                            <strong>
                                Step 2: Data Decryption 
                            </strong>
                        </p>
                        <p>
                            The ciphertext data is decrypted using the same symmetric encryption algorithm and the original encryption key, recovering the original plaintext data.
                        </p>
                    </div>

                    <div className="tab flex-center-colum">
                        <img className="tab-image" src="/assets/images/Messaging-amico.png" alt=""/>
                        <p style={{color: 'black'}}>
                            <strong>
                                Step 3: User Access 
                            </strong>
                        </p>
                        <p>
                            The decrypted plaintext data is rendered in a human-readable format, allowing the intended recipient to access and read the original message.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default How;