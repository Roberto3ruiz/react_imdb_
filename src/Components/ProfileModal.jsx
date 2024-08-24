import React from 'react';
import './ProfileModal.css';

function ProfileModal() {
  return (
    <div className="profile-modal" style={{ display: 'block' }}> {/* Fuerza la visibilidad */}
      <div className="profile-modal-section">
        <h3>Tu cuenta</h3>
        <ul>
          <li>Settings</li>
          <li>Sign out</li>
        </ul>
      </div>
      <div className="profile-modal-section">
        <h3>Perfiles</h3>
        <ul>
          <li>Roberto RR</li>
          <li>Agregar nuevo</li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileModal;