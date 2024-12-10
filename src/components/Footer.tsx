export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-15 py-6">
      <div className="container mx-auto text-center text-white-400">
        <p>
          &copy; {new Date().getFullYear()} Lucas Svirsky. Made with 💖, hard work, and just a little bit of magic.
        </p>
      </div>
    </footer>
  );
}
