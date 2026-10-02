import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <p>Copyright &copy; PET - Informática {new Date().getFullYear()}</p>
      <div className="logos">
          <Image src="/logo_PUCRS.png" alt="Logo PUCRS" width={150} height={150}/>
          <Image src="/logo_MEC.png" alt="Logo MEC" width={150} height={50}/>
      </div>
      <p>Política de Privacidade</p>
    </footer>
  );
}
