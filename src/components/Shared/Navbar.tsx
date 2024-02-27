import { IoSunnyOutline } from 'react-icons/io5';
import { RiMoonClearFill } from 'react-icons/ri';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Switch } from '@/components/ui/switch';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useAppSelector, useAppDispatch } from '@/state/hooks';
import { toggleLanguage } from '@/state/Slices/language';
import { toggleTheme } from '@/state/Slices/theme';
import { useTranslation } from 'react-i18next';
import { nav } from '@/locales/ar';
import { useTheme } from '@/state/context/theme-provider';
import { Link } from 'react-router-dom';
import { cn } from '@/utils';

const Navbar = () => {
  const { t, i18n } = useTranslation('nav');
  const dispatch = useAppDispatch();
  const language = useAppSelector((state) => state.language.arabic);
  const { setTheme, theme } = useTheme();

  const handleToggleLanguage = (language: boolean) => {
    dispatch(toggleLanguage());
    !language ? i18n.changeLanguage('ar') : i18n.changeLanguage('en');
  };
  const handleToggletheme = () => {
    dispatch(toggleTheme());
  };

  const dropDownKeys = Object.keys(nav.dropDownMenu) as Array<keyof typeof nav.dropDownMenu>;
  const menuKeys = Object.keys(nav.menu) as Array<keyof typeof nav.menu>;
  return (
    <nav className='flex items-center justify-between w-full px-5 md:px-10 h-[10vh]'>
      <Link to='/'>
        <img src='icons/logo.png' className='md:w-24 w-14 ' />
      </Link>
      <div className=' h-full  text-lg md:text-2xl hidden sm:flex '>
        {menuKeys.map((key) => (
          <Link key={key} to={key == 'home' ? '/' : `/${key}`} className='flex items-center  px-4 h-full hover:opacity-70  '>
            {t(`menu.${key}`)}
          </Link>
        ))}
      </div>
      <div className='flex items-center   '>
        <div className='flex items-center'>
          <div onClick={handleToggletheme} className='cursor-pointer '>
            {theme === 'light' ? (
              <IoSunnyOutline onClick={() => setTheme('dark')} />
            ) : (
              <RiMoonClearFill onClick={() => setTheme('light')} />
            )}
          </div>
          <hr className='w-6 rotate-90 border-foreground ' />
          <div className='relative flex items-center cursor-pointer  '>
            <Switch onCheckedChange={() => handleToggleLanguage(language)} className='' />
            {language ? (
              <p className='absolute left-0 text-xs mx-1 pointer-events-none'>Ar</p>
            ) : (
              <p className='absolute left-0 mx-1 text-xs pointer-events-none text-accent'>En</p>
            )}
          </div>
        </div>
        <div className='px-6'>
          <DropdownMenu dir={language ? 'rtl' : 'ltr'}>
            <DropdownMenuTrigger>
              <RxHamburgerMenu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {dropDownKeys.map((key) => (
                <DropdownMenuItem key={key} asChild className=''>
                  <Link
                    key={key}
                    to={key == 'home' ? '/' : `/${key}`}
                    className={cn(
                      `w-full cursor-pointer ${['home', 'activities', 'aboutus'].includes(key) ? 'flex sm:hidden' : 'flex'}`,
                    )}
                  >
                    {t(`dropDownMenu.${key}`)}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
