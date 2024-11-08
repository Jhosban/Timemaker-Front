export const Register = () => {
    return (
        <div className="h-screen md:flex">
            <div
                className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-blue-600 to-blue-400 i justify-around items-center hidden">
                <div>
                    <img className="w-2/3 mx-auto" src="logo_horario.png" alt="Logo Horario" />
                    <h1 className="text-300 font-bold text-4xl font-sans"></h1>
                    <p className="text-100 mt-1"></p>
                </div>
                <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-yellow-100 border-opacity-50 border-t-8"></div>
                <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-yellow-100 border-opacity-50 border-t-8"></div>
                <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-yellow-100 border-opacity-50 border-t-8"></div>
                <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-yellow-100 border-opacity-50 border-t-8"></div>
            </div>
            <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
                <form className="bg-white">
                    <h1 className="text-gray-800 font-bold text-2xl mb-1 text-center">Registrate</h1>
                    <p className="text-sm font-normal text-gray-600 mb-4">Bienvenido a TimeMaker!!</p>
                    <div className="flex items-center border-2 border-gray-300 py-2 px-3 rounded-2xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                        <input className="pl-2 outline-none border-none w-full" type="text" placeholder="Correo" />
                    </div>
                    <div className="flex items-center border-2 border-gray-300 py-2 px-3 rounded-2xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fillRule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clipRule="evenodd" />
                        </svg>
                        <input className="pl-2 outline-none border-none w-full" type="password" placeholder="Contraseña" />
                    </div>
                    <div className="flex items-center border-2 border-gray-300 py-2 px-3 rounded-2xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fillRule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clipRule="evenodd" />
                        </svg>
                        <input className="pl-2 outline-none border-none w-full" type="password" placeholder="Confirmar contraseña" />
                    </div>
                    <button type="submit" className="block w-full bg-blue-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Registrarse</button>
                </form>
            </div>
        </div>
    )
}
