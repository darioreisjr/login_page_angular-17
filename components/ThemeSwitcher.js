import { BsSun,BsFillMoonStarsFill } from 'react-icons/bs';

function ThemeSwitcher() {
    return (
        <div className="flex mt-6 bg-white justify-center dark:bg-gray-900 rounded-3xl p-1">
            <button
                type="button"
                aria-label="Use Dark Mode"
                onClick={() => {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('theme', 'dark');
                } }
                className="flex items-center h-full pr-2 dark:bg-primary rounded-3xl flex justify-center align-center p-2 w-24 h-10 transition"
            >
                <BsFillMoonStarsFill/>
            </button>

            <button
                type="button"
                aria-label="Use Light Mode"
                onClick={() => {
                    document.documentElement.classList.remove('dark');
                    localStorage.setItem('theme', 'light');
                } }
                className="flex items-center h-full pr-2 bg-primary dark:bg-transparent rounded-3xl flex justify-center align-center p-2 w-24 h-10 transition"
            >
                <BsSun/>
            </button>
        </div>
    );
}

export default ThemeSwitcher;