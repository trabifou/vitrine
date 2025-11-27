import NavItem from './NavItem'
import './Navbar.css'

const Navbar = ({ activeSection, onNavigate }) => {
  const navItems = [
    {
      id: 'presentation',
      label: 'Présentation',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      )
    },
    {
      id: 'projets',
      label: 'Projets',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
      )
    },
    {
      id: 'contact',
      label: 'Contact',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      )
    }
  ]

  return (
    <nav className="main-nav">
      {navItems.map(item => (
        <NavItem
          key={item.id}
          id={item.id}
          label={item.label}
          icon={item.icon}
          isActive={activeSection === item.id}
          onClick={() => onNavigate(item.id)}
        />
      ))}
    </nav>
  )
}

export default Navbar
