import React from 'react';
import Link from 'next/link';
import styles from './Menu.module.scss';

function Menu() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a> - Home - </a>
      </Link>
      <Link href="/ssg/[slug]" as="/ssg/static-generated">
        <a> - Static - </a>
      </Link>
      <Link href="/ssg/[slug]" as="/ssg/static-generated2">
        <a> - Static 2 - </a>
      </Link>
      <Link href="/ssr/[slug]" as="/ssr/server-side-rendered">
        <a> - SSR - </a>
      </Link>
      <Link href="/ssr/[slug]" as="/ssr/server-side-rendered2">
        <a> - SSR 2 - </a>
      </Link>

      <Link href="/isr/[slug]" as="/isr/server-side-rendered">
        <a> - ISR - </a>
      </Link>
      <Link href="/isr/[slug]" as="/isr/server-side-rendered2">
        <a> - ISR 2 - </a>
      </Link>

      <Link href="/csr/[slug]" as="/csr/client-side-rendered">
        <a> - CSR - </a>
      </Link>
      <Link href="/csr/[slug]" as="/csr/client-side-rendered2">
        <a> - CSR 2 - </a>
      </Link>
      <Link href="/simplepage" as="/simplepage">
        <a> - simple page - - </a>
      </Link>
      <Link href="/simple/[blog]/[post]" as="/simple/log/1234">
        <a> - simple blog post</a>
      </Link>
    </nav>
  );
}

export { Menu };
