import { LockupHorizontal } from '../brand/index.js';
import styles from './Nav.module.css';

function renderLinks(active) {
  if (active === 'home') {
    return [
      { href: '/#products', label: 'Products' },
      // { href: '/#studio', label: 'Studio' },
      // { href: '/#writing', label: 'Writing' },
      // { href: '/logo-system/', label: 'Logo system →' },
      // { href: '/guidelines/', label: 'Guidelines →' },
    ].map((link) => (
      <a key={link.href} href={link.href} className={styles.link}>
        {link.label}
      </a>
    ));
  }

  const peers = [
    { key: 'home', href: '/', label: 'Homepage' },
    { key: 'logo-system', href: '/logo-system/', label: 'Logo system' },
    { key: 'guidelines', href: '/guidelines/', label: 'Guidelines' },
  ];

  return peers.map((peer) =>
    peer.key === active ? (
      <span key={peer.key} className={styles.active}>
        {peer.label}
      </span>
    ) : (
      <a key={peer.key} href={peer.href} className={styles.link}>
        {peer.label}
      </a>
    )
  );
}

export function Nav({ active }) {
  return (
    <nav className={styles.nav}>
      <LockupHorizontal size={16} />
      <div className={styles.links}>{renderLinks(active)}</div>
    </nav>
  );
}
