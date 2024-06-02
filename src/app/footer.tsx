let year: number = new Date().getFullYear();

export function Footer() {
    return (
      <footer>
        <p className="text-center">Copyright &copy; {year} - Adeptus TEAM </p>
      </footer>
    ); 
  }