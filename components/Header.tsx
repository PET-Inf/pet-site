import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="header">
      <Link href="/">
        <Image src="/logo_PET.png" alt="Logo" className="logo" width={200} height={40}/>
      </Link>

      <nav className="navbar">
        <Link href="/#oi">Oi</Link>
        <Link href="/#sobre">Sobre</Link>
        <Link href="/#projetos">Projetos</Link>
        <Link href="/#historia">História</Link>
        <Link href="/#nossaequipe">Nossa Equipe</Link>
        <Link href="/#selecao">Seleção</Link>
        <Link href="/#contato">Contato</Link>

      </nav>
    </header>
  )
}