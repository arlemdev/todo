import Link from 'next/link';
import { ModeToggle } from './theme-toggle-button';
import { buttonVariants } from './ui/button';

function Navbar() {
  return (
    <nav className="flex justify-between py-5">
      <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 ">
        ToDo App
      </h1>
      <div className="flex gap-x-2 items-start">
        <Link
          href={'/crear'}
          className={buttonVariants({ variant: 'default' })}
        >
          Crear tarea
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
