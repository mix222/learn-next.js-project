'use client';

import { useParams } from 'next/navigation';
import { Noto_Sans_Lao } from 'next/font/google';

const notoSansLao = Noto_Sans_Lao({
  subsets: ['lao'],
  weight: ['400', '500', '700'],
});

export default function ProductDetailPage() {
  const params = useParams();
  const id = params?.id;

  return (
    <div
      className={notoSansLao.className}
      style={{
        fontFamily: `${notoSansLao.style.fontFamily}, 'Phetsarath OT', sans-serif`,
        padding: '30px',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '15px' }}>
        🛒 ໜ້າລายລະອຽດສິນຄ້າ
      </h1>
      
      <div style={{ padding: '15px', border: '1px solid #ccc', borderRadius: '8px', background: '#fff' }}>
        <p>ID ທີ່ອ່ານໄດ້ຈາກ URL (useParams): <strong style={{ color: '#e11d48' }}>{id}</strong></p>
      </div>
    </div>
  );
}